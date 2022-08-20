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
        <h3>
          It doesn&#8217;t matter what you read or listen to. These days,
          everyone is talking about Web3.
        </h3>
        <p>
          But when you look past the headlines, something remarkable is
          unfolding: Web3 is cleansing itself. It&#8217;s washing out bad actors
          and clearing space for a new Internet that is built, owned, and
          powered by communities&#8212;not corporations. As citizens of the new
          Internet, it&#8217;s time for us to get back to basics and remind
          ourselves why we&#8217;re here.
        </p>
        <p>Why is the Tally Ho community here? It&rsquo;s simple:</p>

        <h3>
          Your Web3 wallet isn&rsquo;t decentralized.
          <br />
          But it should be.
        </h3>
        <p>
          You might not know it, but the tool you use to connect to the new
          Internet&#8212;your trusty, inconspicuous wallet&#8212;is likely
          controlled by a Web2 megacorporation. Take a look at your wallet.
          Before you buy, sell, or swap, ask yourself: &#8220;Who&#8217;s
          monitoring my activity? Can they block me from accessing my assets?
          Who&#8217;s getting rich here?&#8221; We guarantee you&#8217;ll be
          surprised by what you find out.
        </p>
        <h3>Tally Ho is building the wallet you deserve.</h3>
        <p>
          Imagine a Web3 wallet that actually embodies Web3 values&#8212;a
          wallet that&#8217;s available to anyone, anywhere on Earth, that can
          finance itself, that&#8217;s accountable to you, not some faceless
          corporation? Turns out you don&#8217;t have to simply imagine it.
          You&#8217;ve found it right here.
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
          Our community is not just building a Web3 wallet that works.
          We&#8217;re building a Web3 wallet that we believe in. That means:
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
                You should have direct access to Web3&#8212;no matter where you
                live.
              </>
            }
          />
          <Value
            iconSrc={require("./icon-2-oss.svg")}
            title={<>Radical transparency</>}
            body={
              <>
                All code should be 100% open source&#8212;for you to copy, fork,
                or remix.
              </>
            }
          />
          <Value
            iconSrc={require("./icon-3-community.svg")}
            title={<>Full community ownership</>}
            body={
              <>
                Value must flow transparently to you and the community&#8212;not
                corporate insiders.&#10;
              </>
            }
          />
        </ul>
        <p>
          These are your rights as a citizen of Web3, and we&#8217;ve built you
          a wallet to help defend them.
        </p>
        <p>
          If you&#8217;d like to join our community, sign this Community Pledge
          with your Tally Ho wallet.
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
