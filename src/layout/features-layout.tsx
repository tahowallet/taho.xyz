import { css, cx } from "linaria";
import React, { ReactNode } from "react";
import { green120, green80, trophyGold40 } from "./colors";
import { quincyTextFontFamily } from "./fonts";
import { largeScreenQuery, mediumScreenQuery } from "./layout";

export const featureGridClassName = css`
  display: grid;
  grid: auto-flow / auto;
  gap: 2rem;
  margin: 1rem auto;

  ${largeScreenQuery} {
    padding: 4rem;
    grid: repeat(4, 1fr) / 30rem 28rem;
  }
`;

export const featureItemClassName = css`
  background: ${green120};
  border: 1px solid ${green80};
  border-radius: 1rem;
`;

export const mainFeatureClassName = cx(
  featureItemClassName,
  css`
    display: flex;
    flex-flow: column;
    padding: 1rem;

    ${mediumScreenQuery} {
      grid-area: 1 / 1 / 2 / 3;
    }

    ${largeScreenQuery} {
      grid-area: 1 / 1 / 5 / 2;
    }
  `
);

export function FeatureItem({
  iconSrc,
  body,
}: {
  iconSrc: string;
  body: ReactNode;
}) {
  return (
    <div
      className={cx(
        featureItemClassName,
        css`
          padding: 0.5rem;
        `
      )}
    >
      <img
        className={css`
          float: left;
          margin: -1rem 1rem -0.25rem 0;
        `}
        src={iconSrc}
      />
      <p
        className={css`
          flex: 1;
          margin: 1rem;
          font-family: ${quincyTextFontFamily};
          font-size: 24px;
          color: ${trophyGold40};
          text-align: right;
        `}
      >
        {body}
      </p>
    </div>
  );
}
