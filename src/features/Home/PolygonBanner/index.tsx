import { css } from "@linaria/core";
import React from "react";
import { bodyDarkGreen120, cardBackgroundGold60 } from "shared/styles/colors";
import { bodySmallSegment18 } from "shared/styles/fonts";
import { sectionInlinePadding } from "shared/styles/lengths";

export function HomeBanner() {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        text-align: center;
        background: ${cardBackgroundGold60};
        color: ${bodyDarkGreen120};
        font: ${bodySmallSegment18};
        padding: 1rem ${sectionInlinePadding};
      `}
    >
      <div
        className={css`
          background: left / 2rem auto no-repeat url("./icon-news-banner.svg");
          padding-left: 4rem;
        `}
      >
        {"Tally Ho is now Taho. "}
        <a href="https://blog.taho.xyz/rename-announcement/"> <u>Learn more</u>.</a>
      </div>
    </div>
  );
}
