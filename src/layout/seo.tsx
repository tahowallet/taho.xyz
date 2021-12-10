/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

function SEO({
  description = ``,
  lang = `en`,
  meta = [],
  title,
}: {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = site.siteMetadata?.image;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: metaImage,
        },
      ].concat(meta)}
    />
  );
}

export default SEO;
