import { css } from "@linaria/core";
import React, { ReactNode } from "react";
import { bodyDarkGreen60, bodyDarkGreen80 } from "shared/styles/colors";
import { bodyNormalSegment24, bodySmallSegment18 } from "shared/styles/fonts";

export function AfterSignStep({
  title,
  subTitle,
  children,
}: {
  title: ReactNode;
  subTitle: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 2rem;
        text-align: center;
        max-width: 20rem;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-flow: column;
          gap: 0.5rem;
          align-items: center;
          min-height: 6rem;
        `}
      >
        <h4
          className={css`
            font: ${bodyNormalSegment24};
            color: ${bodyDarkGreen80};
          `}
        >
          {title}
        </h4>
        <p
          className={css`
            font: ${bodySmallSegment18};
            color: ${bodyDarkGreen60};
            text-align: center;
          `}
        >
          {subTitle}
        </p>
      </div>
      {children}
    </div>
  );
}
