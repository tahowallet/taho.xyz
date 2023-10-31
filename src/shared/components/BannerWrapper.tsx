import { css } from "linaria";
import React, { ReactNode, CSSProperties } from "react";
import { sectionInlinePadding, sectionWideWidth } from "shared/styles/lengths";

type BannerWrapperProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export default function BannerWrapper({ children, style }: BannerWrapperProps) {
  return (
    <div
      className={css`
        max-width: ${sectionWideWidth};
        padding: 0 ${sectionInlinePadding};
        margin: 0 auto;
      `}
      style={style}
    >
      {children}
    </div>
  );
}
