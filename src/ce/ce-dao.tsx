import { actionButtonClassName } from "layout/action-button";
import { hunterGreen, textGreen40, textLight, trophyGold } from "layout/colors";
import { quincyRegularFontFamily, segmentFontFamily } from "layout/fonts";
import { largeScreenQuery } from "layout/layout";
import { css, cx } from "linaria";
import React from "react";

export function CommunityEditionDao() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        padding: 0 0 2rem;
        background: ${hunterGreen};

        ${largeScreenQuery} {
          background: no-repeat top -8rem center / 40rem auto url(${require("../ce/ce-dao-background-stars.svg")}),
            no-repeat linear-gradient(to bottom, #001413 0, #002522 35rem),
            ${hunterGreen};
        }
      `}
    >
      <div
        className={css`
          display: flex;
          flex-flow: column;
          margin: 0 auto;
          width: 100%;
          max-width: 60rem;
        `}
      >
        <div
          className={css`
            /* Header */
            display: flex;
            flex-flow: column;

            ${largeScreenQuery} {
              margin: 4rem 0;
            }
          `}
        >
          <div
            className={css`
              margin: 2rem auto;
              padding: 0.375rem 1.5rem;
              border: 1px solid ${trophyGold};
              border-radius: 2rem;
              color: ${trophyGold};
              font-family: ${segmentFontFamily};
              font-size: 14px;
            `}
          >
            Launching Soon
          </div>
          <h2
            className={css`
              margin: 0;
              font-family: ${quincyRegularFontFamily};
              font-weight: normal;
              font-size: clamp(32px, 10vw, 64px);
              color: ${textLight};
              text-align: center;
            `}
          >
            The Tally Ho DAO
          </h2>
        </div>
        <div
          className={css`
            /* Showcase */
            display: flex;
            flex-flow: column;
            align-items: center;
            margin: 0 auto;

            ${largeScreenQuery} {
              flex-flow: row;
              align-items: stretch;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-flow: column;
              align-items: center;
              max-width: 24rem;
              margin: 2rem;
              text-align: center;

              ${largeScreenQuery} {
                text-align: left;
                align-items: stretch;
              }
            `}
          >
            <h3
              className={css`
                margin: 0;
                font-family: ${quincyRegularFontFamily};
                font-size: clamp(20px, 8vw, 40px);
                font-weight: normal;
                color: ${trophyGold};
              `}
            >
              The first community
              <br />
              owned wallet
            </h3>
            <p
              className={css`
                font-family: ${segmentFontFamily};
                font-size: 18px;
                line-height: 26px;
                color: ${textGreen40};
              `}
            >
              Tally Ho! The first Web3 wallet that’s owned by its users, not a
              corporation. Join the pack on Discord before the Tally Ho DAO
              launches.
            </p>
            <img
              className={css`
                flex: 1;
                width: 100%;
                min-width: 0;
                max-width: 24rem;
                margin: 0 2rem;

                ${largeScreenQuery} {
                  display: none;
                }
              `}
              width="538"
              height="463"
              src={require("../ce/dao-showcase-small.svg")}
            />
            <a
              className={cx(
                actionButtonClassName,
                css`
                  margin-top: 2rem;
                  max-width: 16rem;
                  width: 100%;
                  text-align: center;
                `
              )}
              href="https://chat.tally.cash/"
            >
              Join the Tally Ho Discord
            </a>
          </div>
          <img
            className={css`
              display: none;
              flex: 1;
              width: 100%;
              min-width: 0;
              max-width: fit-content;
              margin: 2rem;

              ${largeScreenQuery} {
                display: unset;
                margin-right: -4rem;
              }
            `}
            width="538"
            height="463"
            src={require("../ce/dao-showcase.svg")}
          />
        </div>
      </div>
    </div>
  );
}
