import { ethers } from "ethers";
import { DownloadCta } from "features/Download/Cta";
import { ManifestoPanelLayout } from "features/Manifesto/ManifestoPanel/ManifestoPanelLayout";
import { css } from "linaria";
import React, { useEffect } from "react";
import {
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
} from "shared/styles/colors";
import { buttonLabelQuincy24, labelLetterSpacing } from "shared/styles/fonts";
import { buttonShadow } from "shared/styles/shadows";
import { EventEmitter } from "stream";
import { useEthereumAccount } from "../hooks/useEthereumAccount";
import { CTAText } from "./CTAText";
import { ManifestoPanelWithTally } from "./ManifestoPanelWithTally";

export type TallyWindowProvider = ethers.providers.ExternalProvider &
  EventEmitter & {
    isTally?: boolean;
    selectedAddress?: string;
  };

export function ManifestoPanel() {
  const tallyWindowProvider =
    typeof window === "object"
      ? (window as {
          tally?: TallyWindowProvider;
        }).tally
      : undefined;

  const tally =
    tallyWindowProvider?.isTally ?? false ? tallyWindowProvider : undefined;

  const { connectWallet, account, accountError } = useEthereumAccount();

  useEffect(() => {
    if (tally) {
      connectWallet(tally);
    }
  }, [tally]);

  if (tally) {
    tally.on("accountsChanged", (accountArray) => {
      // let's reload the page if the user changes account in the wallet
      if (accountArray.length) {
        debugger;
        window.location.reload();
      }
    });

    if (!account) {
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
                connectWallet(tally);
              }}
            >
              Sign Now
            </button>
          </div>
        </ManifestoPanelLayout>
      );
    } else {
      return (
        <ManifestoPanelWithTally
          account={account}
          accountError={accountError}
        />
      );
    }
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
        <CTAText>Download Tally Ho to sign our Community Pledge.</CTAText>
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
