import { mobileMenuClassName } from "features/Header";
import { Link } from "gatsby";
import { css } from "linaria";
import React, { CSSProperties, ReactNode } from "react";
import { green40 } from "shared/styles/color-palette";
import {
  bodyDarkGrey60,
  borderDarkTrophyGold,
  linkDarkTrophyGold,
} from "shared/styles/colors";
import {
  quincyRegularFontFamily,
  segmentFontFamily,
} from "shared/styles/font-families";

export function FooterNav() {
  return (
    <div
      className={css`
        text-align: center;
      `}
    >
      <Link to="/">
        <img width="168" height="127" src={require("./logo.svg")} />
        <div
          className={css`
            margin: 1rem 0;
            font: 400 24px ${quincyRegularFontFamily};
            letter-spacing: 0.2em;
            color: ${green40};
          `}
        >
          TALLY HO!
        </div>
      </Link>
      <div
        className={css`
          display: flex;
          flex-flow: row wrap;
          gap: 2rem 0;
          align-items: center;
          justify-content: center;
          margin: 2rem;
          color: ${bodyDarkGrey60};
        `}
      >
        <NavLink to="/security">Security</NavLink>
        <NavLink to="/dao">DAO</NavLink>
        <NavLink to="https://chrome.google.com/webstore/detail/tally-ho/eajafomhmkipbjmfmhebemolkcicgfmd">Download</NavLink>
        <NavLink blank to="https://gov.tally.cash/">
          Governance
        </NavLink>
        <NavLink blank to="https://docs.tally.cash/">
          Docs
        </NavLink>
        <NavLink blank to="https://blog.tally.cash/">
          Blog
        </NavLink>
        <NavLink blank to="https://boards.greenhouse.io/tallywallet/">
          Jobs
        </NavLink>
        <span
          className={css`
            margin: 0 0.75rem;
            font-size: 22px;
            font-weight: bold;
            vertical-align: middle;
            color: ${linkDarkTrophyGold};
          `}
        >
          |
        </span>
        <SocialLink
          href="https://chat.tally.cash"
          icon={{
            width: `24px`,
            height: `24px`,
            src: `url(${require("./social-icons/discord.svg")})`,
            hoverSrc: `url(${require("./social-icons/discord-hover.svg")})`,
            activeSrc: `url(${require("./social-icons/discord-click.svg")})`,
          }}
        />
        <SocialLink
          href="https://twitter.com/tallycash"
          icon={{
            width: `28px`,
            height: `24px`,
            src: `url(${require("./social-icons/twitter.svg")})`,
            hoverSrc: `url(${require("./social-icons/twitter-hover.svg")})`,
            activeSrc: `url(${require("./social-icons/twitter-click.svg")})`,
          }}
        />
        <SocialLink
          href="https://github.com/tallycash/extension"
          icon={{
            width: `28px`,
            height: `28px`,
            src: `url(${require("./social-icons/github.svg")})`,
            hoverSrc: `url(${require("./social-icons/github-hover.svg")})`,
            activeSrc: `url(${require("./social-icons/github-click.svg")})`,
          }}
        />
      </div>
    </div>
  );
}

function NavLink({
  children,
  to,
  blank,
}: {
  children: ReactNode;
  to: string;
  blank?: boolean;
}) {
  return (
    <Link
      className={css`
        position: relative;
        margin: 0 0.75rem;
        color: inherit;
        font: 400 16px ${segmentFontFamily};
        text-decoration: none;

        &::after {
          content: "";
          position: absolute;
          bottom: -0.75rem;
          left: 0;
          right: 0;
          margin: 0 auto;
          border: 1px solid ${borderDarkTrophyGold};
          border-radius: 2px;
          width: 0;
          opacity: 0;
          transition-property: width, opacity;
          transition-duration: 200ms;
        }
      `}
      activeClassName="active"
      to={to}
      target={blank ? `_blank` : ``}
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: {
    width: string;
    height: string;
    src: string;
    hoverSrc: string;
    activeSrc: string;
  };
}) {
  return (
    <a
      href={href}
      target="_blank"
      style={
        {
          "--icon-width": icon.width,
          "--icon-height": icon.height,
          "--icon-src": icon.src,
          "--icon-active-src": icon.activeSrc,
          "--icon-hover-src": icon.hoverSrc,
        } as CSSProperties
      }
      className={css`
        display: block;
        position: relative;
        flex: 0 0 auto;
        margin: 0 1rem;
        background-repeat: no-repeat;
        width: 28px;
        height: 28px;
        background: no-repeat center / contain var(--icon-src);

        &:hover {
          background: no-repeat center / contain var(--icon-hover-src);
        }

        &:active {
          background: no-repeat center / contain var(--icon-active-src);
        }

        &::before {
          content: "";
          width: 20px;
          height: 20px;
          position: absolute;
          top: -20px;
          right: -20px;
          background-repeat: no-repeat;
        }

        &:hover {
          &::before {
            background: no-repeat center / contain url("arrow-hover.svg");
          }
        }

        &:active {
          &::before {
            background: no-repeat center / contain url("arrow-click.svg");
          }
        }
      `}
    />
  );
}
