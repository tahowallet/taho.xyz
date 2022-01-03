import { green120, textLight } from "layout/colors";
import { quincyRegularFontFamily } from "layout/fonts";
import { mediumScreenQuery, largeScreenQuery } from "layout/layout";
import { css } from "linaria";
import React from "react";

export function ProductHero() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        padding: 2rem 0;
        background: no-repeat bottom / max(100vw, 120rem) auto
            url(${require("../home/forest-background.svg")}),
          no-repeat top left / contain
            linear-gradient(
              to bottom,
              rgb(255 255 255 / 0) 0,
              rgb(255 255 255 / 0.12) 48rem,
              ${green120} 80rem
            );

        ${mediumScreenQuery} {
          padding: 6rem 0 0;
        }
      `}
    >
      <div
        className={css`
          display: flex;
          flex-flow: column;
          align-items: center;
          width: 100%;
          max-width: 75rem;
          margin: 0 auto;

          ${mediumScreenQuery} {
            flex-flow: row-reverse;
            align-items: stretch;
            justify-content: flex-start;
          }
        `}
      >
        <h1
          className={css`
            margin: 2rem 0;
            padding: 0 2rem;
            font-family: ${quincyRegularFontFamily};
            font-size: min(64px, 8vw);
            font-weight: normal;
            line-height: 110%;
            color: ${textLight};

            ${mediumScreenQuery} {
              margin: 8rem 2rem;
              max-width: 28rem;
            }
          `}
        >
          The first wallet owned
          <br />
          by its users.
        </h1>

        <div
          className={css`
            position: relative;
            margin: 4rem 2rem 0;
          `}
        >
          <img
            className={css`
              position: absolute;
              top: -4rem;
              right: -1.5rem;
              z-index: -1;
            `}
            width="613"
            height="658"
            src={require("../home/product-hero-browser.svg")}
          />
          <img
            className={css`
              max-width: calc(100vw - 6rem);
              height: auto;
              border-radius: 1rem;
              box-shadow: rgb(0 0 0 / 0.2) 0 0 1rem 0.5rem;
            `}
            width="384"
            height="600"
            src={require("../common/product-hero.svg")}
          />
        </div>
      </div>
    </div>
  );
}
