import { css } from "@linaria/core";
import React, { CSSProperties, ReactNode } from "react";
import {
  bodyDarkGold120,
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodyNormalSegment24,
  buttonLabelQuincy18,
  h1Quincy72,
  h2Quincy48,
} from "shared/styles/fonts";
import { tileLightGradient } from "shared/styles/gradients";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
  subtitleBlockMargin,
  tileBorderRadius,
} from "shared/styles/lengths";
import { buttonShadow, tileBoxShadow } from "shared/styles/shadows";

export function SecurityFeatures() {
  return (
    <div>
      <div
        className={css`
          text-align: center;
          margin: 4rem 0;
        `}
      >
        <h1
          className={css`
            color: ${titleDarkHunterGreen};
            font: ${h1Quincy72};
          `}
        >
          Keeping you
          <br />
          safe in web3.
        </h1>
        <p
          className={css`
            max-width: 32rem;
            margin: ${subtitleBlockMargin} auto;
            font: ${bodyNormalSegment24};
            color: ${bodyDarkGold120};
          `}
        >
          Taho combines bulletproof security and top-to-bottom transparency so
          you can explore web3 without having to worry.
        </p>
      </div>
      <div
        className={css`
          display: grid;
          grid: auto-flow auto / repeat(
              auto-fill,
              minmax(min(32rem, 100%), 1fr)
            );
          gap: 1rem;
          margin: 8rem 0;
          text-align: center;
        `}
      >
        <Feature
          title={
            <>
              Your keys,
              <br />
              your crypto.
            </>
          }
          iconsrc={require("./feature-1-keys.svg").default}
        >
          Taho is 100% self-custodial. Your private keys are secured on your
          computer and never leave your device.
        </Feature>
        <Feature
          iconsrc={require("./feature-2-oss.svg").default}
          title={
            <>
              Nothing
              <br />
              to hide.
            </>
          }
          cta={
            <Cta href="https://github.com/tahowallet/extension">
              View on Github
            </Cta>
          }
        >
          Our code is 100% open source and can be verified by anyone.
        </Feature>
        <Feature
          iconsrc={require("./feature-3-privacy.svg").default}
          title={
            <>
              Your privacy
              <br />
              stays safe.
            </>
          }
          cta={<Cta href="/privacy">View our Privacy Policy</Cta>}
        >
          No personal info is required to sign up, and Taho never tracks your
          activity or addresses.
        </Feature>
        <Feature
          iconsrc={require("./feature-4-audited.svg").default}
          title={
            <>
              Independently
              <br />
              audited.
            </>
          }
        >
          Taho has undergone review from the premiere security firms in web3.
        </Feature>
      </div>
    </div>
  );
}

export function Feature({
  iconSrc,
  title,
  cta,
  children,
}: {
  iconSrc: string;
  title: ReactNode;
  cta?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      style={{ "--icon": `url(${iconSrc})` } as CSSProperties}
      className={css`
        position: relative;
        background: bottom 12rem center / auto 4rem no-repeat var(--icon),
          bottom center / 36rem auto no-repeat url("background.svg"),
          ${tileLightGradient};
        padding: 6rem 1rem 20rem;
        border-radius: ${tileBorderRadius};
        box-shadow: ${tileBoxShadow};
      `}
    >
      <h2
        className={css`
          color: ${titleDarkHunterGreen};
          font: ${h2Quincy48};
        `}
      >
        {title}
      </h2>
      <p
        className={css`
          max-width: 80%;
          margin: ${subtitleBlockMargin} auto;
          color: ${bodyDarkGold120};
          font: ${bodyNormalSegment24};
        `}
      >
        {children}
      </p>
      {cta}
    </div>
  );
}

function Cta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className={css`
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        font: ${buttonLabelQuincy18};
        color: ${buttonLabelHunterGreen};
        box-shadow: ${buttonShadow};
        background: ${buttonBackgroundSemanticSuccess};
        margin: 3rem auto;
        width: fit-content;
        padding: ${buttonBlockPadding} ${buttonInlinePadding};
        border-radius: ${buttonBorderRadius};
      `}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
