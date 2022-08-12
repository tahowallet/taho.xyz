import { css } from "linaria";
import React, { ReactNode } from "react";
import { bodyDarkGreen60 } from "shared/styles/colors";
import { bodySmallSegment18 } from "shared/styles/fonts";
import { sectionBodyWideWidth } from "shared/styles/lengths";

export function Support({ children }: { children: ReactNode }) {
  return (
    <p
      className={css`
        max-width: ${sectionBodyWideWidth};
        margin: 2rem auto;
        font: ${bodySmallSegment18};
        color: ${bodyDarkGreen60};
        text-align: center;
      `}
    >
      {children}
    </p>
  );
}
