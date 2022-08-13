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
        min-height: 6rem;
        border-radius: 100rem;
        padding-left: 10rem;
        padding-right: 2rem;
        background: left -4rem center / auto no-repeat url("./bg.svg"),
          ${cardBackgroundOffWhite};
        box-shadow: ${tileBoxShadow};
      `}
    >
      <div>
        <h2
          className={css`
            font: ${h4Quincy24};
            color: ${titleDarkHunterGreen};
          `}
        >
          Sign our Community Pledge
        </h2>
        <p
          className={css`
            font: ${bodySmallSegment18};
            color: ${bodyDarkGreen40};
          `}
        >
          Receive access to Discord channels and future surprises
        </p>
      </div>
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
          signatures
        </span>
      </div>
      <a
        href="#sign"
        className={css`
          background: ${buttonBackgroundSemanticSuccess};
          padding: ${buttonBlockPadding} ${buttonInlinePadding};
          border-radius: ${buttonBorderRadius};
          font: ${buttonLabelQuincy18};
          color: ${buttonLabelHunterGreen};
          box-shadow: ${buttonShadow};
        `}
      >
        Sign now
      </a>
    </div>
  );
}
