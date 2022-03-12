import { Link } from "gatsby";
import { actionButtonClassName } from "layout/action-button";
import { semanticSuccess, textLight, trophyGold } from "layout/colors";
import { quincyRegularFontFamily, segmentFontFamily } from "layout/fonts";
import { largeScreenQuery, mediumScreenQuery } from "layout/layout";
import { css, cx } from "linaria";
import React from "react";

export function Banner() {
  return (
    <div
      className={css`
        /* Banner */
        display: flex;
        flex-flow: row;
        width: calc(100% - 4rem);
        max-width: 70rem;
        margin: 0 auto;
        border-radius: 2rem;
        border: 1px solid ${trophyGold};
        background: no-repeat left -16rem center / 40rem auto url(${require("../home/banner-background.svg")});

        ${mediumScreenQuery} {
          width: calc(100% - 12rem);
          margin: 2rem auto;
          background: no-repeat left -22rem center / 60rem auto url(${require("../home/banner-background.svg")});
        }

        ${largeScreenQuery} {
          margin: 4rem auto;
          background: no-repeat left -15rem center / 60rem auto url(${require("../home/banner-background.svg")});
        }
      `}
    >
      <div
        className={css`
          display: none;
          position: absolute;
          margin: 1.5rem;
          padding: 0.3125rem 1.125rem;
          margin-right: auto;
          border: 1px solid ${semanticSuccess};
          border-radius: 2rem;
          color: ${semanticSuccess};
          font-family: ${segmentFontFamily};
          font-size: 14px;

          ${largeScreenQuery} {
            display: unset;
          }
        `}
      >
        Available Now
      </div>
      <img
        width="198"
        height="195"
        className={css`
          flex: 0;
          align-self: center;
          margin: 0 -4rem -1rem 0.25rem;
          object-fit: contain;
          height: 8rem;

          ${mediumScreenQuery} {
            margin: 2rem 2rem 0;
            height: unset;
          }

          ${largeScreenQuery} {
            margin: 2rem 5rem 0 9.5rem;
          }
        `}
        src={require("../home/banner-chip.svg")}
      />
      <div
        className={css`
          display: flex;
          flex: 1;
          flex-flow: column;
          text-align: right;
          align-items: flex-end;
          padding: 0.5rem 2rem;

          ${mediumScreenQuery} {
            padding: 2rem;
            text-align: left;
            align-items: flex-start;
            justify-content: start;
          }
        `}
      >
        <h3
          className={css`
            margin: 0.5rem 0;
            font-family: ${quincyRegularFontFamily};
            font-size: clamp(18px, 5vw, 36px);
            line-height: 128%;
            font-weight: normal;
            color: ${textLight};
          `}
        >
          Tally Ho Community Edition is now live.
        </h3>
        <p
          className={css`
            display: none;
            margin: 0.5rem 0;
            font-size: 18px;
            line-height: 24px;
            font-family: ${segmentFontFamily};
            color: ${trophyGold};

            ${mediumScreenQuery} {
              display: unset;
            }
          `}
        >
          Be one of the first to experience Tally Ho.
          <br />
          Available for Chrome, Brave, and Firefox.
        </p>
        <Link
          className={cx(
            actionButtonClassName,
            css`
              margin: 0.5rem 0;
              text-align: center;

              ${mediumScreenQuery} {
                margin: 1rem 0;
              }
            `
          )}
          to="/community-edition"
        >
          Get early access
        </Link>
      </div>
    </div>
  );
}
