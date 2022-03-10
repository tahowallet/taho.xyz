import {
  green120,
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
import { mediumScreenQuery } from "layout/layout";
import { css, cx } from "linaria";
import React, { ReactNode } from "react";

export function HomeFeatures() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 2rem;
        background: ${green120};

        ${mediumScreenQuery} {
          padding: 12rem 2rem 6rem;
        }
      `}
    >
      <h2
        className={css`
          position: relative;
          margin: 2rem;
          font-family: ${quincyRegularFontFamily};
          font-size: clamp(24px, 6vw, 48px);
          font-weight: normal;
          color: ${trophyGold};

          &::before,
          &::after {
            position: absolute;
            content: "";
            width: 3rem;
            height: 3rem;
            margin: -2rem -3rem;
          }

          &::before {
            top: 0;
            left: 0;
            background: no-repeat center / contain
              url(${require("../home/stars-quote-open.svg")});
          }

          &::after {
            bottom: 0;
            right: 0;
            background: no-repeat center / contain
              url(${require("../home/stars-quote-close.svg")});
          }
        `}
      >
        How will you connect to the Metaverse?
      </h2>
      <div className={featureGridClassName}>
        <div className={mainFeatureClassName}>
          <img
            className={css`
              align-self: flex-start;
              height: 6rem;
              margin: 1rem;
            `}
            src={require("../home/features-main-chip.svg")}
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
            Tally Ho is the first Web3 wallet that’s owned by its users.
          </h4>
          <p
            className={css`
              margin: 1rem;
              font-family: ${segmentFontFamily};
              font-size: 18px;
              color: ${textGreen40};
            `}
          >
            It includes all the features you need for DeFi and Web3. And it’s
            designed to enrich the community, not corporate shareholders.
          </p>
        </div>
        <FeatureItem
          body={<>Community-owned</>}
          iconSrc={require("../home/features/1-community-owned.svg")}
        />
        <FeatureItem
          body={<>Governed by users</>}
          iconSrc={require("../home/features/2-user-governed.svg")}
        />
        <FeatureItem
          body={<>Open source GPLv3</>}
          iconSrc={require("../home/features/3-open-source.svg")}
        />
        <FeatureItem
          body={<>All profits go to the community</>}
          iconSrc={require("../home/features/4-community-profits.svg")}
        />
      </div>
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
          height: 2.5rem;
          margin: 0.5rem 1rem;
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
