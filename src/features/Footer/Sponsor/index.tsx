import { Link } from "gatsby";
import { css } from "linaria";
import React, { CSSProperties, ReactNode } from "react";
import {
    quincyRegularFontFamily,
  } from "shared/styles/font-families";

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
        <img width="170px" height="25px" src={require("./alchemy.svg")} 
        />
      </Link>
        <div>
            <img width="32px" height="30px" src={require("./star-mini.svg")}
            />
        </div>       
        <div className={css`
        font-family: ${quincyRegularFontFamily};
        font-size: 24px;
        font-weight: 700;
        letter-spacing: .3rem;
        `}>
            GOOD HUNTING!
        </div>
    </div>
    );
}