import { NavLinks } from "common/nav";
import { Link } from "gatsby";
import { green120 } from "layout/colors";
import { largeScreenQuery, mediumScreenQuery } from "layout/layout";
import { css, cx } from "linaria";
import React, { useState } from "react";

export const headerClassName = "header";
export const mobileMenuClassName = "mobile-menu";

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
            padding: 0.5rem 0.25rem;
            appearance: none;
            border: none;
            background: none;
            cursor: pointer;

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
          mobileMenuClassName,
          css`
            display: none;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
            overflow: scroll;
            flex-flow: column;
            gap: 1.5rem;
            padding: 2rem;
            background: ${green120};
            text-align: right;
            align-items: flex-end;

            &.open {
              display: flex;

              ${largeScreenQuery} {
                display: none;
              }
            }
          `
        )}
      >
        <button
          className={css`
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            margin: 0;
            padding: 0;
            appearance: none;
            border: none;
            background: none;
            flex: 1;
          `}
          onClick={(event) => {
            setMenuOpen((x) => !x);
            event.stopPropagation();
          }}
        >
          <img
            width="40"
            height="40"
            src={require("../common/tally-logo-mono.svg")}
          />
          <div
            className={css`
              margin-left: auto;
              padding: 0.5rem 0.25rem;
              cursor: pointer;
            `}
          >
            <img
              className={css`
                width: 1.5rem;
                height: 1.5rem;
              `}
              src={require("../common/icon-menu-close.svg")}
            />
          </div>
        </button>
        <NavLinks onNavigate={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
