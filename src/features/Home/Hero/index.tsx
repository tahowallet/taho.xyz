import { Link } from "gatsby";
import { css } from "linaria";
import React from "react";
import {
  bodyDarkGrey80,
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
  sectionBackgroundGold20,
} from "shared/styles/colors";
import {
  bodyNormalSegment24,
  buttonLabelQuincy18,
  labelLetterSpacing,
  titleQuincy80,
} from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
  sectionInlinePadding,
  sectionWideWidth,
  subtitleBlockMargin,
} from "shared/styles/lengths";
import { buttonShadow } from "shared/styles/shadows";

export function HomeProductHero() {
  return (
    <div
      className={css`
        max-width: ${sectionWideWidth};
        padding: 0 ${sectionInlinePadding};
        margin: 0 auto;
      `}
    >
      <div
        className={css`
          background: top 20px left 22px / auto no-repeat
              url("background-buttons.svg"),
            bottom / 100% auto no-repeat url("background-trees.svg"),
            bottom / cover url("background-sunburst.svg"),
            ${sectionBackgroundGold20};
          border-radius: 1rem;

          @media (min-width: 48rem) {
            background: top 20px left 22px / auto no-repeat
                url("background-buttons.svg"),
              bottom / 100% auto no-repeat url("background-trees.svg"),
              top right / auto 46rem no-repeat url("illo.png"),
              bottom / cover url("background-sunburst.svg"),
              ${sectionBackgroundGold20};
          }
        `}
      >
        <div
          className={css`
            padding: 7.5rem 5rem 10rem;
          `}
        >
          <h1
            className={css`
              font: ${titleQuincy80};
              margin: 0;
            `}
          >
            The wallet
            <br />
            web3 deserves.
          </h1>
          <p
            className={css`
              margin: ${subtitleBlockMargin} auto;
              font: ${bodyNormalSegment24};
              color: ${bodyDarkGrey80};
            `}
          >
            Tally Ho is the first wallet
            <br />
            owned by its users.
          </p>
          <Link
            className={css`
              display: inline-block;
              padding: ${buttonBlockPadding} ${buttonInlinePadding};
              border-radius: ${buttonBorderRadius};
              font: ${buttonLabelQuincy18};
              letter-spacing: ${labelLetterSpacing};
              box-shadow: ${buttonShadow};
              background: ${buttonBackgroundSemanticSuccess};
              color: ${buttonLabelHunterGreen};
              margin: 1rem 0;
            `}
            to="/https://chrome.google.com/webstore/detail/tally-ho/eajafomhmkipbjmfmhebemolkcicgfmd"
          >
            Download Now
          </Link>
        </div>
      </div>
    </div>
  );
}
