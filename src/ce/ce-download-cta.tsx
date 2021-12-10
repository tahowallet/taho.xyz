import { actionButtonClassName } from "layout/action-button";
import { mediumScreenQuery } from "layout/layout";
import { css, cx } from "linaria";
import React from "react";

const buttonClassName = css`
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;

const iconClassName = css`
  margin: -0.5rem;
  margin-right: 1rem;
`;

export function CommunityEditionDonwloadCTA() {
  return (
    <div
      className={css`
        display: flex;
        margin: 0 auto;
        padding: 0.5rem;
        flex-flow: column;

        ${mediumScreenQuery} {
          flex-flow: row;
        }
      `}
    >
      <a className={cx(actionButtonClassName, buttonClassName)} href="#TODO">
        <img
          className={iconClassName}
          src={require("../ce/icon-browser-chrome.svg")}
        />
        Download for Chrome
      </a>{" "}
      <a className={cx(actionButtonClassName, buttonClassName)} href="#TODO">
        <img
          className={iconClassName}
          src={require("../ce/icon-browser-firefox.svg")}
        />
        Download for Firefox
      </a>
    </div>
  );
}
