import { CommunityEditionDonwloadCTA } from "ce/ce-download-cta";
import { Header } from "common/header";
import { textLight, trophyGold } from "layout/colors";
import { quincyRegularFontFamily, segmentFontFamily } from "layout/fonts";
import { mediumScreenQuery } from "layout/layout";
import { css } from "linaria";
import React, { ReactNode } from "react";

export function CommunityEditionShowcase({
  downloadButtons,
}: {
  downloadButtons: ReactNode;
}) {
  return (
    <div
      className={css`
        background: no-repeat center / cover
          url(${require("../ce/ce-background.svg")});
      `}
    >
      <div
        className={css`
          display: flex;
          flex-flow: column;
          margin: 0 auto;
          width: 100%;
        `}
      >
        <Header />
        <h1
          className={css`
            margin: 0;
            padding: 0 2rem;
            font-family: ${quincyRegularFontFamily};
            font-weight: normal;
            font-size: 64px;
            font-size: clamp(32px, 10vw, 64px);
            line-height: 100%;
            color: ${textLight};
            text-align: center;
          `}
        >
          Tally Ho!
          <br />
          Community Edition
        </h1>
        <h3
          className={css`
            margin: 2rem 0;
            padding: 0 2rem;
            font-family: ${segmentFontFamily};
            font-weight: normal;
            font-size: 24px;
            font-size: clamp(12px, 4vw, 24px);
            line-height: 133%;
            text-align: center;
            color: ${trophyGold};
          `}
        >
          Be one of the first to try the community
          <br />
          owned alternative to MetaMask.
        </h3>

        <CommunityEditionDonwloadCTA downloadButtons={downloadButtons} />
        <img
          className={css`
            display: none;
            margin: 1rem auto -8rem;
            box-shadow: rgb(0 0 0 / 0.5) 0 4rem 2rem 1rem;

            ${mediumScreenQuery} {
              display: unset;
            }
          `}
          width="384"
          height="600"
          src={require("../common/product-hero.svg")}
        />
      </div>
    </div>
  );
}
