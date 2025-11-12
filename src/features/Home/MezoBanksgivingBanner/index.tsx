import { css } from "linaria";
import React from "react";
import BannerWrapper from "shared/components/BannerWrapper";
import { riformaMediumFontFamily } from "shared/styles/font-families";
import { h3Quincy36, h4Quincy24, textLabelQuincy18 } from "shared/styles/fonts";
import { buttonBlockPadding, buttonInlinePadding } from "shared/styles/lengths";
import {
  titleBanksgivingHunterGreen,
  buttonBackgroundBanksgivingHunterGreen,
} from "shared/styles/colors";

export default function MezoBanksgivingBanner() {
  const captureBannerClick = () => {
    if (window.posthog !== undefined) {
      window.posthog.capture("clicked-banner-mezo_banksgiving_cta");
    }
  };

  return (
    <BannerWrapper style={{ paddingBottom: "4.5rem" }}>
      <div
        className={css`
          background: url("/images/picnic-blanket-bg.png") center/cover
            no-repeat #ffffff;
          height: 422px;
          border-radius: 1rem;
          position: relative;
          overflow: hidden;
        `}
      >
        <div
          className={css`
            padding: 45px 67px 60px;
            @media (max-width: 48rem) {
              padding: 4rem;
            }
          `}
        >
          <img
            src={"/images/mezo-banksgiving-banner.png"}
            className={css`
              position: absolute;
              top: 0;
              --ratio: 1;
              height: calc(422px * var(--ratio));
              width: calc(727px * var(--ratio));
              right: 0;
              @media (max-width: 1024px) {
                opacity: 0.6;
                filter: blur(0.5px);
                right: -20%;
              }
              @media (max-width: 800px) {
                opacity: 0.4;
                right: -40%;
              }
              @media (max-width: 600px) {
                opacity: 0.18;
              }
            `}
          />
          <div
            className={css`
              position: relative;
              z-index: 1;
            `}
          >
            <p
              className={css`
                font: ${textLabelQuincy18};
                font-size: 16px;
                line-height: 1.27;
                color: ${titleBanksgivingHunterGreen};
                letter-spacing: -0.04em;
                margin-bottom: 22px;
              `}
            >
              NOV 12 — DEC 12
            </p>
            <img
              src={"/images/mezo-banksgiving-logo.svg"}
              alt="Mezo Banksgiving"
              className={css`
                --ratio: 1;
                height: calc(93px * var(--ratio));
                width: calc(265px * var(--ratio));
                margin-bottom: 17px;
                @media (max-width: 32rem) {
                  --ratio: 0.75;
                }
              `}
            />

            <h3
              className={css`
                font: ${h3Quincy36};
                font-size: 30px;
                color: ${titleBanksgivingHunterGreen};
                letter-spacing: -0.04em;
                margin-bottom: 16px;
              `}
            >
              Stack mats with Mezo
            </h3>
            <p
              className={css`
                margin-bottom: 17px;
                font: ${h4Quincy24};
                font-size: 22px;
                line-height: 1.23;
                letter-spacing: -0.04em;
              `}
            >
              Banksgiving is here, and Taho users can access{" "}
              <br
                className={css`
                  @media (max-width: 540px) {
                    display: none;
                  }
                `}
              />
              Mezo's Galxe quests to start stacking mats now.
            </p>
            <a
              target="_blank"
              onClick={captureBannerClick}
              className={css`
                display: inline-block;
                padding: ${buttonBlockPadding} ${buttonInlinePadding};
                border-radius: 14px;
                font-family: ${riformaMediumFontFamily};
                font-size: 16px;
                font-weight: 500;
                letter-spacing: 0;
                background: ${buttonBackgroundBanksgivingHunterGreen};
                color: white;
                margin: 0;
              `}
              href="https://app.galxe.com/quest/fwdS8htfpmSLca4emLvAeD/GCRUqt87Yx"
            >
              Go to quests
            </a>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
}
