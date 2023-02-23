import { FooterNav } from "features/Footer/Nav";
import { Sponsor } from "./Sponsor";
import { Link } from "gatsby";
import { css } from "linaria";
import React from "react";
import { green60 } from "shared/styles/color-palette";
import { sectionBackgroundGold5 } from "shared/styles/colors";
import { quincyRegularFontFamily } from "shared/styles/font-families";

export const footerSeparatorBackground = `bottom -1px center / 100% auto no-repeat url("~features/Footer/separator.svg")`;

export function Footer() {
  return (
    <div
      className={css`
        background: ${sectionBackgroundGold5};
      `}
    >
      <FooterNav />
      <Sponsor />
      <div
        className={css`
          margin: 2rem;
          padding: 0 0 6rem;
          font-family: ${quincyRegularFontFamily};
          font-size: 12px;
          color: ${green60};
          text-align: center;
        `}
      >
        © {new Date().getFullYear()} Taho &nbsp;|&nbsp; *A{" "}
        <Link target="_blank" to="https://thesis.co/">
          Thesis
        </Link>{" "}
        Build &nbsp;|&nbsp;{" "}
        <Link target="_blank" to="/privacy">
          Privacy policy
        </Link>
      </div>
    </div>
  );
}
