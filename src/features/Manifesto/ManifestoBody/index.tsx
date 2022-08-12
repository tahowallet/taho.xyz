import { css } from "linaria";
import React, { ReactNode } from "react";
import {
  bodyDarkHunterGreen,
  titleDarkGreen80,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodySmallSegment18,
  h1Quincy72,
  h3Quincy36,
} from "shared/styles/fonts";
import { sectionInlinePadding, sectionWideWidth } from "shared/styles/lengths";

export function ManifestoBody() {
  return (
    <div
      className={css`
        width: 100%;
        max-width: ${sectionWideWidth};
        margin: 4rem auto;
        padding: 0 ${sectionInlinePadding};
      `}
    >
      <h1
        className={css`
          margin: 2rem 0;
          color: ${titleDarkHunterGreen};
          font: ${h1Quincy72};
        `}
      >
        Dear web3...
      </h1>
      <div
        className={css`
          max-width: 42rem;

          h3 {
            font: ${h3Quincy36};
            color: ${titleDarkGreen80};
            margin: 4rem 0 2rem;
          }

          p {
            font: ${bodySmallSegment18};
            color: ${bodyDarkHunterGreen};
            margin: 2rem 0;
          }
        `}
      >
        <h3>What do you believe in?</h3>
        <p>
          Look past the headlines and you&rsquo;ll see something remarkable
          unfolding. Web3 is cleansing itself: washing out bad actors and
          clearing space for the community-powered internet. Let&rsquo;s use
          this time to get back to basics and remind ourselves why we&rsquo;re
          here.
        </p>
        <p>Why is the Tally Ho community here? It&rsquo;s simple:</p>

        <h3>
          Your web3 wallet isn&rsquo;t decentralized.
          <br />
          But it should be.
        </h3>
        <p>
          The trusty tools we use to connect to each other—simple, unassuming
          web3 wallets—are controlled by web2 monoliths. Take a look at the
          wallet in your browser and ask: Who&rsquo;s getting rich from this?
          Who&rsquo;s monitoring me? Can they block my access to the open
          internet?
        </p>
        <h3>Our community is building the web3 wallet you deserve.</h3>
        <p>
          Can you imagine a web3 wallet that actually has web3 values? A wallet
          that&rsquo;s available anywhere on earth? That can finance itself? A
          wallet that&rsquo;s not beholden to shareholders… because it&rsquo;s
          directly accountable to you? We&rsquo;ll, that&rsquo;s what
          we&rsquo;re building.
        </p>
      </div>
      <hr
        className={css`
          height: 1rem;
          border: none;
          margin: 4.5rem -0.25rem;
          background: left / auto no-repeat url(./hr.svg);
        `}
      />
      <h1
        className={css`
          margin: 2rem 0;
          color: ${titleDarkHunterGreen};
          font: ${h1Quincy72};
        `}
      >
        Community Values
      </h1>
      <p
        className={css`
          font: ${bodySmallSegment18};
          color: ${bodyDarkHunterGreen};
          margin: 2rem 0;
        `}
      >
        Below are the values baked into every line of Tally Ho&rsquo;s codebase.
        Our community pledge is that you can expect every update in years and
        decades to be built around these values:
      </p>
      <ul
        className={css`
          display: flex;
          flex-flow: column;
          gap: 2rem;
          margin: 0;
          padding: 2rem 0;
        `}
      >
        <Value
          iconSrc={require("./icon-1-accessible.svg")}
          title={<>Accessible to everyone</>}
          body={
            <>
              You should have access to web3 systems—no matter where you live.
            </>
          }
        />
        <Value
          iconSrc={require("./icon-2-oss.svg")}
          title={<>100% open source</>}
          body={
            <>
              All code should be 100% open source—for anyone to copy, fork, or
              remix.
            </>
          }
        />
        <Value
          iconSrc={require("./icon-3-community.svg")}
          title={<>Fully owned by the community</>}
          body={
            <>Value must flow to the community, rather than a few insiders.</>
          }
        />
      </ul>
    </div>
  );
}
function Value({
  title,
  body,
  iconSrc,
}: {
  title: ReactNode;
  body: ReactNode;
  iconSrc: string;
}) {
  return (
    <li
      className={css`
        display: flex;
        align-items: center;
        gap: 2rem;
      `}
    >
      <img height={64} width={64} src={iconSrc} alt="" />
      <div
        className={css`
          display: flex;
          flex-flow: column;
          gap: 0.5rem;
        `}
      >
        <h3
          className={css`
            font: ${h3Quincy36};
            color: #11a165;
          `}
        >
          {title}
        </h3>
        <p
          className={css`
            font: ${bodySmallSegment18};
            color: ${bodyDarkHunterGreen};
          `}
        >
          {body}
        </p>
      </div>
    </li>
  );
}
