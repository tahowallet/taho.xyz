import { headerClassName } from "common/header";
import { Link } from "gatsby";
import { textGreen40, trophyGold } from "layout/colors";
import { segmentFontFamily } from "layout/fonts";
import { css, cx } from "linaria";
import React, { ReactNode } from "react";

export function NavLinks() {
  return (
    <>
      <NavLink to="/community-edition">Community Edition</NavLink>
      <NavLink blank to="https://gov.tally.cash/">
        Governance
      </NavLink>
      <NavLink blank to="https://docs.tally.cash/">
        Docs
      </NavLink>
      <NavLink blank to="https://blog.tally.cash/">
        Blog
      </NavLink>
      <span
        className={css`
          margin: 0 0.75rem;
          font-size: 20px;
          font-weight: bold;
          vertical-align: middle;
          color: ${trophyGold};
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
      />
    </>
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

        &:hover {
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
    >
      {children}
    </Link>
  );
}

const socialLinkClassName = css`
  display: inline-block;
  position: relative;
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
