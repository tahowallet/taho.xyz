import { Link } from "gatsby";
import { green120, textLight } from "layout/colors";
import { quincyRegularFontFamily } from "layout/fonts";
import { css } from "linaria";
import React from "react";

export function CommunityEditionPartners() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        padding: 6rem 2rem;
        background: radial-gradient(
            75.24% 75.24% at 50% 109.48%,
            rgba(153, 168, 167, 0.2) 0%,
            rgba(25, 51, 48, 0.2) 100%
          ),
          ${green120};
      `}
    >
      <h3
        className={css`
          margin: 2rem auto;
          font-family: ${quincyRegularFontFamily};
          font-size: clamp(18px, 6vw, 36px);
          font-weight: normal;
          color: ${textLight};
          text-align: center;
        `}
      >
        Try the Community Edition with
      </h3>
      <div
        className={css`
          display: flex;
          flex-flow: row wrap;
          justify-content: space-evenly;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;

          > * {
            margin: 2rem;
          }
        `}
      >
        <Link target="_blank" to="https://yearn.finance/#/home">
          <img src={require("../ce/partners/1-yearn.svg")} />
        </Link>
        <Link target="_blank" to="https://keep.network/">
          <img src={require("../ce/partners/2-keep.svg")} />
        </Link>
        <Link target="_blank" to="https://saddle.finance/#/">
          <img src={require("../ce/partners/3-saddle.svg")} />
        </Link>
      </div>
    </div>
  );
}
