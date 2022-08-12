import { css } from "linaria";
import React, { ReactNode } from "react";
import { titleDarkHunterGreen } from "shared/styles/colors";
import { h3Quincy36 } from "shared/styles/fonts";
import { sectionBodyWideWidth } from "shared/styles/lengths";

export function CTAText({ children }: { children: ReactNode; }) {
  return (
    <h3
      className={css`
        max-width: ${sectionBodyWideWidth};
        margin: 2rem auto;
        font: ${h3Quincy36};
        color: ${titleDarkHunterGreen};
        text-align: center;
      `}
    >
      {children}
    </h3>
  );
}
