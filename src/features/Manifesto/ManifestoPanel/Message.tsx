import { css, cx } from "linaria";
import React, { ReactNode } from "react";
import { bodyDarkGreen60 } from "shared/styles/colors";
import { bodySmallSegment18 } from "shared/styles/fonts";

export function Message({
  children,
  isError = false,
}: {
  children: ReactNode;
  isError?: boolean;
}) {
  return (
    <span
      className={cx(
        css`
          font: ${bodySmallSegment18};
          text-align: center;
        `,
        isError
          ? css`
              color: #fe0466;
            `
          : css`
              color: ${bodyDarkGreen60};
            `
      )}
    >
      {children}
    </span>
  );
}
