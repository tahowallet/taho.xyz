import { discordClientId } from "features/Manifesto/ManifestoPanel/ManifestoSignedPanel/discord-config";
import { Message } from "features/Manifesto/ManifestoPanel/Message";
import { SiweToken } from "features/Manifesto/types";
import { css } from "linaria";
import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import {
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
} from "shared/styles/colors";
import { buttonLabelQuincy18 } from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
} from "shared/styles/lengths";
import { claimDiscordRole } from "../../api";
import { discordLoginChannel } from "./discord-login";

export function ClaimDiscordRole({ token }: { token: SiweToken }) {
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
    claimDiscordRole({ token, discordToken })
  );

  return (
    <>
      {!data && !isLoading && (
        <button
          className={css`
            background: ${buttonBackgroundSemanticSuccess};
            padding: ${buttonBlockPadding} ${buttonInlinePadding};
            border: none;
            border-radius: ${buttonBorderRadius};
            font: ${buttonLabelQuincy18};
            color: ${buttonLabelHunterGreen};
            cursor: pointer;
          `}
          onClick={() => {
            oauthStateRef.current = (Math.random() * 1e9).toFixed();
            window.open(
              `https://discord.com/api/oauth2/authorize?${new URLSearchParams({
                response_type: "token",
                client_id: discordClientId,
                state: oauthStateRef.current,
                scope: "identify",
                redirect_uri: new URL(
                  "/manifesto-discord-login",
                  window.location.href
                ).toString(),
              }).toString()}`,
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
      )}
      {discordToken && isLoading && <Message>Promoting user...</Message>}
      {discordToken && error && <Message>Something went wrong.</Message>}
      {discordToken && data && (
        <Message>Discord user has been promoted.</Message>
      )}
    </>
  );
}
