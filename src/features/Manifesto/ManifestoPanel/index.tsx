import { ethers } from "ethers";
import { DownloadCta } from "features/Download/Cta";
import { css } from "linaria";
import React, { ReactNode } from "react";
import {
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
  titleDarkGold120,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  buttonLabelQuincy18,
  h3Quincy36,
  textLabelQuincy18,
} from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
  sectionBodyWideWidth,
} from "shared/styles/lengths";
import { useEthereumAccount } from "../hooks/useEthereumAccount";
import { useManifestoSign } from "../hooks/useManifestoSign";
import { useSIWE } from "../hooks/useSIWE";
import { useUserData } from "../hooks/useUserData";
import { ManifestoSignedPanel } from "./ManifestoSignedPanel";
import { Message } from "./Message";

export function ManifestoPanel() {
  const ethereum = (window as {
    ethereum?: ethers.providers.ExternalProvider & { isTally?: boolean };
  }).ethereum;

  const {
    connectWallet,
    account,
    accountError,
    accountIsLoading,
  } = useEthereumAccount(ethereum);
  const { signInWithEthereum, token, tokenError, tokenIsLoading } = useSIWE(
    account
  );
  const { userData, userError, userIsLoading } = useUserData(token);
  const {
    signManifesto,
    signature,
    signatureError,
    signatureIsLoading,
  } = useManifestoSign(account, token, userData);

  const hasTally = ethereum?.isTally ?? false;
  const hasSigned = !!(userData?.hasSigned || signature);
  const canSIWE = account && !tokenIsLoading;
  const canSign = userData && !signatureIsLoading && !hasSigned;

  return (
    <>
      <h3
        className={css`
          max-width: ${sectionBodyWideWidth};
          margin: 2rem auto;
          font: ${h3Quincy36};
          color: ${titleDarkGold120};
          text-align: center;
        `}
      >
        {hasSigned ? (
          <>
            🎉 🌭
            <br />
            Wohoooo! Glad our values are aligned!
          </>
        ) : (
          <>Are these your values?</>
        )}
      </h3>
      {hasSigned ? (
        <></>
      ) : (
        <h3
          className={css`
            max-width: ${sectionBodyWideWidth};
            margin: 2rem auto;
            font: ${h3Quincy36};
            color: ${titleDarkHunterGreen};
            text-align: center;
          `}
        >
          {hasTally ? (
            <>
              Sign this with your Tally Ho! wallet to show you&rsquo;re onboard.
            </>
          ) : (
            <>
              Download Tally Ho! wallet and sign this to show you&rsquo;re
              onboard.
            </>
          )}
        </h3>
      )}
      {hasTally ? (
        token && hasSigned ? (
          <ManifestoSignedPanel token={token} />
        ) : (
          <div
            className={css`
              display: grid;
              grid: auto / 1fr 1fr 1fr;
              justify-items: center;
              gap: 2rem;
              margin: 4rem auto;
            `}
          >
            <Step index={1} isDone={!!account}>
              {account ? (
                <Message>
                  Connected with
                  <br />
                  <strong>
                    {account.address.slice(0, 6)}...{account.address.slice(-4)}
                  </strong>
                </Message>
              ) : accountIsLoading ? (
                <div>Waiting for wallet...</div>
              ) : (
                <button
                  onClick={() => {
                    connectWallet();
                  }}
                  className={css`
                    background: ${buttonBackgroundSemanticSuccess};
                    padding: ${buttonBlockPadding} ${buttonInlinePadding};
                    border: none;
                    border-radius: ${buttonBorderRadius};
                    font: ${buttonLabelQuincy18};
                    color: ${buttonLabelHunterGreen};
                    cursor: pointer;
                  `}
                >
                  Connect with Tally Ho!
                </button>
              )}
              {accountError && (
                <Message>Error while connecting wallet.</Message>
              )}
            </Step>

            <Step index={2} isDone={!!userData}>
              {userData ? (
                <Message>Signed in with Ethereum</Message>
              ) : tokenIsLoading ? (
                <Message>Waiting for log in.</Message>
              ) : userIsLoading ? (
                <Message>Logging in...</Message>
              ) : (
                <button
                  onClick={() => {
                    signInWithEthereum();
                  }}
                  className={css`
                    background: ${buttonBackgroundSemanticSuccess};
                    padding: ${buttonBlockPadding} ${buttonInlinePadding};
                    border: none;
                    border-radius: ${buttonBorderRadius};
                    font: ${buttonLabelQuincy18};
                    color: ${buttonLabelHunterGreen};
                    cursor: pointer;

                    &[disabled] {
                      opacity: 20%;
                    }
                  `}
                  disabled={!canSIWE}
                >
                  Sign in with Ethereum
                </button>
              )}
              {tokenError && <Message>Log-in failed</Message>}
              {userError && <Message>Cannot connect to our server.</Message>}
            </Step>

            <Step index={3} isDone={hasSigned}>
              {hasSigned ? null : signatureIsLoading ? (
                <Message>Signing...</Message>
              ) : (
                <button
                  onClick={() => {
                    signManifesto();
                  }}
                  className={css`
                    background: ${buttonBackgroundSemanticSuccess};
                    padding: ${buttonBlockPadding} ${buttonInlinePadding};
                    border: none;
                    border-radius: ${buttonBorderRadius};
                    font: ${buttonLabelQuincy18};
                    color: ${buttonLabelHunterGreen};
                    cursor: pointer;

                    &[disabled] {
                      opacity: 20%;
                    }
                  `}
                  disabled={!canSign}
                >
                  Sign petition
                </button>
              )}
              {signatureError && <Message>Error while signing.</Message>}
            </Step>
          </div>
        )
      ) : (
        <DownloadCta />
      )}
    </>
  );
}

function Step({
  index,
  isDone,
  children,
}: {
  index: number;
  isDone: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 1rem;
      `}
    >
      <span
        className={css`
          margin: 1rem 0;
          font: ${textLabelQuincy18};
        `}
      >
        {isDone ? <>✅</> : <>{index}.</>}
      </span>
      {children}
    </div>
  );
}
