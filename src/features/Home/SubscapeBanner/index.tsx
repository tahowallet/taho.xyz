import { css } from "linaria";
import React from "react";
import BannerWrapper from "shared/components/BannerWrapper";
import ButtonAnchor from "shared/components/ButtonAnchor";
import { grey40 } from "shared/styles/color-palette";
import { bodyNormalSegment24 } from "shared/styles/fonts";

export default function SubscapeBanner() {
  return (
    <BannerWrapper style={{ paddingBottom: "4.5rem" }}>
      <div
        className={css`
          background: #081417;
          height: 422px;
          padding: 4rem;
          border-radius: 1rem;
          position: relative;
          overflow: hidden;
          @media (max-width: 64rem) {
            height: 335px;
          }
          @media (max-width: 48rem) {
            height: 322px;
            text-align: center;
            padding: 6rem 4rem;
          }
          @media (max-width: 32rem) {
            text-align: center;
            padding: 4rem 3rem;
          }
        `}
      >
        <div
          className={css`
            max-width: 460px;
            position: relative;
            z-index: 1;
            @media (max-width: 64rem) {
              max-width: 360px;
            }
            @media (max-width: 48rem) {
              max-width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}
        >
          <img
            src={"./images/subscape-logo.svg"}
            height={58}
            width={279}
            className={css`
              margin-bottom: 32px;
              @media (max-width: 32rem) {
                height: 40px;
              }
            `}
          />
          <p
            className={css`
              color: ${grey40};
              font: ${bodyNormalSegment24};
              margin-bottom: 24px;
            `}
          >
            Ready for a new adventure Nomad? Join your community in Subscape to
            complete quests and earn $XP. Explore, govern, and earn in Subscape.
          </p>
          <ButtonAnchor href="https://app.taho.xyz">
            <span>Try the Beta</span>
            <img src={"./images/new-tab.svg"} height={16} width={16} />
          </ButtonAnchor>
        </div>

        <img
          src={"./images/portal-cutout.webp"}
          className={css`
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            max-width: 800px;
            object-fit: cover;
            @media (max-width: 64rem) {
              max-width: 500px;
              opacity: 0.6;
            }
            @media (max-width: 48rem) {
              display: none;
            }
          `}
        />
        <img
          src={"./images/portal.webp"}
          className={css`
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.3;
            @media (min-width: 48rem) {
              display: none;
            }
          `}
        />
      </div>
    </BannerWrapper>
  );
}
