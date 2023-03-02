import { Footer } from "features/Footer";
import { Header } from "features/Header";
import { css } from "linaria";
import React, { ReactNode } from "react";
import { green20, trophyGold } from "shared/styles/color-palette";
import { bodyDarkGrey80, titleDarkHunterGreen } from "shared/styles/colors";
import { segmentBoldFontFamily, segmentFontFamily } from "shared/styles/font-families";

export default function Legal({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <>
      <Header />
      <div
        className={css`
          margin: 0 auto;
          padding: 6rem 1rem 0;
          max-width: 48rem;
          font: 18px / 1.44 ${segmentFontFamily};
          color: ${bodyDarkGrey80};

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 2em 0 1em;
            color: ${titleDarkHunterGreen};
          }

          h1 {
            text-align: center;
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
          li {
            margin-top: 0.5rem;
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
            border: solid 1px ${green20};
            padding: 0.5rem 1rem;
          }

          td > ul {
            padding-left: 1rem;
          }
          strong {
            font-family: ${segmentBoldFontFamily};
          }
        `}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
