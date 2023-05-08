import { css } from "linaria";
import React from "react";
import {
  bodyDarkGrey80,
  buttonBackgroundSemanticSuccess,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodyNormalSegment24,
  buttonLabelQuincy18,
  h1Quincy72,
  labelLetterSpacing,
} from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
  sectionInlinePadding,
  sectionWideWidth,
  subtitleBlockMargin,
} from "shared/styles/lengths";
import { buttonShadow } from "shared/styles/shadows";

export function DaoHero() {
  return (
    <div
      className={css`
        padding: 12rem 0;
        background: bottom -1px center / 100% auto no-repeat url("separator-wave.svg");
      `}
    >
      <div
        className={css`
          max-width: ${sectionWideWidth};
          padding: 0 ${sectionInlinePadding};
          margin: 0 auto;
        `}
      >
        <div
          className={css`
            width: 100%;
            max-width: 40rem;
            padding-inline: 2rem;
          `}
        >
          <h1
            className={css`
              font: ${h1Quincy72};
              color: ${titleDarkHunterGreen};
            `}
          >
            The Taho
            <br />
            DAO is forming.
          </h1>
          <p
            className={css`
              font: ${bodyNormalSegment24};
              color: ${bodyDarkGrey80};
              margin: ${subtitleBlockMargin} auto;
            `}
          >
            Join our Discord today, and check out our community resources.
          </p>
          <a
            className={css`
              padding: ${buttonBlockPadding} ${buttonInlinePadding};
              border-radius: ${buttonBorderRadius};
              font: ${buttonLabelQuincy18};
              letter-spacing: ${labelLetterSpacing};
              box-shadow: ${buttonShadow};
              display: inline-block;
              background-color: ${buttonBackgroundSemanticSuccess};
              margin: 4rem 0;
            `}
            href="https://chat.taho.xyz"
            target="_blank"
          >
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
}
