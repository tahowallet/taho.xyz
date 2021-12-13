import { green120, textLight } from "layout/colors";
import { quincyRegularFontFamily } from "layout/fonts";
import { mediumScreenQuery } from "layout/layout";
import { css } from "linaria";
import React from "react";

export function ProductHero() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        padding: 12rem 0 0rem;
        background: no-repeat bottom / auto 24rem
            url(${require("../home/forest-background.svg")}),
          no-repeat top left / contain
            linear-gradient(
              to bottom,
              rgb(255 255 255 / 0) 0,
              rgb(255 255 255 / 0.12) 48rem,
              ${green120} 80rem
            );
      `}
    >
      <div
        className={css`
          display: flex;
          flex-flow: row;
          max-width: 60rem;
          margin: 0 auto;
        `}
      >
        <div
          className={css`
            display: none;
            position: relative;
            margin: 0 4rem;

            ${mediumScreenQuery} {
              display: unset;
            }
          `}
        >
          <img
            className={css`
              position: absolute;
              top: -4rem;
              right: -2rem;
              z-index: -1;
            `}
            width="880"
            height="658"
            src={require("../home/product-hero-browser.svg")}
          />
          <img
            className={css`
              border-radius: 1rem;
              box-shadow: rgb(0 0 0 / 0.2) 0 0 1rem 0.5rem;
            `}
            width="384"
            height="600"
            src={require("../common/product-hero.svg")}
          />
        </div>
        <h1
          className={css`
            padding: 0 2rem;
            font-family: ${quincyRegularFontFamily};
            font-size: min(64px, 8vw);
            font-weight: normal;
            line-height: 110%;
            color: ${textLight};

            ${mediumScreenQuery} {
              margin: 4rem 0;
            }
          `}
        >
          The first wallet owned
          <br />
          by its users.
        </h1>
      </div>
    </div>
  );
}
