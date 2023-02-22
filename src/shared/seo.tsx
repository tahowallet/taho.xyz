import React from "react";
import { Helmet } from "react-helmet";

function SEO({
  description,
  lang = `en`,
  meta = [],
  title,
  metaImage = `https://tallyho.org/cover.png`,
}: {
  description?: string;
  lang?: string;
  meta?: any[];
  title?: string;
  metaImage?: string;
}) {
  const metaTitle = title ?? `Taho — The community owned & operated wallet`;
  const metaDescription = description ?? ``;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={metaTitle}
      meta={[
        { name: `description`, content: description },
        { property: `og:title`, content: metaTitle },
        { property: `og:description`, content: description },
        { property: `og:image`, content: metaImage },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:creator`, content: `@thesis_co` },
        { name: `twitter:title`, content: metaTitle },
        { name: `twitter:description`, content: metaDescription },
        { name: "twitter:image", content: metaImage },
      ].concat(meta)}
    />
  );
}

export default SEO;
