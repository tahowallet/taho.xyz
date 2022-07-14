import { openTwitterTweetIntent } from "features/Manifesto/ManifestoPanel/ManifestoSignedPanel/twitter";
import { Message } from "features/Manifesto/ManifestoPanel/Message";
import { SiweToken } from "features/Manifesto/types";
import { css } from "linaria";
import React, { ReactNode } from "react";
import { bodyDarkGreen80, bodyLightOffWhite } from "shared/styles/colors";
import { bodyNormalSegment24, buttonLabelQuincy18 } from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
} from "shared/styles/lengths";
import { ClaimDiscordRole } from "./ClaimDiscordRole";

export function ManifestoSignedPanel({ token }: { token: SiweToken }) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        gap: 4rem;
        margin: 4rem 0;
      `}
    >
      <Step
        title={<>Discord</>}
        subTitle={
          <>Enter your Discord id to receive a special role in our comunity</>
        }
      >
        <ClaimDiscordRole token={token} />
      </Step>
      <Step title={<>Twitter</>} subTitle={<>Share your values on Twitter</>}>
        <button
          className={css`
            background: #3a90e9;
            padding: ${buttonBlockPadding} ${buttonInlinePadding};
            border: none;
            border-radius: ${buttonBorderRadius};
            font: ${buttonLabelQuincy18};
            color: ${bodyLightOffWhite};
            cursor: pointer;
          `}
          onClick={() => {
            openTwitterTweetIntent({
              text: `I signed Tally Ho petition.`,
              url: location.href,
            });
          }}
        >
          Share
        </button>
      </Step>
    </div>
  );
}

function Step({
  title,
  subTitle,
  children,
}: {
  title: ReactNode;
  subTitle: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 4rem;
      `}
    >
      <div
        className={css`
          flex: 1;
        `}
      >
        <h4
          className={css`
            font: ${bodyNormalSegment24};
            color: ${bodyDarkGreen80};
          `}
        >
          {title}
        </h4>
        <Message>{subTitle}</Message>
      </div>
      <div>{children}</div>
    </div>
  );
}
