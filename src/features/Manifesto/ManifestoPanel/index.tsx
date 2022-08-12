import { ethers } from "ethers";
import { DownloadCta } from "features/Download/Cta";
import { Support } from "features/Manifesto/ManifestoPanel/Support";
import { css } from "linaria";
import React, { useState } from "react";
import {
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
} from "shared/styles/colors";
import { buttonLabelQuincy18, buttonLabelQuincy24, labelLetterSpacing } from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
} from "shared/styles/lengths";
import { buttonShadow } from "shared/styles/shadows";
import { CTAText } from "./CTAText";
import { ManifestoPanelWithTally } from "./ManifestoPanelWithTally";
import { Title } from "./Title";

export function ManifestoPanel() {
  const [isStarted, setStarted] = useState(false);

  const ethereum = (window as {
    ethereum?: ethers.providers.ExternalProvider & { isTally?: boolean };
  }).ethereum;

  const tally = (ethereum?.isTally ?? false) || true ? ethereum : undefined; // FIXME: temporarily allow other wallets

  if (!isStarted) {
    return (
      <>
        <Title>Are you in?</Title>
        <Support>Receive a special discord role + a surprise later</Support>
        <div
          className={css`
            display: flex;
            flex-flow: column-reverse;
            align-items: center;
            min-height: 20rem;
            padding-bottom: 1.75rem;
            background: calc(50% + 0.5rem) 100% / contain no-repeat url(./intro.png);
          `}
        >
          <button
            className={css`
              background: ${buttonBackgroundSemanticSuccess};
              padding: 1.25rem 3rem;
              border: none;
              border-radius: 3rem;
              font: ${buttonLabelQuincy24};
              letter-spacing: ${labelLetterSpacing};
              color: ${buttonLabelHunterGreen};
              cursor: pointer;
              box-shadow: ${buttonShadow};
            `}
            onClick={() => {
              setStarted(true);
            }}
          >
            Sign now
          </button>
        </div>
      </>
    );
  }

  if (tally) {
    return <ManifestoPanelWithTally ethereum={tally} />;
  } else {
    return (
      <>
        <Title>Are you in?</Title>
        <CTAText>
          Download Tally Ho! wallet and sign this to show you&rsquo;re onboard.
        </CTAText>
        <DownloadCta />
      </>
    );
  }
}
