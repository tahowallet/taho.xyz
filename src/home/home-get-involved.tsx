import { Link } from "gatsby";
import { actionButtonClassName } from "layout/action-button";
import { green120, textLight } from "layout/colors";
import { quincyRegularFontFamily } from "layout/fonts";
import { mediumScreenQuery, largeScreenQuery } from "layout/layout";
import { css, cx } from "linaria";
import React, { ReactNode } from "react";

const buttonClassName = cx(
  actionButtonClassName,
  css`
    min-width: 14rem;
    text-align: center;
  `
);

export function HomeGetInvolved() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        background: ${green120};
      `}
    >
      <div
        className={css`
          display: grid;
          gap: 4rem;
          max-width: 48rem;
          margin: 0 auto;
          padding: 4rem 2rem;

          ${mediumScreenQuery} {
            grid: auto-flow / 1fr 1fr;
          }
        `}
      >
        <Item
          icon={<img src={require("../home/get-involved/1-github.svg")} />}
          title={<>Help us build Tally Ho or fork us on GitHub</>}
          cta={
            <Link
              className={buttonClassName}
              target="_blank"
              to="https://github.com/tallycash/extension"
            >
              Fork on GitHub
            </Link>
          }
        />
        <Item
          icon={<img src={require("../home/get-involved/2-discord.svg")} />}
          title={<>Join our Discord community ahead of the DAO launch</>}
          cta={
            <Link
              className={buttonClassName}
              target="_blank"
              to="https://chat.tally.cash/"
            >
              Join Discord
            </Link>
          }
        />
        <Item
          icon={<img src={require("../home/get-involved/3-proposal.svg")} />}
          title={<>Make a proposal and help shape Tally Ho’s future</>}
          cta={
            <Link
              className={buttonClassName}
              target="_blank"
              to="https://gov.tally.cash/"
            >
              Governance Forum
            </Link>
          }
        />
        <Item
          icon={<img src={require("../home/get-involved/4-learn-more.svg")} />}
          title={<>Learn more about Tally Ho</>}
          cta={
            <Link
              className={buttonClassName}
              target="_blank"
              to="https://docs.tally.cash/"
            >
              Read the Docs
            </Link>
          }
        />
      </div>
    </div>
  );
}

function Item({
  icon,
  cta,
  title,
}: {
  icon: ReactNode;
  title: ReactNode;
  cta: ReactNode;
}) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        text-align: center;
        align-items: center;

        ${mediumScreenQuery} {
          min-height: 14rem;
          text-align: left;
          align-items: stretch;
        }
      `}
    >
      <div
        className={css`
          display: flex;
          margin: 0.75rem;
        `}
      >
        {icon}
      </div>
      <h5
        className={css`
          flex: 1;
          margin: 0.75rem;
          font-family: ${quincyRegularFontFamily};
          font-size: 24px;
          font-weight: normal;
          color: ${textLight};
        `}
      >
        {title}
      </h5>
      <div
        className={css`
          display: flex;
          margin: 0.75rem;
        `}
      >
        {cta}
      </div>
    </div>
  );
}
