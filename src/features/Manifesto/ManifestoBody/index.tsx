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
      <div
        className={css`
          max-width: 42rem;

          & > h3 {
            font: ${h3Quincy36};
            color: ${titleDarkGreen80};
            margin: 4rem 0 2rem;
          }

          & > p {
            font: ${bodySmallSegment18};
            color: ${bodyDarkHunterGreen};
            margin: 2rem 0;
          }
        `}
      >
        <h1
          className={css`
            margin: 2rem 0;
            color: ${titleDarkHunterGreen};
            font: ${h1Quincy72};
          `}
        >
          Dear Web3,
        </h1>
        <h3>We have rights. Let&rsquo;s protect them.</h3>
        <p>
          It doesn&rsquo;t matter what you read or listen to: these days,
          everyone is talking about Web3. But when you look past the headlines,
          something remarkable is unfolding: Web3 is fortifying itself.
          We&rsquo;re washing out bad actors and laying the foundation for a new
          Internet, one that&rsquo;s owned by all of us. It&rsquo;s time to get
          back to basics and remind ourselves why we&rsquo;re here.
        </p>
        <h3>
          Our Web3 wallets aren&rsquo;t decentralized.
          <br />
          It&rsquo;s time to change that.
        </h3>
        <p>
          Your trusty, inconspicuous wallet is your portal to Web3. But the
          biggest wallets in our ecosystem are controlled by Web2-style
          megacorporations, and we&rsquo;re beginning to realize that this has
          dire implications for our rights and freedoms. Take a look at your
          wallet and ask yourself: “
          <a
            href="https://theintercept.com/2022/06/29/crypto-coinbase-tracer-ice/"
            target="_blank"
          >
            Who&rsquo;s monitoring my activity?
          </a>{" "}
          <a
            href="https://www.forbes.com/sites/stevenehrlich/2022/03/03/iranian-venezuela-users-abruptly-dropped-from-major-crypto-platforms-as-russian-sanctions-grow/?sh=5e32c6a670b0"
            target="_blank"
          >
            Can they censor me, block me from accessing my assets, or dictate
            which protocols or networks I connect to?
          </a>{" "}
          <a
            href="https://twitter.com/tomhschmidt/status/1387680567492104192?lang=en"
            target="_blank"
          >
            Who&rsquo;s getting rich here?
          </a>
          ” You&rsquo;ll be surprised by what you find out.
        </p>
        <h3>Tally Ho is building the wallet we deserve.</h3>
        <p>
          Now imagine a community-owned wallet that actually embodies and
          protects Web3 values—a wallet that&rsquo;s available to anyone,
          anywhere on Earth, that can finance itself,{" "}
          <a href="https://tally.cash/dao/" target="_blank">
            that&rsquo;s governed by a DAO
          </a>
          , and that&rsquo;s accountable to you, not some faceless corporation.
          Well, that&rsquo;s Tally Ho: a Web3 wallet for everyone, built to
          safeguard your assets and your rights.
        </p>
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
          Our community is not just building a wallet that works. We&rsquo;re
          building a wallet that we all believe in. That means:
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
            title={<>Access for everyone</>}
            body={
              <>
                You should have direct access to Web3—no matter where you live.
              </>
            }
          />
          <Value
            iconSrc={require("./icon-2-oss.svg")}
            title={<>Radical transparency</>}
            body={
              <>
                All code should be 100% open source—for you to copy, fork, or
                remix.
              </>
            }
          />
          <Value
            iconSrc={require("./icon-3-community.svg")}
            title={<>Full community ownership</>}
            body={
              <>
                Value must flow transparently to you and the community—not
                corporate insiders.
              </>
            }
          />
        </ul>
        <h3>Sign below to show your support.</h3>
        <p>
          <strong>
            These are your rights as a citizen of Web3. If you believe in them,
            sign this Community Pledge with your Tally Ho wallet.
          </strong>{" "}
          It&rsquo;s the best way to show support ahead of our DAO launch and
          it's the first step in becoming a verified member of our community.
        </p>
      </div>
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
