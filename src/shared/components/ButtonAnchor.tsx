import React, { MouseEventHandler, ReactNode } from "react";
import { css } from "linaria";
import { quincyBoldFontFamily } from "shared/styles/font-families";

type ButtonAnchorProps = {
  children: ReactNode;
  href: string;
  squared?: boolean;
  target?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export default function ButtonAnchor({
  children,
  href,
  target = "_blank",
  onClick,
  squared = false
}: ButtonAnchorProps) {
  const buttonCls = css`
  
  display: flex;
  background: #ed9a26;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  gap: 8px;
  transition: all 100ms;
  &.normal {
    font-style: normal;
    letter-spacing: 0.5px;
    box-sizing: border-box;
    white-space: nowrap;
    font-family: ${quincyBoldFontFamily};
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    padding: 12px 28px;
    border-radius: 28px;
    height: 48px;
    color: #0d2321;
    box-shadow: 0px 7px 5px 0px rgba(13, 35, 33, 0.5),
      0px 18px 20px 0px rgba(13, 35, 33, 0.5),
      0px 4px 6px 0px rgba(232, 150, 34, 0.4),
      0px 4px 4px 0px rgba(13, 35, 33, 0.45);
  }

  &.squared{
    border-radius: 11px;
    font-family: "Segment-Semibold";
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 3%;
    text-align: center;
    padding: 0.875rem 1.18rem;
  }

  &:hover {
    background: #ffb143;
  }
`

  return (
    <a
      href={href}
      target={target}
      className={`${buttonCls} ${squared ? "squared" : "normal"}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
