import { CommunityEditionDonwloadCTA } from "ce/ce-download-cta";
import { Link } from "gatsby";
import {
  green120,
  semanticError,
  textGreen40,
  textLight,
  trophyGold,
  trophyGold40,
} from "layout/colors";
import {
  featureGridClassName,
  featureItemClassName,
  mainFeatureClassName,
} from "layout/features-layout";
import {
  quincyRegularFontFamily,
  quincyTextFontFamily,
  segmentFontFamily,
} from "layout/fonts";
import { largeScreenQuery } from "layout/layout";
import { css, cx } from "linaria";
import React, { ReactNode } from "react";

export function CommunityEditionFeatures({
  downloadButtons,
}: {
  downloadButtons: ReactNode;
}) {
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
            The Tally Ho Community&nbsp;Edition
          </h4>
          <p
            className={css`
              margin: 1rem;
              font-family: ${segmentFontFamily};
              font-size: 18px;
              color: ${textGreen40};
            `}
          >
            Welcome to your sneak preview of the Tally Ho wallet. It’s easy to
            import from MetaMask and includes everything you need for DeFi. It’s
            our community’s first draft at making the best possible Web3 wallet.
          </p>
        </div>
        <FeatureItem
          body={<>Connect to your favorite dapps</>}
          iconSrc={require("../ce/features/1-connect.svg")}
        />
        {/* <FeatureItem
          body={<>Swap assets inside your wallet</>}
          iconSrc={require("../ce/features/2-swap.svg")}
        /> */}
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
          display: flex;
          align-items: center;
          margin: 2rem auto;
          padding: 0.5rem 1.5rem;
          border: 1px solid ${semanticError};
          border-radius: 1rem;
          font-family: ${segmentFontFamily};
          font-size: 18px;
          color: ${semanticError};
          background: ${green120};

          ${largeScreenQuery} {
            margin: -2.5rem auto 6rem;
          }
        `}
      >
        <img
          className={css`
            margin: 0 0.25rem;
          `}
          width="24"
          height="24"
          src={require("../ce/icon-warning.svg")}
        />
        Tally Ho Community Edition is a work-in-progress! Test responsibly.
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
        Check out{" "}
        <Link to="https://docs.tally.cash/" target="_blank">
          Tally Ho Docs
        </Link>{" "}
        for more info.
      </div>
      <CommunityEditionDonwloadCTA downloadButtons={downloadButtons} />
    </div>
  );
}

function FeatureItem({ iconSrc, body }: { iconSrc: string; body: ReactNode }) {
  return (
    <div
      className={cx(
        featureItemClassName,
        css`
          padding: 0.5rem;
        `
      )}
    >
      <img
        className={css`
          float: left;
          width: 5rem;
          height: 5rem;
          margin: -1rem 1rem -0.25rem 0;
        `}
        src={iconSrc}
      />
      <p
        className={css`
          flex: 1;
          margin: 1rem;
          font-family: ${quincyTextFontFamily};
          font-size: 24px;
          color: ${trophyGold40};
          text-align: right;
        `}
      >
        {body}
      </p>
    </div>
  );
}
