import { css } from "linaria";
import React, { ReactNode } from "react";
import { bodyDarkGreen60 } from "shared/styles/colors";
import { bodySmallSegment18, h3Quincy36 } from "shared/styles/fonts";
import {
  sectionBodyWideWidth,
  sectionInlinePadding,
} from "shared/styles/lengths";

export function ManifestoPanelLayout({
  icon,
  topRight,
  title,
  support,
  children,
}: {
  icon: ReactNode;
  topRight?: ReactNode;
  title: ReactNode;
  support?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        position: relative;
        background: top -4rem center / 14rem auto no-repeat url(./bg.svg);
        padding: 6.75rem ${sectionInlinePadding} 0;
        min-height: 38rem;
      `}
    >
      {icon && (
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 2rem;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 2rem;
            height: 2rem;
          `}
        >
          {icon}
        </div>
      )}
      {topRight && (
        <div
          className={css`
            position: absolute;
            top: 2rem;
            right: 2rem;
          `}
        >
          {topRight}
        </div>
      )}
      <div
        className={css`
          display: flex;
          flex-flow: column;
          align-items: center;
          gap: 0.5rem;
          text-align: center;
        `}
      >
        <h3
          className={css`
            font: ${h3Quincy36};
            color: #11a165;
            max-width: ${sectionBodyWideWidth};
          `}
        >
          {title}
        </h3>
        {support && (
          <p
            className={css`
              font: ${bodySmallSegment18};
              color: ${bodyDarkGreen60};
              max-width: 24rem;
            `}
          >
            {support}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
