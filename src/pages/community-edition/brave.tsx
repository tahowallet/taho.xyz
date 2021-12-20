import { CommunityEditionBody } from "ce/ce";
import { Layout } from "layout/layout";
import React from "react";
import { ceDownloadButtons } from 'ce/ce-download-cta';

const Page = () => {
  return (
    <Layout title="Community Edition">
      <CommunityEditionBody downloadButtons={[ceDownloadButtons.brave]} />
    </Layout>
  );
};

export default Page;
