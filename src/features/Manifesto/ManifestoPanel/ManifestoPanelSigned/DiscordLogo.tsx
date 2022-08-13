import { css } from "linaria";
import React from "react";
import { bodyNormalSegment24 } from "shared/styles/fonts";

export function DiscordLogo() {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font: ${bodyNormalSegment24};
        color: #4d60ea;
      `}
    >
      <img width="24" height="24" src={require("./icon-discord.svg")} alt="" />
      Discord
    </div>
  );
}
