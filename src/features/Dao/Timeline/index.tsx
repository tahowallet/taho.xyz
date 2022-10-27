import { css } from "linaria";
import React, { ReactNode } from "react";
import {
  bodyDarkGold120,
  bodyDarkGrey80,
  borderDarkGold120,
  sectionBackgroundGold5,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodyNormalSegment24,
  bodySmallSegment18,
  buttonLabelQuincy18,
  h1Quincy72,
} from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
  sectionInlinePadding,
  sectionWideWidth,
  subtitleBlockMargin,
} from "shared/styles/lengths";

export function DaoTimeline() {
  return (
    <div
      className={css`
        background: top -6rem center / 60rem auto no-repeat url("background.png"),
          ${sectionBackgroundGold5};
        padding: 20rem 0 6rem;
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
          DAO Timeline
        </h1>
        <p
          className={css`
            font: ${bodyNormalSegment24};
            margin: ${subtitleBlockMargin} auto;
            color: ${bodyDarkGrey80};
          `}
        >
          Tally Ho&rsquo;s community has been building in public for over a
          year. <br />
          The on-chain DAO will launch in 2022.
        </p>
      </div>
      <div
        className={css`
          max-width: ${sectionWideWidth};
          padding: 0 ${sectionInlinePadding};
          margin: 0 auto;
        `}
      >
        <div
          className={css`
            overflow-x: auto;
            margin: 4rem -2rem;
            padding: 0 2rem;
          `}
        >
          <table
            className={css`
              width: 100%;
              min-width: 40rem;
              border-collapse: collapse;

              td {
                border: 1px none ${borderDarkGold120};
                border-style: solid none;
                padding: 2rem 1rem;
              }
            `}
          >
            <tbody>
              <Event date="January 2021">Development begins on Tally Ho</Event>
              <Event
                date="August 2021"
                href="https://blog.tally.cash/a-community-owned-wallet-for-the-new-internet/"
              >
                Tally Ho is Publicly Announced
              </Event>
              <Event date="August 2021">First Community Call</Event>
              <Event date="September 2021">First Community POAPs created</Event>
              <Event
                date="December 2021"
                href="https://gov.tallyho.org/t/tally-ho-delegate-applications/18"
              >
                Call for DAO Delegates (still open!)
              </Event>
              <Event
                date="February 2022"
                href="https://blog.tally.cash/tally-wallet-plans-first-gitcoin-aqueduct-to-automate-public-goods-funding-ecosystem-building/"
              >
                Tally Ho Commits 2.5% of Token Supply to Gitcoin Aqueduct
              </Event>
              <Event
                date="March 2022"
                href="https://blog.tally.cash/community-multisig-deployed/"
              >
                Community Multisig Deployed
              </Event>
              <Event
                date="May 2022"
                href="https://gov.tallyho.org/t/tally-ho-dao-structure-proposal/455"
              >
                DAO Structure Proposed
              </Event>
              <Event date="Coming soon">On-chain DAO Launches</Event>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Event({
  date,
  children,
  href,
}: {
  date: ReactNode;
  children: ReactNode;
  href?: string;
}) {
  return (
    <tr>
      <td
        className={css`
          font: ${bodyNormalSegment24};
          color: ${bodyDarkGold120};
        `}
      >
        {date}
      </td>
      <td
        className={css`
          font: ${bodySmallSegment18};
          color: ${bodyDarkGrey80};
        `}
      >
        {children}
      </td>

      <td
        className={css`
          text-align: right;
        `}
      >
        {href && (
          <a
            className={css`
              padding: ${buttonBlockPadding} ${buttonInlinePadding};
              border-radius: ${buttonBorderRadius};
              margin: 0 2rem;
              border: 1px solid ${bodyDarkGrey80};
              padding-right: 3rem;
              background: right 1.5rem center / 1rem no-repeat
                url("icon-new-tab.svg");
              font: ${buttonLabelQuincy18};
              white-space: nowrap;
            `}
            href={href}
            target="_blank"
          >
            Read more
          </a>
        )}
      </td>
    </tr>
  );
}
