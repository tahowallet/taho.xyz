import { css } from "linaria";
import React, { MouseEventHandler } from "react";
import BannerWrapper from "shared/components/BannerWrapper";
import ButtonAnchor from "shared/components/ButtonAnchor";
import { grey40 } from "shared/styles/color-palette";
import { bodyNormalSegment24 } from "shared/styles/fonts";

export default function MezoTestnetBanner() {
  const captureBannerClick = () => {
    if (window.posthog !== undefined) {
      window.posthog.capture("Join Mezo CTA");
    }
  }
  return (
    <BannerWrapper style={{ paddingBottom: "4.5rem" }}>
      <div
        className={css`
          background: url(${require('./mezo-bg.png')}) center/cover no-repeat #ff0046;
          height: 422px;
          border-radius: 1rem;
          position: relative;
          overflow: hidden;
          @media (max-width: 64rem) {
            height: 335px;
          }
          @media (max-width: 48rem) {
            height: 322px;
          }
        `}
      >
      <div className={css`
        padding: 4rem;
        @media (max-width: 48rem) {
            text-align: center;
            padding: 6rem 4rem;
          }
          @media (max-width: 32rem) {
            text-align: center;
            padding: 4rem 3rem;
            backdrop-filter: blur(0.5px);
          }
        `}>
      <img
            src={require("./mezo-chest.png")}
            className={css`
                position: absolute;
                top: 37px;
                --ratio: 1;
                height: calc(444px * var(--ratio));
                width: calc(438px * var(--ratio));
                right: 0;
                margin-right: 48px;
                @media (max-width: 32rem) {
                  --ratio: 0.5;
                  opacity: 0.6;
                  filter: blur(0.5px);
                  left: 50%;
                  right: 0;
                  transform: translateX(-50%);
                  margin: 0 auto;
              }
            `}
          />
        <div
          className={css`
            position: relative;
            z-index: 1;
            @media (max-width: 48rem) {
              max-width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            @media (max-width: 64rem) {
              max-width: 600px;
            }
          `}
        >
        <h2 className={css`
            font-family: GT Alpina;
            font-weight: 250;
            color: white;
            font-size: 6.25rem;
            line-height: 1.1;
            letter-spacing: -5%;
            margin-bottom: 22px;
            @media (max-width: 32rem) {
                font-size: 4rem;
                line-height: 1.5;
                margin-bottom: 0;
            }
            `}>Get Free Sats</h2>
        
          <p
            className={css`
              color: white;
              font: ${bodyNormalSegment24};
              margin-bottom: 22px;
              span {
                font-family: Segment-Regular;
                font-weight: 400;
                font-size: 1.125rem;
                line-height: 31px;
                letter-spacing: 0;
                @media (max-width: 32rem){
                  font-size: 1.5rem;
                }
              }
            `}
          >
          Taho users get 20,000 free sats on the Mezo testnet.<br/>
          Use them to collect swag or an exclusive NFT.<br/>
          <span>(available to existing Taho users only with code XTAHO 🤫)</span>
          </p>
          <ButtonAnchor onClick={captureBannerClick} squared href="https://mezo.org/matsnet">
            <span>Login to claim</span>
            <img src={require("../../../shared/icons/new-tab.svg")} height={30} width={30} />
          </ButtonAnchor>
        </div>
      </div>
      </div>
    </BannerWrapper>
  );
}
