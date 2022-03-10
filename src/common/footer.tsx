import { NavLinks } from "common/nav";
import { Link } from "gatsby";
import { textGreen40, textGreen60, hunterGreen } from "layout/colors";
import { quincyRegularFontFamily } from "layout/fonts";
import { css } from "linaria";
import React from "react";

export function Footer() {
  return (
    <div
      className={css`
        padding: 0 1rem 4rem;
        background: ${hunterGreen};
        text-align: center;
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
        <p>
          The Tally Ho Wallet is not affiliated with dAppHero and/or the Tally
          voting dashboard and blockchain governance platform at
          <i>withtally.com</i>.
        </p>
        © {new Date().getFullYear()} &nbsp;|&nbsp; *A{" "}
        <Link
          className={css`
            text-decoration: none;
            color: inherit;
          `}
          target="_blank"
          to="https://thesis.co/"
        >
          Thesis
        </Link>{" "}
        Build &nbsp;|&nbsp;{" "}
        <Link
          className={css`
            text-decoration: none;
            color: inherit;
          `}
          target="_blank"
          to="/privacy"
        >
          Privacy policy
        </Link>
      </div>
    </div>
  );
}
