import { Link } from "gatsby";
import { css } from "linaria";
import React from "react";
import { semanticSuccess30 } from "shared/styles/color-palette";
import {
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
  sectionBackgroundGold20,
} from "shared/styles/colors";
import {
  buttonLabelQuincy18,
  h2Quincy48,
  labelLetterSpacing,
} from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
  sectionInlinePadding,
  sectionWideWidth,
} from "shared/styles/lengths";
import { buttonShadow } from "shared/styles/shadows";

export function HomeCommunityPledge() {
  return (
    <div
      className={css`
        width: 100%;
        max-width: ${sectionWideWidth};
        padding: 0 ${sectionInlinePadding};
        margin: 0 auto;
      `}
    >
      <div
        className={css`
          background: ${semanticSuccess30};
          border-radius: 1rem;

          @media (min-width: 48rem) {
            background: bottom right / auto 24rem no-repeat url("hero.png")
              ${semanticSuccess30};
          }
        `}
      >
        <div
          className={css`
            padding: 5rem;
          `}
        >
          <h2
            className={css`
              font: ${h2Quincy48};
              margin: 0;
            `}
          >
            Sign the
            <br />
            Community Pledge.
          </h2>
          <a
            className={css`
              display: inline-block;
              padding: ${buttonBlockPadding} ${buttonInlinePadding};
              border-radius: ${buttonBorderRadius};
              font: ${buttonLabelQuincy18};
              letter-spacing: ${labelLetterSpacing};
              box-shadow: ${buttonShadow};
              background: ${buttonBackgroundSemanticSuccess};
              color: ${buttonLabelHunterGreen};
              margin: 1rem 0;
            `}
            href="/web3pledge"
            target="_blank"
          >
            Sign now
          </a>
        </div>
      </div>
    </div>
  );
}
