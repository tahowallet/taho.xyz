import { getStats } from "features/Manifesto/api";
import { css } from "linaria";
import React from "react";
import { useQuery } from "react-query";
import {
  bodyDarkGreen120,
  bodyDarkGreen40,
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
  cardBackgroundOffWhite,
} from "shared/styles/colors";
import {
  bodySmallSegment18,
  buttonLabelQuincy18,
  showcaseQuincy72,
} from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
} from "shared/styles/lengths";
import { tileBoxShadow } from "shared/styles/shadows";

export function SigntureCount() {
  const { data, isLoading, error } = useQuery(
    ["stats"],
    async () => {
      const { data } = await getStats();
      return data;
    },
    { retry: false }
  );

  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        align-items: center;
        margin: -3rem -1rem;
        padding: 6rem 3rem 3rem;
        border-radius: 1.5rem;
        background: top -4rem center / 100% auto no-repeat url("./bg.svg"),
          ${cardBackgroundOffWhite};
        box-shadow: ${tileBoxShadow};
      `}
    >
      <span
        className={css`
          font: ${showcaseQuincy72};
          color: ${bodyDarkGreen120};
        `}
      >
        {data?.signatureCount ?? <>&nbsp;</>}
      </span>
      <span
        className={css`
          font: ${bodySmallSegment18};
          color: ${bodyDarkGreen40};
        `}
      >
        Users signed
      </span>
      <a
        href="#sign"
        className={css`
          background: ${buttonBackgroundSemanticSuccess};
          margin: auto 0 0;
          padding: ${buttonBlockPadding} ${buttonInlinePadding};
          border-radius: ${buttonBorderRadius};
          font: ${buttonLabelQuincy18};
          color: ${buttonLabelHunterGreen};
        `}
      >
        Sign pledge
      </a>
    </div>
  );
}
