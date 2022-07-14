import { Message } from "features/Manifesto/ManifestoPanel/Message";
import { SiweToken } from "features/Manifesto/types";
import { css } from "linaria";
import React from "react";
import { useMutation } from "react-query";
import {
  borderDarkGreen20,
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

export function ClaimDiscordRole({ token }: { token: SiweToken }) {
  const { mutate, isLoading, error, data } = useMutation(
    async ({ discordTag }: { discordTag: string }) => {
      await claimDiscordRole({ token, discordTag });
    }
  );

  if (isLoading) return <Message>Promoting user...</Message>;
  if (data) return <Message>Discord user has been promoted.</Message>;

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const userElement = event.currentTarget.elements.namedItem(
            "user"
          ) as HTMLInputElement;
          const discordTag = userElement.value;

          mutate({ discordTag });
        }}
      >
        <div
          className={css`
            display: flex;
            flex-flow: row;
            border: 1px solid ${borderDarkGreen20};
            border-radius: 3rem;
            margin: - -1rem;
            padding: 1rem;
          `}
        >
          <input
            className={css`
              flex: 1;
              border: none;
              outline: none;
              font-size: 1.25rem;
            `}
            placeholder="Discord user"
            name="user"
            size={16}
          />
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
          >
            Submit
          </button>
        </div>
      </form>
      {error && <Message>Something went wrong. Check your username.</Message>}
    </>
  );
}
