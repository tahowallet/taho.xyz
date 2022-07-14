import { css } from "linaria";
import React from "react";
import {
  bodyDarkHunterGreen,
  titleDarkGold120,
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
        Dear web3,
        <br />
        what do you believe in?
      </h1>
      <div
        className={css`
          max-width: 42rem;

          h3 {
            font: ${h3Quincy36};
            color: ${titleDarkGold120};
            margin: 4rem 0 2rem;
          }

          p {
            font: ${bodySmallSegment18};
            color: ${bodyDarkHunterGreen};
            margin: 2rem 0;
          }
        `}
      >
        <h3>It hasn&rsquo;t been an easy few months for web3.</h3>
        <p>
          The market is washing out bad actors with worse motives and the
          aftershocks are far from over. Friends and family who used to ask you
          to explain web3 now ask: “Are you okay?”
        </p>
        <p>
          Fortunately, the truly decentralized projects are the most
          resilient—communities with the deepest roots won&rsquo;t be washed
          away in the storm.
        </p>
        <p>
          It&rsquo;s time to get back to basics. To call foul on scams when we
          see them. To tackle the hard problems and create a community-owned
          alternative for every part of the digital experience.
        </p>
        <p>
          So what problem is *this* community focused on? It&rsquo;s simple:
        </p>
        <h3>Your decentralized web3 wallet isn't actually decentralized.</h3>
        <p>
          Its creators can revoke your access because of where you live. They
          can abandon open source with impunity. And no matter how many monopoly
          profits they generate, you&rsquo;ll never see a cent. We&rsquo;ve
          gotten so busy decentralizing everything under the sun that we failed
          to see what was right in front of us. The trusty tools we use to hold
          our new wealth—simple, unassuming web3 wallets—are controlled by web2
          monoliths: publicly traded corporations, mercenary startups, and mega
          unicorns pimping your daily usage out for their next multi-billion
          dollar fundraise.
        </p>
        <h3>The Tally Ho community is building the wallet you deserves.</h3>
        <p>
          Tally Ho is open source, built for everyone, and governed by a DAO.
          Instead of concentrating wealth, it circulates value among the people
          who generate it.
        </p>
      </div>
    </div>
  );
}
