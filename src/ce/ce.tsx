import { CommunityEditionDao } from "ce/ce-dao";
import { CommunityEditionFeatures } from "ce/ce-features";
import { CommunityEditionGetInvolved } from "ce/ce-get-involved";
import { CommunityEditionPartners } from "ce/ce-partners";
import { CommunityEditionShowcase } from "ce/ce-showcase";
import { Footer } from "common/footer";
import { NewsItem, NewsSection } from "common/news";
import { css } from "linaria";
import React from "react";

export function CommunityEditionBody() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
      `}
    >
      <CommunityEditionShowcase />
      <CommunityEditionDao />
      <NewsSection>
        <NewsItem
          to="https://blog.tally.cash/tally-call-for-delegates/"
          title={<>Call for Delegates for the Tally DAO</>}
          date={<>December 26, 2021</>}
          body={<>Tally is now accepting applications for DAO delegates.</>}
          main
        />
        <NewsItem
          to="https://blog.tally.cash/all-rights-reversed-tally-is-now-open-source/"
          title={<>Open Source Announcement</>}
          date={<>December 26, 2021</>}
          body={<>Tally is open source under GNU General Public License v3.</>}
        />
        <NewsItem
          to="https://blog.tally.cash/how-to-migrate-to-tally/"
          title={<>How to Migrate to Tally</>}
          date={<>December 26, 2021</>}
          body={<>Migrate from MetaMask in 3 easy steps.</>}
        />
      </NewsSection>
      <CommunityEditionFeatures />
      <CommunityEditionPartners />
      <CommunityEditionGetInvolved />
      <Footer />
    </div>
  );
}
