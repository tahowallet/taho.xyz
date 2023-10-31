import { css } from "linaria";
import React from "react";
import BannerWrapper from "shared/components/BannerWrapper";
import ButtonAnchor from "shared/components/ButtonAnchor";
import { grey40 } from "shared/styles/color-palette";
import {
  fontSubTitleCssFragment,
  quincyRegularFontFamily,
  quincyTextFontFamily,
} from "shared/styles/font-families";
import { bodyNormalSegment24 } from "shared/styles/fonts";

export default function SubscapeBanner() {
  return (
    <BannerWrapper style={{ paddingBottom: "4.5rem" }}>
      <div
        className={css`
          background: #081417;
          padding: 60px;
          border-radius: 1rem;
          position: relative;
          overflow: hidden;
        `}
      >
        <div
          className={css`
            width: 460px;
            position: relative;
            z-index: 1;
          `}
        >
          <img
            src={require("./subscape-logo.svg")}
            height={58}
            width={279}
            className={css`
              margin-bottom: 2rem;
            `}
          />
          <p
            className={css`
              color: ${grey40};
              font: ${bodyNormalSegment24};
              margin-bottom: 1.5rem;
            `}
          >
            Ready for a new adventure Nomad? Join your community in Subscape to
            complete quests and earn $XP. Explore, govern, and earn in Subscape.
          </p>
          <ButtonAnchor>
            <span>Try the Beta</span>
            <img src={require("./new-tab.svg")} height={16} width={16} />
          </ButtonAnchor>
        </div>

        <img
          src={require("./portal-cutout.webp")}
          className={css`
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
          `}
        />
      </div>
    </BannerWrapper>
  );
}
