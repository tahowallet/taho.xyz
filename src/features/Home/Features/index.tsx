import { css } from "linaria";
import React, { ReactNode } from "react";
import {
  bodyDarkGold120,
  bodyDarkGrey60,
  bodyDarkGrey80,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodyLargeSegment32,
  bodyNormalSegment24,
  h1Quincy72,
  h2Quincy48,
  h3Quincy36,
  pillLabelSegment14,
} from "shared/styles/fonts";
import { tileLightGradient } from "shared/styles/gradients";
import {
  pillBlockPadding,
  pillBorderRadius,
  pillInlinePadding,
  sectionInlinePadding,
  sectionWideWidth,
  subtitleBlockMargin,
  tileBorderRadius,
} from "shared/styles/lengths";
import { tileBoxShadow } from "shared/styles/shadows";

export function HomeFeatures() {
  return (
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
          color: ${titleDarkHunterGreen};
          font: ${h1Quincy72};
        `}
      >
        Finally, an alternative to MetaMask
      </h1>
      <p
        className={css`
          margin: ${subtitleBlockMargin} auto;
          font: ${bodyNormalSegment24};
          color: ${bodyDarkGrey80};
        `}
      >
        Taho makes it safe and easy to connect to DeFi and web3.
        <br />
        It has everything you need from MetaMask, plus lots more to love:
      </p>
      <div
        className={css`
          display: grid;
          grid: auto-flow auto / repeat(
              auto-fill,
              minmax(min(32rem, 100%), 1fr)
            );
          gap: 1rem;
          margin: 8rem 0;

          & > div {
            border-radius: ${tileBorderRadius};
            box-shadow: ${tileBoxShadow};
          }

          & > div > h2 {
            color: ${titleDarkHunterGreen};
            font: ${h2Quincy48};
          }

          & > div > p {
            margin: ${subtitleBlockMargin} auto;
            color: ${bodyDarkGold120};
            font: ${bodyNormalSegment24};
          }
        `}
      >
        <div
          className={css`
            background: bottom/ contain no-repeat url("feature-0-nft.png"),
              ${tileLightGradient};
            padding: 3.5rem 1rem 24rem;
          `}
        >
          <Feature
            title={
              <>
                A beautiful
                <br />
                NFT gallery.
              </>
            }
          >
            View all your NFTs in one place.
          </Feature>
        </div>
        <div
          className={css`
            background: bottom right / contain no-repeat
                url("feature-3-ledger.svg"),
              ${tileLightGradient};
            padding: 3.5rem 1rem 24rem;
          `}
        >
          <Feature title={<>Ledger support that actually works.</>}>
            Brought to you by a community of developers that listens to users.
          </Feature>
        </div>
        <div
          className={css`
            background: bottom / contain no-repeat url("feature-1-swap.png"),
              ${tileLightGradient};
            padding: 3.5rem 1rem 24rem;
          `}
        >
          <Feature title={<>Way cheaper swaps.</>}>
            Taho Swaps are half the price of other wallets, and there are no
            hidden fees.
          </Feature>
        </div>
        <div
          className={css`
            background: bottom / contain no-repeat url("feature-2-oss.svg"),
              ${tileLightGradient};
            padding: 3.5rem 1rem 24rem;
          `}
        >
          <Feature title={<>Nothing to hide.</>}>
            Taho is
            <br />
            100% open source.
          </Feature>
        </div>
        <div
          className={css`
            grid-column: 1 / -1;
            background: ${tileLightGradient};
            padding: 10rem 1rem;

            @media (min-width: 40rem) {
              background: left / auto 100% no-repeat
                  url("feature-4-community-avatars.png"),
                left bottom / 100% auto no-repeat
                  url("feature-4-community-circles.svg"),
                ${tileLightGradient};
              padding-left: calc(32rem);
            }
          `}
        >
          <Feature title={<>Owned by a community, not a conglomerate.</>}>
            We believe web3 should be accessible to everyone &amp; owned by
            users just like you.
          </Feature>
        </div>
        <div
          className={css`
            grid-column: 1 / -1;
            display: grid;
            grid: auto-flow auto / repeat(
                auto-fit,
                minmax(min(100%, 12rem), 1fr)
              );
            gap: 2rem;
            background: ${tileLightGradient};
            padding: 2rem;
          `}
        >
          <ComingSoon>MEV Kickbacks</ComingSoon>
          <ComingSoon>Leaderboard</ComingSoon>
          <ComingSoon>Social Recovery</ComingSoon>
        </div>
      </div>
      <div
        className={css`
          margin: 6rem 0;
        `}
      >
        <p
          className={css`
            color: ${bodyDarkGold120};
            font: ${bodyLargeSegment32};
          `}
        >
          Supported by the biggest projects in web3.
        </p>
        <div
          className={css`
            display: flex;
            flex-flow: row wrap;
            gap: 2rem;
            margin: 2rem 0;
            align-items: center;
            justify-content: center;
          `}
        >
          {Array.from({ length: 17 }).map((unused, i) => (
            <div
              className={css`
                width: 16rem;
              `}
            >
              <img
                className={css`
                  height: 6rem;
                `}
                key={i}
                src={`/images/supporter-${i + 1}.svg`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Feature({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <h2
        className={css`
          max-width: 32rem;
          margin: 0 auto;
        `}
      >
        {title}
      </h2>
      <p
        className={css`
          max-width: 30rem;
          margin: 0 auto;
        `}
      >
        {children}
      </p>
    </>
  );
}

function ComingSoon({ children }: { children: ReactNode }) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        gap: 1rem;
      `}
    >
      <div
        className={css`
          align-self: center;
          padding: ${pillBlockPadding} ${pillInlinePadding};
          border-radius: ${pillBorderRadius};
          font: ${pillLabelSegment14};
          letter-spacing: 0.02em;
          background: #ecd2b0;
          color: ${bodyDarkGold120};
        `}
      >
        Coming soon
      </div>
      <h3
        className={css`
          font: ${h3Quincy36};
          color: ${titleDarkHunterGreen};
        `}
      >
        {children}
      </h3>
    </div>
  );
}
