import { Link } from "gatsby";
import { actionButtonClassName } from "layout/action-button";
import {
  green120,
  textGreen20,
  textGreen40,
  textGreen60,
  textLight,
  trophyGold,
} from "layout/colors";
import {
  quincyRegularFontFamily,
  quincyTextFontFamily,
  segmentFontFamily,
} from "layout/fonts";
import { mediumScreenQuery } from "layout/layout";
import { css, cx } from "linaria";
import React, { ReactNode } from "react";

export function NewsSection() {
  return (
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
          display: grid;
          gap: 1rem;
          padding: 0 2rem;

          ${mediumScreenQuery} {
            grid: auto-flow / 1fr 1fr;
          }
        `}
      >
        <NewsItem
          to="https://blog.tally.cash/tally-call-for-delegates/"
          title={<>Call for Delegates for the Tally DAO</>}
          date={<>December 26, 2021</>}
          body={<>Tally is now accepting applications for DAO delegates.</>}
          main
        />
        <NewsItem
          to="https://blog.tally.cash/all-rights-reversed-tally-is-now-open-source/"
          title={<>Open Source Announcement</>}
          date={<>December 26, 2021</>}
          body={<>Tally is open source under GNU General Public License v3.</>}
        />
        <NewsItem
          to="#TODO"
          title={<>How to Migrate to Tally</>}
          date={<>December 26, 2021</>}
          body={<>Migrate from MetaMask in 3 easy steps.</>}
        />
        <form
          className={css`
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            min-height: 12rem;
            padding: 1.5rem;
            border: 1px solid #33514e;
            border-radius: 1rem;

            ${mediumScreenQuery} {
              grid-column: 1 / 3;
            }
          `}
          action="https://cash.us6.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="983d6d90b75437835165c3937" />
          <input type="hidden" name="id" value="cbe670acb1" />

          <div
            className={css`
              margin: 0.5rem;
              font-family: ${segmentFontFamily};
              font-size: 18px;
              color: ${textGreen40};
            `}
          >
            Get DAO News &amp; Updates
          </div>
          <input
            className={css`
              margin: 0.5rem;
              background: #33514e;
              width: 100%;
              max-width: 32rem;
              padding: 0.5rem 1.5rem;
              border: 1px solid #667c7a;
              border-radius: 0.5rem;
              outline: none;
              font-family: ${quincyTextFontFamily};
              font-size: 24px;
              color: ${textLight};

              &::placeholder {
                color: ${textLight};
              }
            `}
            name="MERGE0"
            id="MERGE0"
            required
            placeholder="your@email.com"
            type="email"
          />
          <button
            className={cx(
              actionButtonClassName,
              css`
                margin: 0.5rem;
              `
            )}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function NewsItem({
  to,
  body,
  date,
  title,
  main,
}: {
  to: string;
  title: ReactNode;
  date: ReactNode;
  body: ReactNode;
  main?: boolean;
}) {
  return (
    <Link
      className={cx(
        main && "main",
        css`
          display: flex;
          flex-flow: column;
          min-height: 12rem;
          border: 1px solid #193330;
          border-radius: 1rem;
          padding: 1rem;
          background: ${green120};
          box-shadow: 0px 16px 16px rgba(0, 20, 19, 0.04),
            0px 6px 8px rgba(0, 20, 19, 0.14), 0px 2px 4px rgba(0, 20, 19, 0.24);
          text-decoration: none;

          ${mediumScreenQuery} {
            &.main {
              grid-column: 1 / 3;
            }
          }

          &:hover {
            border: 1px solid ${trophyGold};
            background: linear-gradient(
                180deg,
                rgba(51, 81, 78, 0.2) 13.79%,
                rgba(0, 37, 34, 0.2) 100%
              ),
              ${green120};
          }
        `
      )}
      target="_blank"
      to={to}
    >
      <h3
        className={css`
          margin: 1rem;
          font-family: ${quincyRegularFontFamily};
          font-size: clamp(18px, 6vw, 36px);
          font-weight: normal;
          color: ${textLight};
        `}
      >
        {title}
      </h3>
      <div
        className={css`
          margin: -1rem 1rem;
          color: ${textGreen40};
          font-family: ${segmentFontFamily};
          font-size: 12px;
          line-height: 26px;
        `}
      >
        {date}
      </div>
      <div
        className={css`
          display: flex;
          flex: 1;
          flex-flow: row;
          align-items: flex-end;
          font-family: ${segmentFontFamily};
          font-size: 14px;
          color: ${textGreen20};
        `}
      >
        <div
          className={css`
            flex: 1;
            margin: 1rem;
          `}
        >
          {body}
        </div>
        <div
          className={css`
            margin: 1rem;
            font-family: ${quincyTextFontFamily};
            font-size: 18px;
            color: ${textGreen60};

            *:hover > * > & {
              color: ${trophyGold};
            }

            &::after {
              content: "";
              display: inline-block;
              height: 1rem;
              width: 1rem;
              position: relative;
              background: no-repeat center / cover
                url(${require("../common/arrow-hover.svg")});
              vertical-align: middle;
            }
          `}
        >
          <span
            className={css`
              display: none;

              ${mediumScreenQuery} {
                display: unset;
                margin-right: 0.5rem;
              }
            `}
          >
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
}
