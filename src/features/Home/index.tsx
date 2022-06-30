import { DownloadCta } from "features/Download/Cta";
import { DownloadHeader } from "features/Download/Header";
import { Footer, footerSeparatorBackground } from "features/Footer";
import { Header } from "features/Header";
import { HomeFeatures } from "features/Home/Features";
import { HomeProductHero } from "features/Home/Hero";
import { HomePolygonBanner } from "features/Home/PolygonBanner";
import { HomeTryIt } from "features/Home/TryIt";
import { Subscribe } from "features/Subscribe";
import { css } from "linaria";
import React from "react";
import SEO from "shared/seo";
import {
  sectionBackgroundGold20,
  sectionBackgroundGold5,
  sectionBackgroundOffWhite,
} from "shared/styles/colors";

export function Home() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
      `}
    >
      <SEO />

      <Header />
      <HomePolygonBanner />

      <div
        className={css`
          background: bottom / 100% auto no-repeat url("separator-wave.svg"),
            ${sectionBackgroundGold5};
          padding: 6rem 0;
        `}
      >
        <HomeProductHero />
        <div id="download">
          <HomeTryIt />
          <DownloadCta />
        </div>
      </div>

      <div
        className={css`
          background: ${sectionBackgroundGold20};
          padding: 6rem 0;
        `}
      >
        <HomeFeatures />
      </div>

      <div
        className={css`
          background: ${sectionBackgroundOffWhite};
          padding: 6rem 0;
        `}
      >
        <Subscribe />
      </div>

      <div
        className={css`
          background: ${footerSeparatorBackground}, ${sectionBackgroundOffWhite};
          padding: 4rem 0 20rem;
        `}
      >
        <DownloadHeader />
        <DownloadCta />
      </div>
      <Footer />
    </div>
  );
}
