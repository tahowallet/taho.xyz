import { CommunityEditionBody } from "ce/ce";
import { ceDownloadButtons } from "ce/ce-download-cta";
import { useIsBraveBrowser } from "common/brave-browser";
import { Layout } from "layout/layout";
import React from "react";

const Page = () => {
  const isBrave = useIsBraveBrowser();

  return (
    <Layout title="Community Edition">
      <CommunityEditionBody
        downloadButtons={
          isBrave
            ? [ceDownloadButtons.brave, ceDownloadButtons.firefox]
            : [ceDownloadButtons.chrome, ceDownloadButtons.firefox]
        }
      />
    </Layout>
  );
};

export default Page;
