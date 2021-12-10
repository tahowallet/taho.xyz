import { mediumScreenQuery } from "layout/layout";
import { css } from "linaria";
import React from "react";

export function ProductHero() {
  return (
    <div
      className={css`
        display: none;
        position: relative;
        left: 2rem;
        margin: 0 auto;

        ${mediumScreenQuery} {
          display: unset;
        }
      `}
    >
      <img
        className={css`
          position: absolute;
          top: 2rem;
          left: -8rem;
          backdrop-filter: blur(0.5rem);
        `}
        width="490"
        height="420"
        src={require("../home/product-hero-browser.svg")}
      />
      <img
        className={css`
          max-width: 100%;
          position: relative;
          border-radius: 1rem;
          box-shadow: rgb(0 0 0 / 0.2) 0 0 1rem 0.5rem;
        `}
        width="384"
        height="600"
        src={require("../common/product-hero.svg")}
      />
    </div>
  );
}
