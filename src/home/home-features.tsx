import { textGreen40, textLight, trophyGold } from "layout/colors";
import {
  featureGridClassName,
  FeatureItem,
  mainFeatureClassName,
} from "layout/features-layout";
import { quincyRegularFontFamily, segmentFontFamily } from "layout/fonts";
import { mediumScreenQuery } from "layout/layout";
import { css } from "linaria";
import React from "react";

export function HomeFeatures() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 2rem;

        ${mediumScreenQuery} {
          padding: 6rem 2rem;
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
          <h4
            className={css`
              margin: 1rem;
              font-family: ${quincyRegularFontFamily};
              font-size: clamp(18px, 6vw, 36px);
              font-weight: normal;
              color: ${textLight};
            `}
          >
            Tally is the first Web3 wallet that’s owned by its users.
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
            designed to enrich the community--not corporate shareholders.
          </p>
        </div>
        <FeatureItem
          body={<>Community-owned</>}
          iconSrc={require("../ce/features/1-connect.svg" /* TOOO */)}
        />
        <FeatureItem
          body={<>Governed by users</>}
          iconSrc={require("../ce/features/1-connect.svg" /* TOOO */)}
        />
        <FeatureItem
          body={<>Open source GPLv3</>}
          iconSrc={require("../ce/features/1-connect.svg" /* TOOO */)}
        />
        <FeatureItem
          body={<>All profits go to community</>}
          iconSrc={require("../ce/features/1-connect.svg" /* TOOO */)}
        />
      </div>
    </div>
  );
}
