import { css } from "linaria";
import React, { ReactNode } from "react";
import {
  bodyDarkGrey80,
  buttonBackgroundSemanticSuccess,
} from "shared/styles/colors";
import { bodyNormalSegment24, buttonLabelQuincy18 } from "shared/styles/fonts";
import {
  pillBlockPadding,
  pillBorderRadius,
  pillInlinePadding,
  sectionWideWidth,
  sectionNarrowWidth,
  sectionInlinePadding,
} from "shared/styles/lengths";

const chromeDownloadHref =
  "https://chrome.google.com/webstore/detail/tally/eajafomhmkipbjmfmhebemolkcicgfmd";
const firefoxDownloadHref = "/tally_ho_pre_release_channel-0.13.1-fx.xpi";

export function DownloadCta() {
  return (
    <div
      className={css`
        padding: 3rem 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        max-width: ${sectionNarrowWidth};
        margin: 0 auto;
        padding: 0 ${sectionInlinePadding};
      `}
    >
      <Option
        name="Chrome"
        logoSrc={require("@browser-logos/chrome/chrome.svg")}
        href={chromeDownloadHref}
      />
      {/* <Option
        name="Firefox"
        logoSrc={require("@browser-logos/firefox/firefox.svg")}
        href={firefoxDownloadHref}
      /> */}
      <Option
        name="Brave"
        logoSrc={require("@browser-logos/brave/brave.svg")}
        href={chromeDownloadHref}
      />
    </div>
  );
}

function Option({
  name,
  logoSrc,
  href,
}: {
  name: ReactNode;
  logoSrc: string;
  href: string;
}) {
  return (
    <a
      className={css`
        font: ${buttonLabelQuincy18};
        text-align: center;
        padding: 2rem;
      `}
      target="_blank"
      href={href}
    >
      <img
        className={css`
          width: 5rem;
          height: 5rem;
        `}
        width="80"
        height="80"
        src={logoSrc}
      />
      <div
        className={css`
          padding: ${pillBlockPadding} ${pillInlinePadding};
          border-radius: ${pillBorderRadius};
          font: ${bodyNormalSegment24};
          color: ${bodyDarkGrey80};

          *:hover > & {
            background-color: ${buttonBackgroundSemanticSuccess};
          }
        `}
      >
        {name}
      </div>
    </a>
  );
}
