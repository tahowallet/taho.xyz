import { css } from "linaria";
import React, { ReactNode } from "react";
import {
  bodyDarkGold120,
  bodyDarkGrey80,
  borderDarkGold120,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodyNormalSegment24,
  bodySmallSegment18,
  h1Quincy72,
  h3Quincy36,
} from "shared/styles/fonts";
import {
  sectionBodyNarrowWidth,
  subtitleBlockMargin,
} from "shared/styles/lengths";

export function SecurityAudits() {
  return (
    <div
      className={css`
        padding: 6rem 0;
      `}
    >
      <div
        className={css`
          text-align: center;
          margin: 6rem 0;
        `}
      >
        <h1
          className={css`
            color: ${titleDarkHunterGreen};
            font: ${h1Quincy72};
          `}
        >
          Security Audits
        </h1>
        <p
          className={css`
            max-width: ${sectionBodyNarrowWidth};
            margin: ${subtitleBlockMargin} auto;
            font: ${bodyNormalSegment24};
            color: ${bodyDarkGrey80};
          `}
        >
          The Taho extension and smart contracts have been reviewed by the
          industry&rsquo;s most respected security auditors.
        </p>
      </div>
      <div
        className={css`
          overflow-x: auto;
          margin: 6rem -2rem;
          padding: 0 2rem;
        `}
      >
        <table
          className={css`
            min-width: 32rem;
            width: 100%;
            border-collapse: collapse;

            td {
              border: 1px none ${borderDarkGold120};
              border-style: solid none;
              padding: 2rem 1rem;
            }
          `}
        >
          <tbody>
            <Audit
              auditor={<>Open Zeppelin</>}
              date={<>August 2020</>}
              detail={
                <>Early prototype versions of Taho Swaps, Earn, and token contracts</>
              }
              href="/OpenZeppelin_Audit_Report.pdf"
            />
            <Audit
              auditor={<>Least Authority</>}
              date={<>November 2021</>}
              detail={<>Wallet keyring</>}
              href="https://leastauthority.com/static/publications/LeastAuthority-YLVIS_LLC_Tally_Browser_Extension_Wallet_Key_Handling_Final_Audit_Report.pdf"
            />
            <Audit
              auditor={<>Code Arena</>}
              date={<>November 2021</>}
              detail={<>Swaps contracts</>}
              href="https://code4rena.com/reports/2021-10-tally/"
            />
            <Audit
              auditor={<>Least Authority</>}
              date={<>July 2023</>}
              detail={<>Private Key Import + Recovery Phrase Reveal</>}
              href="https://leastauthority.com/wp-content/uploads/2023/07/Thesis_Taho_Wallet_Extension_Final_Audit_Report_Least-Authority.pdf"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Audit({
  auditor,
  date,
  detail,
  href,
}: {
  auditor: ReactNode;
  date: ReactNode;
  detail: ReactNode;
  href: string;
}) {
  return (
    <tr>
      <td
        className={css`
          font: ${h3Quincy36};
          color: ${titleDarkHunterGreen};
        `}
      >
        {auditor}
      </td>
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
        {detail}
      </td>
      <td>
        <a
          aria-label="Open audit results"
          className={css`
            display: block;
            background: center / 2rem auto no-repeat url("icon-arrow.svg");
            width: 6rem;
            height: 5rem;
            margin: -2rem;
          `}
          href={href}
          target="_blank"
        />
      </td>
    </tr>
  );
}
