import { graphql, useStaticQuery } from "gatsby";
import { Home } from "home/home";
import { Layout } from "layout/layout";
import React from "react";

const IndexPage = () => {
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
      <Home />
    </Layout>
  );
};

export default IndexPage;
