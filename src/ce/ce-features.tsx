import { CommunityEditionDonwloadCTA } from "ce/ce-download-cta";
import { Link } from "gatsby";
import { green120, textGreen40, textLight, trophyGold } from "layout/colors";
import {
  featureGridClassName,
  FeatureItem,
  mainFeatureClassName,
} from "layout/features-layout";
import { quincyRegularFontFamily, segmentFontFamily } from "layout/fonts";
import { css, cx } from "linaria";
import React from "react";

export function CommunityEditionFeatures() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        background-color: ${green120};
        margin: 8rem 0 0;
        padding: 6rem 2rem;
      `}
    >
      <div
        className={cx(
          featureGridClassName,
          css`
            background: no-repeat center / contain
              url(${require("../ce/ce-features-background.svg")});
          `
        )}
      >
        <div className={mainFeatureClassName}>
          <img
            className={css`
              margin-top: -6rem;
              margin-left: -1rem;
              margin-right: auto;
              margin-bottom: -1rem;
              height: 15rem;
            `}
            src={require("../ce/ce-app-chip.svg")}
          />
          <h4
            className={css`
              margin: 1rem;
              font-family: ${quincyRegularFontFamily};
              font-size: clamp(18px, 6vw, 36px);
              font-weight: normal;
              color: ${textLight};
            `}
          >
            The Tally Community&nbsp;Edition
          </h4>
          <p
            className={css`
              margin: 1rem;
              font-family: ${segmentFontFamily};
              font-size: 18px;
              color: ${textGreen40};
            `}
          >
            Is your sneak preview of the Tally wallet. It’s easy to import from
            MetaMask and includes everything you need for DeFi. It’s our
            community’s first draft at making the best possible Web3 wallet.
          </p>
        </div>
        <FeatureItem
          body={<>Connect to your favorite dapps</>}
          iconSrc={require("../ce/features/1-connect.svg")}
        />
        <FeatureItem
          body={<>Swap assets inside your wallet</>}
          iconSrc={require("../ce/features/2-swap.svg")}
        />
        <FeatureItem
          body={<>Track your portfolio</>}
          iconSrc={require("../ce/features/3-portfolio.svg")}
        />
        <FeatureItem
          body={<>Add read-only accounts</>}
          iconSrc={require("../ce/features/4-read-only.svg")}
        />
      </div>
      <div
        className={css`
          font-family: ${segmentFontFamily};
          font-size: 18px;
          text-align: center;
          color: ${textGreen40};
          margin: 1rem 0;

          & a {
            color: ${trophyGold};
            text-decoration: none;
          }
        `}
      >
        Check out <Link to="#TODO">Tally Docs</Link> for more info.
      </div>
      <CommunityEditionDonwloadCTA />
    </div>
  );
}
