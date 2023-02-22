import { css } from "linaria";
import React from "react";
import { bodyDarkGrey60, titleDarkHunterGreen } from "shared/styles/colors";
import { bodyNormalSegment24, h1Quincy72 } from "shared/styles/fonts";
import {
  sectionInlinePadding,
  sectionWideWidth,
  subtitleBlockMargin,
} from "shared/styles/lengths";

export function HomeTryIt() {
  return (
    <div
      className={css`
        max-width: ${sectionWideWidth};
        padding: 0 ${sectionInlinePadding};
        margin: 0 auto;
        text-align: center;
      `}
    >
      <h1
        className={css`
          color: ${titleDarkHunterGreen};
          font: ${h1Quincy72};
        `}
      >
        Try Taho now
      </h1>
      <p
        className={css`
          margin: ${subtitleBlockMargin} auto;
          font: ${bodyNormalSegment24};
          color: ${bodyDarkGrey60};
        `}
      >
        A loyal friend for your favorite browser.
      </p>
    </div>
  );
}
