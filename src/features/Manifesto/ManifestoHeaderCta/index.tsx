import { css } from "linaria";
import React from "react";
import {
  bodyDarkGreen120,
  bodyDarkGreen40,
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
  cardBackgroundOffWhite,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodySmallSegment18,
  buttonLabelQuincy18,
  h4Quincy24,
  showcaseQuincyBold48,
} from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
} from "shared/styles/lengths";
import { buttonShadow, tileBoxShadow } from "shared/styles/shadows";
import { SignatureCount } from "./SignatureCount";

export function ManifestoHeaderCta() {
  return (
    <div
      className={css`
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 2rem;
        width: 100%;
        border-radius: 3rem;
        padding: 0 2rem 0 7rem;
        background: left -4rem top -4rem / 14rem auto no-repeat url("./bg.svg"),
          ${cardBackgroundOffWhite};
        box-shadow: ${tileBoxShadow};
      `}
    >
      <div
        className={css`
          flex: 1 1 auto;
          margin: 1rem 0;
        `}
      >
        <h2
          className={css`
            font: ${h4Quincy24};
            color: ${titleDarkHunterGreen};
          `}
        >
          Sign the Taho Community Pledge
        </h2>
        <p
          className={css`
            font: ${bodySmallSegment18};
            color: ${bodyDarkGreen40};
          `}
        >
          Sign to join our community &amp; be eligible for future surprises 👀
        </p>
      </div>
      <div
        className={css`
          flex: 1 1 auto;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem 2rem;
          margin: 1rem 0;
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-flow: column;
            align-items: center;
          `}
        >
          <span
            className={css`
              font: ${showcaseQuincyBold48};
              color: ${bodyDarkGreen120};
              margin-bottom: -0.5rem;
            `}
          >
            <SignatureCount />
          </span>
          <span
            className={css`
              font: ${bodySmallSegment18};
              color: ${bodyDarkGreen40};
            `}
          >
            Signatures
          </span>
        </div>
        <a
          href="#sign"
          className={css`
            flex: 0 0 auto;
            background: ${buttonBackgroundSemanticSuccess};
            padding: ${buttonBlockPadding} ${buttonInlinePadding};
            border-radius: ${buttonBorderRadius};
            font: ${buttonLabelQuincy18};
            color: ${buttonLabelHunterGreen};
            box-shadow: ${buttonShadow};
          `}
        >
          Sign Now
        </a>
      </div>
    </div>
  );
}
