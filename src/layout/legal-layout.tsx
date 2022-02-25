import { Header } from "common/header";
import { textGreen20, textLight, trophyGold } from "layout/colors";
import { quincyRegularFontFamily, segmentFontFamily } from "layout/fonts";
import { Layout } from "layout/layout";
import { css } from "linaria";
import React, { ReactNode } from "react";

export default function LegalLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <Layout title={title}>
      <Header />
      <div
        className={css`
          margin: 0 auto;
          padding: 6rem 1rem 0;
          margin-bottom: -20vw;
          max-width: 48rem;
          font-family: ${segmentFontFamily};
          font-size: 18px;
          line-height: 1.44;
          color: ${textGreen20};

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${quincyRegularFontFamily};
            font-weight: unset;
            color: ${textLight};
            margin: 2em 0 1em;
            line-height: 1.1;
          }

          h1 {
            text-align: center;
            font-size: 64px;
            margin: 1rem 0;
          }

          h1 + p {
            text-align: center;
            margin: 1rem 0 4rem;
            font-size: 14px;
          }

          h2 {
            margin: 4rem 0 2rem;
            font-size: 36px;
          }

          li::marker {
            content: "· ";
            font-weight: 900;
          }

          a {
            color: ${trophyGold};
            text-decoration: unset;
          }

          table {
            border-collapse: collapse;
          }

          td,
          th {
            border: solid 1px ${textGreen20};
            padding: 0.5rem 1rem;
          }

          td > ul {
            padding-left: 1rem;
          }
        `}
      >
        {children}
      </div>
    </Layout>
  );
}
