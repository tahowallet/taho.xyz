import { css } from "linaria";
import React, { ReactNode } from "react";
import { bodyDarkGreen60 } from "shared/styles/colors";
import { bodySmallSegment18 } from "shared/styles/fonts";

export function Message({ children }: { children: ReactNode; }) {
  return (
    <span
      className={css`
        font: ${bodySmallSegment18};
        color: ${bodyDarkGreen60};
        text-align: center;
      `}
    >
      {children}
    </span>
  );
}
