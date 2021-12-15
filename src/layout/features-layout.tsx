import { css, cx } from "linaria";
import React, { ReactNode } from "react";
import { green120, green80, trophyGold40 } from "./colors";
import { quincyTextFontFamily } from "./fonts";
import { largeScreenQuery, mediumScreenQuery } from "./layout";

export const featureGridClassName = css`
  display: grid;
  grid: auto-flow / auto;
  gap: 2rem;
  max-width: 60rem;
  margin: 1rem auto;

  ${largeScreenQuery} {
    max-width: unset;
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
