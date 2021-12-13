import { NavLinks } from "common/nav";
import { Link } from "gatsby";
import { green120 } from "layout/colors";
import { largeScreenQuery, mediumScreenQuery } from "layout/layout";
import { css, cx } from "linaria";
import React, { useState } from "react";

export const headerClassName = "header";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className={css`
          display: flex;
          flex-flow: row;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          padding: 2rem;

          ${mediumScreenQuery} {
            padding: 5rem 4rem 2rem;
          }
        `}
      >
        <Link to="/">
          <img
            className={css`
              ${mediumScreenQuery} {
                display: none;
              }
            `}
            width="40"
            height="40"
            src={require("../common/tally-logo-small.svg")}
          />
          <img
            className={css`
              display: none;

              ${mediumScreenQuery} {
                display: unset;
              }
            `}
            width="226"
            height="80"
            src={require("../common/tally-logo.svg")}
          />
        </Link>
        <div
          className={cx(
            headerClassName,
            css`
              display: none;
              flex-flow: row;
              align-items: center;
              margin-left: auto;

              ${largeScreenQuery} {
                display: flex;
              }
            `
          )}
        >
          <NavLinks />
        </div>
        <button
          className={css`
            margin-left: auto;
            appearance: none;
            border: none;
            background: none;

            ${largeScreenQuery} {
              display: none;
            }
          `}
          onClick={() => {
            setMenuOpen((x) => !x);
          }}
        >
          <img
            className={css`
              width: 1.5rem;
              height: 1.5rem;
            `}
            src={require("../common/icon-menu.svg")}
          />
        </button>
      </div>
      <div
        className={cx(
          menuOpen && "open",
          css`
            display: none;
            background: ${green120};
            padding: 2rem;
            align-items: center;
            justify-content: center;
            gap: 2rem 0;

            &.open {
              display: flex;
              flex-flow: row wrap;

              ${largeScreenQuery} {
                display: none;
              }
            }
          `
        )}
      >
        <NavLinks />
      </div>
    </>
  );
}
