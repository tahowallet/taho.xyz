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
          to="https://blog.tally.cash/tally-call-for-delegates/"
          title={<>Call for Delegates for the Tally Ho DAO</>}
          date={<>December 1, 2021</>}
          body={<>Tally Ho is now accepting applications for DAO delegates.</>}
          main
        />
        <NewsItem
          to="https://blog.tally.cash/all-rights-reversed-tally-is-now-open-source/"
          title={<>Open Source Announcement</>}
          date={<>November 17, 2021</>}
          body={<>Tally Ho is open source under GNU General Public License v3.</>}
        />
        <NewsItem
          to="https://blog.tally.cash/how-to-try-tally/"
          title={<>How to Try Tally Ho</>}
          date={<>December 15, 2021</>}
          body={
            <>The Community Edition includes everything you need for DeFi.</>
          }
        />
      </NewsSection>
      <CommunityEditionFeatures downloadButtons={downloadButtons} />
      <CommunityEditionPartners />
      <CommunityEditionGetInvolved />
    </div>
  );
}
