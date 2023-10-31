import React, { ReactNode } from "react";
import { css } from "linaria";
import { quincyBoldFontFamily } from "shared/styles/font-families";

export default function ButtonAnchor({ children }: { children: ReactNode }) {
  return (
    <a
      type="button"
      className={css`
        display: flex;
        width: fit-content;
        align-items: center;
        justify-content: center;
        border: 0;
        cursor: pointer;
        font-style: normal;
        letter-spacing: 0.5px;
        box-sizing: border-box;
        transition: all 50ms;
        gap: 8px;
        white-space: nowrap;
        font-family: ${quincyBoldFontFamily};
        font-size: 20px;
        font-weight: 800;
        line-height: 24px;
        padding: 12px 28px;
        border-radius: 28px;
        height: 48px;
        color: #0d2321;
        background: linear-gradient(180deg, #ed9a26 0%, #dc8a17 100%);
        box-shadow: 0px 7px 5px 0px rgba(13, 35, 33, 0.5),
          0px 18px 20px 0px rgba(13, 35, 33, 0.5),
          0px 4px 6px 0px rgba(232, 150, 34, 0.4),
          0px 4px 4px 0px rgba(13, 35, 33, 0.45);

        &:hover {
          background: linear-gradient(180deg, #ffbb5b 0%, #ffb143 100%);
        }
      `}
    >
      {children}
    </a>
  );
}
