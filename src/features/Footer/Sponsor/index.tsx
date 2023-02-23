import { Link } from "gatsby";
import { css } from "@linaria/core";
import React, { CSSProperties, ReactNode } from "react";
import { quincyRegularFontFamily } from "shared/styles/font-families";

import alchemy from "./alchemy.svg";
import starMini from "./star-mini.svg";

export function Sponsor() {
  return (
    <div
      className={css`
        text-align: center;
        display: flex;
        flex-wrap: nowrap;
        align-content: space-around;
        flex-direction: column;
        justify-content: center;
        row-gap: 1rem;
      `}
    >
      <Link to="https://www.alchemy.com">
        <img width="170px" height="25px" src={alchemy} />
      </Link>
      <div>
        <img width="32px" height="30px" src={starMini} />
      </div>
      <div
        className={css`
          font-family: ${quincyRegularFontFamily};
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.3rem;
        `}
      >
        GOOD HUNTING!
      </div>
    </div>
  );
}
