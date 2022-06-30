import { css } from "linaria";
import React, { ReactNode } from "react";
import {
  bodyLightOffWhite,
  cardBackgroundGold5,
  sectionBackgroundTrophyGold,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodyNormalSegment24,
  h1Quincy72,
  h3Quincy36,
} from "shared/styles/fonts";
import {
  sectionInlinePadding,
  sectionWideWidth,
  subtitleBlockMargin,
} from "shared/styles/lengths";

export function DaoValues() {
  return (
    <div
      className={css`
        background: center / auto 100% no-repeat url("background.svg"),
          ${sectionBackgroundTrophyGold};
        padding: 12rem 0;
      `}
    >
      <div
        className={css`
          max-width: ${sectionWideWidth};
          padding: 0 ${sectionInlinePadding};
          margin: 0 auto;
          text-align: center;
        `}
      >
        <h1
          className={css`
            font: ${h1Quincy72};
            color: ${titleDarkHunterGreen};
          `}
        >
          Community Values
        </h1>
        <p
          className={css`
            margin: ${subtitleBlockMargin} auto;
            font: ${bodyNormalSegment24};
            color: ${bodyLightOffWhite};
          `}
        >
          We believe that web3 should be:
        </p>
        <div
          className={css`
            display: flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
            gap: 2rem 4rem;
            margin: 2rem 0;
          `}
        >
          <CommunityValue>Accessible to everyone</CommunityValue>
          <CommunityValue>100% open source</CommunityValue>
          <CommunityValue>Fully owned by the community</CommunityValue>
        </div>
      </div>
    </div>
  );
}

function CommunityValue({ children }: { children: ReactNode }) {
  return (
    <div
      className={css`
        display: flex;
        height: 20rem;
        width: 20rem;
        align-items: center;
        justify-content: center;
        background: ${cardBackgroundGold5};
        border-radius: 50%;
        font: ${h3Quincy36};
        color: ${titleDarkHunterGreen};
      `}
    >
      {children}
    </div>
  );
}
