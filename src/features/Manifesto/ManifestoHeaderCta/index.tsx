import { css } from "linaria";
import React from "react";
import {
  bodyDarkHunterGreen,
  cardBackgroundOffWhite,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import { bodySmallSegment18, h2Quincy48 } from "shared/styles/fonts";
import { sectionInlinePadding, sectionWideWidth } from "shared/styles/lengths";
import { tileBoxShadow } from "shared/styles/shadows";
import { SigntureCount } from "./SigntureCount";

export function ManifestoHeaderCta() {
  return (
    <div
      className={css`
        width: 100%;
        max-width: ${sectionWideWidth};
        margin: 4rem auto;
        padding: 0 ${sectionInlinePadding};
      `}
    >
      <div
        className={css`
          display: flex;
          flex-flow: row wrap;
          padding: 2rem 4rem;
          border-radius: 1.5rem;
          background: ${cardBackgroundOffWhite};
          box-shadow: ${tileBoxShadow};
        `}
      >
        <div
          className={css`
            flex: 1;
          `}
        >
          <h2
            className={css`
              font: ${h2Quincy48};
              color: ${titleDarkHunterGreen};
              margin: 2rem 0;
            `}
          >
            Sign if you agree with our community values
          </h2>
          <p
            className={css`
              font: ${bodySmallSegment18};
              color: ${bodyDarkHunterGreen};
              margin: 2rem 0;
            `}
          >
            Receive a special discord role + a surprise later
          </p>
        </div>
        <SigntureCount />
      </div>
    </div>
  );
}
