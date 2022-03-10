import { Link } from "gatsby";
import { actionButtonClassName } from "layout/action-button";
import { green120, textGreen20, textGreen60, textLight } from "layout/colors";
import { quincyRegularFontFamily, segmentFontFamily } from "layout/fonts";
import { mediumScreenQuery } from "layout/layout";
import { css } from "linaria";
import React, { ReactNode } from "react";

export function CommunityEditionGetInvolved() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        padding: 4rem 0;
        margin-bottom: -30vw;
      `}
    >
      <h3
        className={css`
          font-family: ${quincyRegularFontFamily};
          font-size: clamp(18px, 6vw, 36px);
          font-weight: normal;
          color: ${textLight};
          text-align: center;
        `}
      >
        Let’s Build Tally Ho Together
      </h3>
      <div
        className={css`
          display: grid;
          gap: 2rem;
          width: 100%;
          max-width: 60rem;
          margin: 0 auto;
          padding: 2rem;

          ${mediumScreenQuery} {
            grid: auto-flow / 1fr 1fr;
          }
        `}
      >
        <Item
          icon={
            <img
              className={css`
                height: 2rem;
              `}
              src={require("../ce/icon-github.svg")}
            />
          }
          title={<>For Developers</>}
          body={
            <>
              Want to contribute? Tally Ho is 100% open source under GPL v3. Let’s
              build the next great wallet together.
            </>
          }
          cta={
            <Link
              className={actionButtonClassName}
              target="_blank"
              to="https://github.com/tallycash"
            >
              Go to GitHub
            </Link>
          }
        />
        <Item
          icon={
            <img
              className={css`
                height: 1.5rem;
              `}
              src={require("../ce/icon-discord.svg")}
            />
          }
          title={<>Join the Pack</>}
          body={
            <>
              Once you’ve tried the Community Edition, join Discord and let us
              know what we should add next!
            </>
          }
          cta={
            <Link
              className={actionButtonClassName}
              target="_blank"
              to="https://chat.tally.cash"
            >
              Join Discord
            </Link>
          }
        />
      </div>
    </div>
  );
}

function Item({
  icon,
  body,
  cta,
  title,
}: {
  icon: ReactNode;
  title: ReactNode;
  body: ReactNode;
  cta: ReactNode;
}) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 1rem;
        border: 1px solid ${textGreen60};
        border-radius: 16px;
        background: ${green120};
      `}
    >
      <h4
        className={css`
          display: flex;
          flex-flow: row;
          align-items: center;
          margin: 1rem;
          font-family: ${quincyRegularFontFamily};
          font-size: clamp(18px, 6vw, 36px);
          font-weight: normal;
          color: ${textLight};
        `}
      >
        <div
          className={css`
            display: flex;
            margin-right: 1rem;
          `}
        >
          {icon}
        </div>
        <span>{title}</span>
      </h4>
      <p
        className={css`
          max-width: 20rem;
          margin: 1rem;
          font-family: ${segmentFontFamily};
          font-size: 18px;
          color: ${textGreen20};
        `}
      >
        {body}
      </p>
      <div
        className={css`
          margin: 1rem;
        `}
      >
        {cta}
      </div>
    </div>
  );
}
