import { css } from "linaria";
import React, { ReactNode } from "react";
import { h3Quincy36 } from "shared/styles/fonts";
import { sectionBodyWideWidth } from "shared/styles/lengths";

export function Title({ children }: { children: ReactNode; }) {
  return (
    <h3
      className={css`
        max-width: ${sectionBodyWideWidth};
        margin: 2rem auto;
        font: ${h3Quincy36};
        color: #11a165;
        text-align: center;
      `}
    >
      {children}
    </h3>
  );
}
