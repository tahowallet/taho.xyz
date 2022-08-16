import { NavLink } from "features/Header/NavLink";
import { Link } from "gatsby";
import { css } from "linaria";
import React from "react";
import { buttonBackgroundTrophyGold } from "shared/styles/colors";
import { buttonLabelQuincy18 } from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
} from "shared/styles/lengths";

export function Header() {
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem 2rem;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          padding: 4rem 2rem 2rem;
        `}
      >
        <Link to="/">
          <img
            className={css`
              height: 3.75rem;
              width: auto;
            `}
            width="226"
            height="80"
            src={require("./logo.svg")}
          />
        </Link>
        <Link
          className={css`
            position: relative;
            margin: 0 0.75rem;
            color: inherit;
            padding: ${buttonBlockPadding} ${buttonInlinePadding};
            border-radius: ${buttonBorderRadius};
            background: ${buttonBackgroundTrophyGold};
            font: ${buttonLabelQuincy18};
            text-decoration: none;

            @media (min-width: 48rem) {
              order: 1;
            }
          `}
          activeClassName="active"
          to="https://chrome.google.com/webstore/detail/tally-ho/eajafomhmkipbjmfmhebemolkcicgfmd"
        >
          Download
        </Link>
        <div
          className={css`
            flex-basis: 100%;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            gap: 2rem 0;

            @media (min-width: 48rem) {
              flex-basis: unset;
            }
          `}
        >
          <NavLink to="/">Wallet</NavLink>
          <NavLink to="/security">Security</NavLink>
          <NavLink to="/dao">DAO</NavLink>
          <NavLink blank to="https://tally-ho.upvoty.com/?__force">
            Roadmap
          </NavLink>
          <NavLink blank to="https://blog.tally.cash/">
            Blog
          </NavLink>
        </div>
      </div>
    </>
  );
}
