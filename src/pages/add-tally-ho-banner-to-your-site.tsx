import { BannerSnippetSelfService } from "announcement-banner/banner-self-service";
import { Layout } from "layout/layout";
import React from "react";

const Page = () => {
  return (
    <Layout title="Snippet">
      <BannerSnippetSelfService />
    </Layout>
  );
};

export default Page;
