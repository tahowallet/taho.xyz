import { CommunityEditionDao } from "ce/ce-dao";
import { CommunityEditionFeatures } from "ce/ce-features";
import { CommunityEditionGetInvolved } from "ce/ce-get-involved";
import { CommunityEditionPartners } from "ce/ce-partners";
import { CommunityEditionShowcase } from "ce/ce-showcase";
import { Footer } from "common/footer";
import { NewsSection } from "common/news";
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
      <NewsSection />
      <CommunityEditionFeatures />
      <CommunityEditionPartners />
      <CommunityEditionGetInvolved />
      <Footer />
    </div>
  );
}
