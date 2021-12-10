import { textLight } from "layout/colors";
import { quincyRegularFontFamily } from "layout/fonts";
import { mediumScreenQuery } from "layout/layout";
import { css } from "linaria";
import React from "react";

export function Headline() {
  return (
    <h1
      className={css`
        padding: 0 2rem;
        font-family: ${quincyRegularFontFamily};
        font-size: min(64px, 8vw);
        font-weight: normal;
        line-height: 110%;
        text-align: center;
        color: ${textLight};

        ${mediumScreenQuery} {
          margin: 4rem 0;
        }
      `}
    >
      The first wallet owned
      <br />
      by its users.
    </h1>
  );
}
