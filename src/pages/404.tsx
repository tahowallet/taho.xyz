import { css } from "linaria";
import React from "react";
import { Header } from "features/Header";
import { DownloadCta } from "features/Download/Cta";
import { DownloadHeader } from "features/Download/Header";
import { Footer, footerSeparatorBackground } from "features/Footer";
import SEO from "shared/seo";

import { bodyLightGold5 } from "shared/styles/colors";
import {
  sectionBackgroundGold5,
  sectionBackgroundOffWhite,
} from "shared/styles/colors";
import { sectionInlinePadding, sectionWideWidth } from "shared/styles/lengths";
import {
  bodyDarkGold120,
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodyNormalSegment24,
  buttonLabelQuincy18,
  h1Quincy72,
  h2Quincy48,
} from "shared/styles/fonts";
import { tileLightGradient } from "shared/styles/gradients";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
  subtitleBlockMargin,
  tileBorderRadius,
} from "shared/styles/lengths";
import { buttonShadow, tileBoxShadow } from "shared/styles/shadows";

export function NotFoundPage() {
  return (
  <>
    <SEO />

    <Header />
  <div
    className={css`
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: #000;
      background: ${sectionBackgroundGold5};
    `}
  >

    <div
      className={css`
        background: ${footerSeparatorBackground},
          ${sectionBackgroundOffWhite};
          padding: 12rem 0 18rem;
          border-radius: 20px;
          margin-top: 30px;
          text-align:center;
          width: 100%;
      `}
    >
    <h1
      className={css`
        color: ${titleDarkHunterGreen};
        font: ${h1Quincy72};
      `}
    >
    404: Not Found
    </h1>
    <p
      className={css`
        max-width: 32rem;
        margin: ${subtitleBlockMargin} auto;
        font: ${bodyNormalSegment24};
        color: ${bodyDarkGold120};
      `}
    >
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
    </div>

    <Footer />
  </div>
  </>
  );
}

export default NotFoundPage;
