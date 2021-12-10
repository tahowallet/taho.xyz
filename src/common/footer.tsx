import { NavLinks } from "common/nav";
import { Link } from "gatsby";
import { textGreen40, textGreen60 } from "layout/colors";
import { quincyRegularFontFamily } from "layout/fonts";
import { css } from "linaria";
import React from "react";

export function Footer() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 12rem 0 8rem;
      `}
    >
      <img width="86" height="65" src={require("../common/footer-logo.svg")} />
      <div
        className={css`
          margin: 1rem 0;
          font-family: ${quincyRegularFontFamily};
          font-size: 24px;
          letter-spacing: 0.2em;
          color: ${textGreen40};
        `}
      >
        TALLY HO!
      </div>
      <div
        className={css`
          display: flex;
          flex-flow: row wrap;
          gap: 2rem 0;
          align-items: center;
          justify-content: center;
          margin: 2rem;
        `}
      >
        <NavLinks />
      </div>
      <div
        className={css`
          margin: 2rem 0;
          font-family: ${quincyRegularFontFamily};
          font-size: 12px;
          color: ${textGreen60};
        `}
      >
        © 2021 &nbsp;|&nbsp; *A{" "}
        <Link
          className={css`
            text-decoration: none;
            color: inherit;
          `}
          to="https://thesis.co/"
        >
          Thesis
        </Link>{" "}
        Build
      </div>
    </div>
  );
}
