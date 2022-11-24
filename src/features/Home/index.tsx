import { DownloadCta } from "features/Download/Cta";
import { DownloadHeader } from "features/Download/Header";
import { Footer, footerSeparatorBackground } from "features/Footer";
import { Header } from "features/Header";
import { HomeCommunityPledge } from "features/Home/CommunityPledge";
import { HomeFeatures } from "features/Home/Features";
import { HomeProductHero } from "features/Home/Hero";
import { HomeTryIt } from "features/Home/TryIt";
import { Subscribe } from "features/Subscribe";
import { Link } from "gatsby";
import { css } from "linaria";
import React from "react";
import SEO from "shared/seo";
import {
  sectionBackgroundGold20,
  sectionBackgroundGold5,
  sectionBackgroundOffWhite,
} from "shared/styles/colors";
import { HomeBanner } from "./HomeBanner";

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
      <HomeBanner>
        <div
          className={css`
            & > span {
              margin-right: 8px;
            }

            & > a {
              text-decoration: underline;
            }
          `}
        >
          <span>We've updated our Privacy Policy.</span>
          <Link to="/privacy">Read it here.</Link>
        </div>
      </HomeBanner>

      <div
        className={css`
          display: flex;
          flex-flow: column;
        `}
      >
        <div
          className={css`
            padding: 6rem 0;
            background: ${sectionBackgroundGold5};
          `}
        >
          <HomeProductHero />
          <div id="download">
            <HomeTryIt />
            <DownloadCta />
          </div>
        </div>

        <HomeCommunityPledge />

        <div
          className={css`
            aspect-ratio: 1440 / 74;
            margin-top: -4rem;
            background: bottom / 100% auto no-repeat url("separator-wave.svg");
          `}
        />
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
