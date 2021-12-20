import {
  hunterGreen,
  trophyGold,
  trophyGold120,
  trophyGold40,
} from "layout/colors";
import { quincyTextFontFamily } from "layout/fonts";
import { mediumScreenQuery } from "layout/layout";
import { css } from "linaria";

export const actionButtonClassName = css`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2rem;
  background-color: ${trophyGold};
  font-family: ${quincyTextFontFamily};
  color: ${hunterGreen};
  text-decoration: none;

  &:hover {
    background-color: ${trophyGold120};
    cursor: pointer;
  }

  &:active {
    background-color: ${trophyGold40};
  }

  ${mediumScreenQuery} {
    padding: 0.75rem 1.5rem;
  }
`;
