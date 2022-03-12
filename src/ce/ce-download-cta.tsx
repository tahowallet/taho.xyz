import { actionButtonClassName } from "layout/action-button";
import { mediumScreenQuery } from "layout/layout";
import { css, cx } from "linaria";
import React, { ReactNode } from "react";

export function CommunityEditionDonwloadCTA({
  downloadButtons,
}: {
  downloadButtons: ReactNode;
}) {
  return (
    <div
      className={css`
        display: flex;
        margin: 1rem auto;
        padding: 0.5rem;
        flex-flow: column;

        ${mediumScreenQuery} {
          flex-flow: row;
        }
      `}
    >
      {downloadButtons}
    </div>
  );
}

export function CommunityEditionDownloadButton({
  href,
  imageSrc,
  text,
}: {
  href: string;
  imageSrc: string;
  text: ReactNode;
}) {
  return (
    <a
      className={cx(actionButtonClassName, buttonClassName)}
      href={href}
      target="_blank"
    >
      <img className={iconClassName} src={imageSrc} />
      {text}
    </a>
  );
}

export const ceDownloadButtons: Record<
  "chrome" | "brave",// | "firefox",
  ReactNode
> = {
  brave: (
    <CommunityEditionDownloadButton
      href="https://chrome.google.com/webstore/detail/tally/eajafomhmkipbjmfmhebemolkcicgfmd"
      text={<>Download for Brave</>}
      imageSrc={require("../ce/icon-browser-brave.svg")}
    />
  ),
  chrome: (
    <CommunityEditionDownloadButton
      href="https://chrome.google.com/webstore/detail/tally/eajafomhmkipbjmfmhebemolkcicgfmd"
      text={<>Download for Chrome</>}
      imageSrc={require("../ce/icon-browser-chrome.svg")}
    />
  ),
  // firefox: (
  //   <CommunityEditionDownloadButton
  //     href="https://addons.mozilla.org/en-US/firefox/addon/tally/"
  //     text={<>Download for Firefox</>}
  //     imageSrc={require("../ce/icon-browser-firefox.svg")}
  //   />
  // ),
};

const buttonClassName = css`
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;

const iconClassName = css`
  margin: -0.5rem;
  margin-right: 1rem;
`;
