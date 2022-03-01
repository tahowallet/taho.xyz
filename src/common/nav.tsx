import { headerClassName, mobileMenuClassName } from "common/header";
import { Link } from "gatsby";
import { textGreen40, trophyGold } from "layout/colors";
import { segmentFontFamily } from "layout/fonts";
import { css, cx } from "linaria";
import React, { ReactNode } from "react";

export function NavLinks({
  onNavigate = () => {},
}: {
  onNavigate?: () => void;
}) {
  return (
    <>
      <NavLink onNavigate={onNavigate} to="/community-edition">
        Community Edition
      </NavLink>
      <NavLink onNavigate={onNavigate} blank to="https://gov.tally.cash/">
        Governance
      </NavLink>
      <NavLink onNavigate={onNavigate} blank to="https://docs.tally.cash/">
        Docs
      </NavLink>
      <NavLink onNavigate={onNavigate} blank to="https://blog.tally.cash/">
        Blog
      </NavLink>
      <NavLink onNavigate={onNavigate} blank to="https://boards.greenhouse.io/tallywallet/">
        Jobs
      </NavLink>
      <span
        className={css`
          margin: 0 0.75rem;
          font-size: 22px;
          font-weight: bold;
          vertical-align: middle;
          color: ${trophyGold};

          .${mobileMenuClassName} & {
            display: none;
          }
        `}
      >
        |
      </span>
      <a
        href="https://chat.tally.cash"
        target="_blank"
        className={cx(
          socialLinkClassName,
          css`
            width: 24px;
            height: 24px;
            background: no-repeat center / contain
              url(${require("../common/social/discord.svg")});

            &:hover {
              background: no-repeat center / contain
                url(${require("../common/social/discord-hover.svg")});
            }

            &:active {
              background: no-repeat center / contain
                url(${require("../common/social/discord-click.svg")});
            }
          `
        )}
        onClick={onNavigate}
      />
      <a
        href="https://twitter.com/tallycash"
        target="_blank"
        className={cx(
          socialLinkClassName,
          css`
            width: 28px;
            height: 24px;
            background: no-repeat center / contain
              url(${require("../common/social/twitter.svg")});

            &:hover {
              background: no-repeat center / contain
                url(${require("../common/social/twitter-hover.svg")});
            }

            &:active {
              background: no-repeat center / contain
                url(${require("../common/social/twitter-click.svg")});
            }
          `
        )}
        onClick={onNavigate}
      />
      <a
        href="https://github.com/tallycash"
        target="_blank"
        className={cx(
          socialLinkClassName,
          css`
            width: 28px;
            height: 28px;
            background: no-repeat center / contain
              url(${require("../common/social/github.svg")});

            &:hover {
              background: no-repeat center / contain
                url(${require("../common/social/github-hover.svg")});
            }

            &:active {
              background: no-repeat center / contain
                url(${require("../common/social/github-click.svg")});
            }
          `
        )}
        onClick={onNavigate}
      />
    </>
  );
}

function NavLink({
  children,
  to,
  blank,
  onNavigate,
}: {
  children: ReactNode;
  to: string;
  blank?: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      className={css`
        position: relative;
        margin: 0 0.75rem;
        color: ${textGreen40};
        font-family: ${segmentFontFamily};
        font-size: 16px;
        text-decoration: none;

        &::after {
          content: "";
          position: absolute;
          bottom: -1rem;
          left: 0;
          right: 0;
          margin: 0 auto;
          border: 2px solid ${trophyGold};
          border-radius: 2px;
          width: 0;
          opacity: 0;
          transition-property: width, opacity;
          transition-duration: 200ms;
        }

        .${headerClassName} &:hover {
          &::after {
            width: 1px;
            opacity: 1;
          }
        }

        .${headerClassName} &.active {
          color: ${trophyGold};

          &::after {
            width: 2rem;
            opacity: 1;
          }
        }
      `}
      activeClassName="active"
      to={to}
      target={blank ? `_blank` : ``}
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}

const socialLinkClassName = css`
  display: block;
  position: relative;
  flex: 0 0 auto;
  margin: 0 1rem;
  background-repeat: no-repeat;

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
      background: no-repeat center / contain
        url(${require("../common/arrow-hover.svg")});
    }
  }

  &:active {
    &::before {
      background: no-repeat center / contain
        url(${require("../common/arrow-click.svg")});
    }
  }
`;
