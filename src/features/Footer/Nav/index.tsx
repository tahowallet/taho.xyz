import { Link } from "gatsby";
import { css } from "linaria";
import React, { CSSProperties, ReactNode } from "react";
import {
  borderDarkTrophyGold,
  titleDarkHunterGreen
} from "shared/styles/colors";
import {
  segmentFontFamily,
} from "shared/styles/font-families";

export function FooterNav() {
  return (
    <div
      className={css`
        @media (min-width: 1024px) {
          text-align: center;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        
        text-align: center;
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        margin: 2rem;
      `}
    >
      <Link to="/">
        <img width="168" height="127" src={require("./logo.svg")} 
        />
      </Link>
      <div
        className={css`
          display: flex;
          flex-flow: row wrap;
          gap: 2rem 0;
          align-items: center;
          justify-content: center;
          margin: 2rem 2rem 2rem 0;
          color: ${titleDarkHunterGreen};
        `}
      >
        <NavLink to="/security">Security</NavLink>
        <NavLink to="/dao">DAO</NavLink>
        <NavLink to="https://chrome.google.com/webstore/detail/taho/eajafomhmkipbjmfmhebemolkcicgfmd">Download</NavLink>
        <NavLink blank to="https://gov.tallyho.org/">
          Governance
        </NavLink>
        <NavLink blank to="https://tahowallet.notion.site/Tally-Ho-Knowledge-Base-4d95ed5439c64d6db3d3d27abf1fdae5">
          FAQ
        </NavLink>
        <NavLink blank to="https://blog.taho.xyz/">
          Blog
        </NavLink>
        <NavLink blank to="https://boards.greenhouse.io/tallywallet/">
          Jobs
        </NavLink>
        <SocialLink
          href="https://chat.taho.org"
          icon={{
            width: `24px`,
            height: `24px`,
            src: `url(${require("./social-icons/discord.svg")})`,
            hoverSrc: `url(${require("./social-icons/discord-hover.svg")})`,
            activeSrc: `url(${require("./social-icons/discord-click.svg")})`,
          }}
        />
        <SocialLink
          href="https://twitter.com/taho_xyz"
          icon={{
            width: `28px`,
            height: `24px`,
            src: `url(${require("./social-icons/twitter.svg")})`,
            hoverSrc: `url(${require("./social-icons/twitter-hover.svg")})`,
            activeSrc: `url(${require("./social-icons/twitter-click.svg")})`,
          }}
        />
        <SocialLink
          href="https://github.com/tallyhowallet/extension"
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
