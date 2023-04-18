import { DownloadCta } from "features/Download/Cta";
import { Footer } from "features/Footer";
import { Header } from "features/Header";
import { css } from "linaria";
import React from "react";
import SEO from "shared/seo";
import {
  bodyDarkGold120,
  cardBackgroundGold20,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import { h1Quincy72, h3Quincy36 } from "shared/styles/fonts";
import {
  sectionInlinePadding,
  sectionWideWidth,
  subtitleBlockMargin,
  sectionBodyNarrowWidth,
} from "shared/styles/lengths";

export function Download() {
  return (
    <>
      <SEO />
      <Header />

      <div
        className={css`
          max-width: ${sectionWideWidth};
          padding: 2rem ${sectionInlinePadding};
          margin: 0 auto;
        `}
      >
        <h1
          className={css`
            text-align: center;
            padding: 1rem 2rem;
            font: ${h1Quincy72};
            color: ${titleDarkHunterGreen};
          `}
        >
          Download Taho!
        </h1>
        <div
          className={css`
            display: none;
            background: top / cover url("bg.png");
            height: 26rem;
            margin-top: 3rem;

            @media (min-width: 52rem) {
              display: block;
            }
          `}
        />
      </div>

      <p
        className={css`
          margin: ${subtitleBlockMargin} auto;
          padding: 0 ${sectionInlinePadding};
          text-align: center;
          font: ${h3Quincy36};
          color: ${bodyDarkGold120};
        `}
      >
        A loyal friend for your favorite browser.
      </p>
      <DownloadCta />
      <Footer />
    </>
  );
}
