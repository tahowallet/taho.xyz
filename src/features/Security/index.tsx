import { DownloadCta } from "features/Download/Cta";
import { DownloadHeader } from "features/Download/Header";
import { Footer, footerSeparatorBackground } from "features/Footer";
import { Header } from "features/Header";
import { SecurityAudits } from "features/Security/Audits";
import { SecurityFeatures } from "features/Security/Features";
import { css } from "linaria";
import React from "react";
import SEO from "shared/seo";
import {
  sectionBackgroundGold5,
  sectionBackgroundOffWhite,
} from "shared/styles/colors";
import { sectionInlinePadding, sectionWideWidth } from "shared/styles/lengths";

export function Security() {
  return (
    <>
      <SEO />

      <Header />

      <div
        className={css`
          background: top / 100% auto no-repeat url("background.svg"),
            ${sectionBackgroundGold5};
        `}
      >
        <div
          className={css`
            max-width: ${sectionWideWidth};
            padding: 6rem ${sectionInlinePadding};
            margin: 0 auto;
          `}
        >
          <SecurityFeatures />
          <SecurityAudits />
        </div>

        <div
          className={css`
            background: ${footerSeparatorBackground},
              ${sectionBackgroundOffWhite};
            padding: 12rem 0 20rem;
          `}
        >
          <DownloadHeader />
          <DownloadCta />
        </div>

        <Footer />
      </div>
    </>
  );
}
