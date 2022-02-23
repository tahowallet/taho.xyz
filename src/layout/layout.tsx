import { Footer } from "common/footer";
import { hunterGreen } from "layout/colors";
import SEO from "layout/seo";
import { css } from "linaria";
import "normalize.css";
import React, { ReactNode } from "react";

export const largeScreenQuery = `@media (min-width: 80rem)`;
export const mediumScreenQuery = `@media (min-width: 48rem)`;

export function Layout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <SEO title={title} />
      <div
        className={css`
          display: flex;
          flex-flow: column;
          padding-bottom: 40vw;
          background: no-repeat bottom center / 100% auto
              url(${require("../common/footer-background.svg")}),
            ${hunterGreen};

          :global() {
            html {
              height: 100vh;
            }

            * {
              box-sizing: border-box;
            }
          }
        `}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
