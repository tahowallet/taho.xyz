import { AfterSignStep } from "features/Manifesto/ManifestoPanel/ManifestoPanelSigned/AfterSignStep";
import { discordClientId } from "features/Manifesto/ManifestoPanel/ManifestoPanelSigned/discord-config";
import { DiscordLogo } from "features/Manifesto/ManifestoPanel/ManifestoPanelSigned/DiscordLogo";
import { Message } from "features/Manifesto/ManifestoPanel/Message";
import { FullAccount } from "features/Manifesto/types";
import { css } from "linaria";
import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import {
  bodyDarkGreen40,
  bodyDarkGreen60,
  buttonLabelLightOffWhite,
} from "shared/styles/colors";
import {
  bodySmallSegment18,
  buttonLabelQuincy18,
  labelLetterSpacing,
} from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
} from "shared/styles/lengths";
import { buttonShadow } from "shared/styles/shadows";
import { claimDiscordRole } from "../../api";
import { discordLoginChannel } from "./discord-login";

export function ClaimDiscordRole({ account }: { account: FullAccount }) {
  const [discordToken, setDiscordToken] = useState("");
  const oauthStateRef = useRef("");

  useEffect(() => {
    const onDiscordLogin = (event: MessageEvent<string>): void => {
      const data = new URLSearchParams(event.data);
      if (data.get("state") !== oauthStateRef.current) return;
      const token = data.get("access_token") ?? "";
      setDiscordToken(token);
      if (token) mutate({ discordToken: token });
    };

    discordLoginChannel.addEventListener("message", onDiscordLogin);
    return () => {
      discordLoginChannel.removeEventListener("message", onDiscordLogin);
    };
  }, []);

  const {
    mutate,
    isLoading,
    error,
    data,
  } = useMutation(async ({ discordToken }: { discordToken: string }) =>
    claimDiscordRole({ token: account.token, discordToken })
  );

  return (
    <AfterSignStep
      title={<DiscordLogo />}
      subTitle={
        !data && !isLoading ? (
          <>Sign-in with Discord to receive a special role in our community</>
        ) : null
      }
    >
      {!data && !isLoading && (
        <>
          <button
            className={css`
              background: #4d60ea;
              padding: ${buttonBlockPadding} ${buttonInlinePadding};
              border: none;
              border-radius: ${buttonBorderRadius};
              font: ${buttonLabelQuincy18};
              letter-spacing: ${labelLetterSpacing};
              color: ${buttonLabelLightOffWhite};
              box-shadow: ${buttonShadow};
              cursor: pointer;
            `}
            onClick={() => {
              oauthStateRef.current = (Math.random() * 1e9).toFixed();
              window.open(
                `https://discord.com/api/oauth2/authorize?${new URLSearchParams(
                  {
                    response_type: "token",
                    client_id: discordClientId,
                    state: oauthStateRef.current,
                    scope: "identify",
                    redirect_uri: new URL(
                      "/manifesto-discord-login",
                      window.location.href
                    ).toString(),
                  }
                ).toString()}`,
                "discord-login",
                [
                  `toolbar=no`,
                  `menubar=no`,
                  `width=600`,
                  `height=700`,
                  `top=${(window.innerHeight / 2 - 400).toFixed()}`,
                  `left=${(window.innerWidth / 2 - 300).toFixed()}`,
                ].join(",")
              );
            }}
          >
            Sign in with Discord
          </button>
          <p
            className={css`
              font: ${bodySmallSegment18};
              font-weight: 600;
              color: ${bodyDarkGreen60};
            `}
          >
            🌭 Get full access to all the hot parts of our discord!
          </p>
        </>
      )}
      {discordToken && isLoading && <Message>Promoting user...</Message>}
      {discordToken && error && <Message>Something went wrong.</Message>}
      {discordToken && data && (
        <Message>
          Discord user{" "}
          <span
            className={css`
              font-weight: 700;
            `}
          >
            {data.data.user.username}
          </span>
          <span
            className={css`
              color: ${bodyDarkGreen40};
            `}
          >
            #{data.data.user.discriminator}
          </span>{" "}
          has been promoted.
        </Message>
      )}
    </AfterSignStep>
  );
}
