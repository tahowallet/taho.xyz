import { css } from "linaria";
import React, { ReactNode } from "react";
import {
  bodyDarkGreen120,
  bodyDarkGrey60,
  cardBackgroundGold60,
  cardBackgroundGreen20,
  sectionBackgroundOffWhite,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodyNormalSegment24,
  bodySmallSegment18,
  h1Quincy72,
  h2Quincy48,
} from "shared/styles/fonts";
import {
  sectionBodyWideWidth,
  sectionInlinePadding,
  sectionNarrowWidth,
  subtitleBlockMargin,
  sectionWideWidth,
} from "shared/styles/lengths";

export function DaoGetInvolved() {
  return (
    <div
      className={css`
        background: ${sectionBackgroundOffWhite};
        padding: 6rem 0;
      `}
    >
      <div
        className={css`
          max-width: ${sectionWideWidth};
          margin: 0 auto;
          padding: 0 ${sectionInlinePadding};
          text-align: center;
        `}
      >
        <h1
          className={css`
            font: ${h1Quincy72};
            color: ${titleDarkHunterGreen};
          `}
        >
          How to get involved
        </h1>
        <p
          className={css`
            font: ${bodyNormalSegment24};
            color: ${bodyDarkGrey60};
            max-width: ${sectionBodyWideWidth};
            margin: ${subtitleBlockMargin} auto;
          `}
        >
          There are tons of ways to get involved in the DAO&mdash;whether
          you&rsquo;re a designer, developer, writer, or just someone
          who&rsquo;s passionate about web3. Here&rsquo;s how to get started:
        </p>
      </div>
      <div
        className={css`
          display: grid;
          grid: auto-flow 1fr / repeat(auto-fill, minmax(min(100%, 24rem), 1fr));
          gap: 1rem;
          max-width: ${sectionNarrowWidth};
          padding: 0 ${sectionInlinePadding};
          margin: 4rem auto;
        `}
      >
        <Option
          iconSrc={require("./option-1-discord.svg")}
          href="https://chat.taho.xyz/"
          title="Discord"
        >
          The best way to get started and join the community.
        </Option>
        <Option
          iconSrc={require("./option-2-gov.svg")}
          href="https://gov.taho.xyz/"
          title="Governance Forum"
        >
          Our governance forum. A place for sharing governance ideas and
          long-form thoughts.
        </Option>
        <Option
          iconSrc={require("./option-3-workspace.svg")}
          href="https://tahowallet.notion.site/"
          title="Community Workspace"
        >
          The community calendar, plus an overview of all our active working
          groups.
        </Option>
        <Option
          iconSrc={require("./option-4-github.svg")}
          href="https://github.com/tahowallet/extension"
          title="Github"
        >
          Taho&rsquo;s code is 100% free and open source. Check out our{" "}
          &lsquo;good first issue&rsquo; tag to get started.
        </Option>
      </div>
    </div>
  );
}

function Option({
  href,
  iconSrc,
  title,
  children,
}: {
  href: string;
  iconSrc: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      className={css`
        padding: 8rem 2rem;
        border-radius: 1rem;
        text-align: center;

        &:nth-child(4n + 1),
        &:nth-child(4n + 4) {
          background: bottom 2rem right 2rem no-repeat url("link-arrow.svg"),
            ${cardBackgroundGreen20};
        }

        &:nth-child(4n + 2),
        &:nth-child(4n + 3) {
          background: bottom 2rem right 2rem no-repeat url("link-arrow.svg"),
            ${cardBackgroundGold60};
        }
      `}
      href={href}
      target="_blank"
    >
      <img src={iconSrc} />
      <h2
        className={css`
          font: ${h2Quincy48};
          color: ${titleDarkHunterGreen};
          margin: ${subtitleBlockMargin} auto;
        `}
      >
        {title}
      </h2>
      <p
        className={css`
          padding: 0 3rem;
          font: ${bodySmallSegment18};
          color: ${bodyDarkGreen120};
        `}
      >
        {children}
      </p>
    </a>
  );
}
