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
          tally?: ethers.providers.ExternalProvider & { isTally?: boolean };
        }).tally
      : undefined;

  const tally = ethereum?.isTally ?? false ? ethereum : undefined;

  if (!isStarted) {
    return (
      <ManifestoPanelLayout
        icon={
          <img
            className={css`
              width: 2.25rem;
              height: 2.25rem;
            `}
            width="36"
            height="36"
            src={require("./icon-sign.svg")}
            alt=""
          />
        }
        title={<>Are you in?</>}
        support={<>Good things come to those who sign 🙌</>}
      >
        <div
          className={css`
            display: flex;
            flex-flow: column-reverse;
            align-items: center;
            min-height: 25rem;
            padding-bottom: 1.75rem;
            background: center top 1px / 40rem auto no-repeat url(./intro.png);
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
            Sign Now
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
          <img
            className={css`
              width: 2.25rem;
              height: 2.25rem;
            `}
            width="36"
            height="36"
            src={require("./icon-sign.svg")}
            alt=""
          />
        }
        title={<>Are you in?</>}
      >
        <CTAText>Download Taho to sign our Community Pledge.</CTAText>
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
