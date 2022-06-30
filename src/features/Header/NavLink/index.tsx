import { Link } from "gatsby";
import { css } from "linaria";
import React, { ReactNode } from "react";
import { borderDarkTrophyGold, linkDarkTrophyGold } from "shared/styles/colors";
import { segmentFontFamily } from "shared/styles/font-families";

export function NavLink({
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

        &:hover {
          color: ${linkDarkTrophyGold};
        }

        &.active {
          color: ${linkDarkTrophyGold};

          &::after {
            width: 0.5rem;
            opacity: 1;
          }
        }
      `}
      activeClassName="active"
      to={to}
      target={blank ? `_blank` : ``}
    >
      {children}
      {blank ? ` ↗︎︎︎` : null}
    </Link>
  );
}
