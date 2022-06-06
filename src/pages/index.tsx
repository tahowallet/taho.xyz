import { graphql, useStaticQuery } from "gatsby";
import { CommunityEditionBody } from "ce/ce";
import { ceDownloadButtons } from "ce/ce-download-cta";
import { useIsBraveBrowser } from "common/brave-browser";
import { Layout } from "layout/layout";
import React from "react";

const Page = () => {
  const isBrave = useIsBraveBrowser();

  const data = useStaticQuery(graphql`
    query TitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout title={data.site.siteMetadata?.title || `Title`}>
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
