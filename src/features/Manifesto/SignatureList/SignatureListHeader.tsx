import { SignatureListSlice } from "features/Manifesto/api";
import { css } from "linaria";
import React from "react";
import {
  bodyDarkGreen120,
  bodyDarkGreen40,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodySmallSegment18,
  h3Quincy36,
  showcaseQuincyBold48,
} from "shared/styles/fonts";

export function SignatureListHeader({ data }: { data: SignatureListSlice }) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <h3
        className={css`
          font: ${h3Quincy36};
          color: ${titleDarkHunterGreen};
        `}
      >
        Signed by:
      </h3>
      <div
        className={css`
          display: flex;
          flex-flow: column;
          align-items: flex-end;
        `}
      >
        <span
          className={css`
            font: ${showcaseQuincyBold48};
            color: ${bodyDarkGreen120};
          `}
        >
          {data.totalCount}
        </span>
        <span
          className={css`
            font: ${bodySmallSegment18};
            color: ${bodyDarkGreen40};
          `}
        >
          Signatures
        </span>
      </div>
    </div>
  );
}
