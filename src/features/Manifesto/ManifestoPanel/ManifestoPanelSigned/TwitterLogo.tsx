import { css } from "linaria";
import React from "react";
import { bodyNormalSegment24 } from "shared/styles/fonts";

export function TwitterLogo() {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font: ${bodyNormalSegment24};
        color: #3a90e9;
      `}
    >
      <img width="24" height="24" src={require("./icon-twitter.svg")} alt="" />
      Twitter
    </div>
  );
}
