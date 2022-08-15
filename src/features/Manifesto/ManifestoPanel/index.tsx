import { ethers } from "ethers";
import { DownloadCta } from "features/Download/Cta";
import { ManifestoPanelLayout } from "features/Manifesto/ManifestoPanel/ManifestoPanelLayout";
import { css } from "linaria";
import React, { useState } from "react";
import {
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
} from "shared/styles/colors";
import { buttonLabelQuincy24, labelLetterSpacing } from "shared/styles/fonts";
import { buttonShadow } from "shared/styles/shadows";
import { CTAText } from "./CTAText";
import { ManifestoPanelWithTally } from "./ManifestoPanelWithTally";

export function ManifestoPanel() {
  const [isStarted, setStarted] = useState(false);

  const ethereum =
    typeof window === "object"
      ? (window as {
          ethereum?: ethers.providers.ExternalProvider & { isTally?: boolean };
        }).ethereum
      : undefined;

  const tally = ethereum?.isTally ?? false ? ethereum : undefined;

  if (!isStarted) {
    return (
      <ManifestoPanelLayout
        icon={
          <img width="36" height="36" src={require("./icon-sign.svg")} alt="" />
        }
        title={<>Are you in?</>}
        support={<>Receive a special discord role + a surprise later</>}
      >
        <div
          className={css`
            display: flex;
            flex-flow: column-reverse;
            align-items: center;
            min-height: 20rem;
            margin-top: 4rem;
            padding-bottom: 1.75rem;
            background: calc(50% + 0.5rem) 100% / contain no-repeat
              url(./intro.png);
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
      </ManifestoPanelLayout>
    );
  }

  if (tally) {
    return <ManifestoPanelWithTally ethereum={tally} />;
  } else {
    return (
      <ManifestoPanelLayout
        icon={
          <img width="36" height="36" src={require("./icon-sign.svg")} alt="" />
        }
        title={<>Are you in?</>}
      >
        <CTAText>
          Download Tally Ho! wallet and sign this to show you&rsquo;re onboard.
        </CTAText>
        <div
          className={css`
            display: flex;
            flex-flow: column;
            margin: 2rem;
          `}
        >
          <DownloadCta />
        </div>
      </ManifestoPanelLayout>
    );
  }
}
