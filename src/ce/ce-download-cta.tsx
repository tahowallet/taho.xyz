import { actionButtonClassName } from "layout/action-button";
import { mediumScreenQuery } from "layout/layout";
import { css, cx } from "linaria";
import React, { useEffect, useState } from "react";

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
  const [isBrave, setIsBrave] = useState(false);

  useEffect(() => {
    // https://github.com/brave/brave-browser/issues/10165
    (navigator as any)?.brave?.isBrave().then(setIsBrave);
  });

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
      {isBrave ? (
        <a
          className={cx(actionButtonClassName, buttonClassName)}
          href="#TODO"
          target="_blank"
        >
          <img
            className={iconClassName}
            src={require("../ce/icon-browser-brave.svg")}
          />
          Download for Brave
        </a>
      ) : (
        <a
          className={cx(actionButtonClassName, buttonClassName)}
          href="https://chrome.google.com/webstore/detail/tally/eajafomhmkipbjmfmhebemolkcicgfmd"
          target="_blank"
        >
          <img
            className={iconClassName}
            src={require("../ce/icon-browser-chrome.svg")}
          />
          Download for Chrome
        </a>
      )}{" "}
      <a
        className={cx(actionButtonClassName, buttonClassName)}
        href="#TODO"
        target="_blank"
      >
        <img
          className={iconClassName}
          src={require("../ce/icon-browser-firefox.svg")}
        />
        Download for Firefox
      </a>
    </div>
  );
}
