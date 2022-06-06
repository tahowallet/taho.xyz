import { CommunityEditionDao } from "ce/ce-dao";
import { CommunityEditionFeatures } from "ce/ce-features";
import { CommunityEditionGetInvolved } from "ce/ce-get-involved";
import { CommunityEditionPartners } from "ce/ce-partners";
import { CommunityEditionShowcase } from "ce/ce-showcase";
import { NewsItem, NewsSection } from "common/news";
import { css } from "linaria";
import React, { ReactNode } from "react";

export function CommunityEditionBody({
  downloadButtons,
}: {
  downloadButtons: ReactNode;
}) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
      `}
    >
      <CommunityEditionShowcase downloadButtons={downloadButtons} />
      <CommunityEditionDao />
      <NewsSection>
        <NewsItem
          to="https://blog.tally.cash/least-authority-keyring-audit-gives-tally-ho-high-marks/"
          title={<>Least Authority Keyring Audit Gives Tally Ho High Marks</>}
          date={<>April 14, 2022</>}
          body={<>The Tally Ho team is proud to share the results of a security audit performed by Least Authority. .</>}
          main
        />
        <NewsItem
          to="https://blog.tally.cash/all-rights-reversed-tally-is-now-open-source/"
          title={<>Tally Ho Now Supports Unstoppable Domains</>}
          date={<>May 17, 2022</>}
          body={<>We’re excited to announce Tally Ho’s partnership with Unstoppable Domains (UNS). Tally Ho users can now use UNS domains to send and receive with a single, easily-readable name.</>}
        />
        <NewsItem
          to="https://blog.tally.cash/how-to-try-tally/"
          title={<>A Ledger Integration You Can Love</>}
          date={<>March 23, 2021</>}
          body={
            <>We’re excited to announce that you can now use your Ledger with Tally Ho!</>
          }
        />
      </NewsSection>
      <CommunityEditionFeatures downloadButtons={downloadButtons} />
      <CommunityEditionPartners />
      <CommunityEditionGetInvolved />
    </div>
  );
}
