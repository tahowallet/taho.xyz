import { ethers } from "ethers";
import { ManifestoPanelLayout } from "features/Manifesto/ManifestoPanel/ManifestoPanelLayout";
import { css } from "linaria";
import React, { ReactNode } from "react";
import {
  bodyDarkGreen60,
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
} from "shared/styles/colors";
import {
  bodySmallSegment18,
  buttonLabelQuincy18,
  textLabelQuincy18,
} from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
} from "shared/styles/lengths";
import { buttonShadow } from "shared/styles/shadows";
import { useEthereumAccount } from "../../hooks/useEthereumAccount";
import { useManifestoSign } from "../../hooks/useManifestoSign";
import { useSIWE } from "../../hooks/useSIWE";
import { useUserData } from "../../hooks/useUserData";
import { CTAText } from "../CTAText";
import { ManifestoPanelSigned } from "../ManifestoPanelSigned";
import { Message } from "../Message";

export function ManifestoPanelWithTally({
  ethereum,
}: {
  ethereum: ethers.providers.ExternalProvider;
}) {
  const {
    connectWallet,
    account,
    accountError,
    accountIsLoading,
  } = useEthereumAccount();
  const {
    signInWithEthereum,
    siweAccount,
    tokenError,
    tokenIsLoading,
  } = useSIWE();
  const { fullAccount, userError, userIsLoading } = useUserData(siweAccount);
  const {
    signManifesto,
    signedMessage: sessionSignedMessage,
    signatureError,
    signatureIsLoading,
  } = useManifestoSign();

  const signedMessage =
    fullAccount?.data?.signedMessage ?? sessionSignedMessage ?? null;

  if (!signedMessage || !fullAccount) {
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
            src={require("../icon-sign.svg")}
            alt=""
          />
        }
        title={<>Are you in?</>}
      >
        <CTAText>Sign the Taho Community Pledge in 3 easy steps.</CTAText>
        <StepContainer>
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
              <Message>Waiting for wallet...</Message>
            ) : (
              <StepButton
                onClick={() => {
                  connectWallet({ ethereum });
                }}
              >
                Connect with Taho!
              </StepButton>
            )}
            {accountError && (
              <Message isError>Error while connecting wallet.</Message>
            )}
          </Step>

          <Step index={2} isDone={!!fullAccount}>
            {fullAccount ? (
              <Message>Signed in with Ethereum</Message>
            ) : tokenIsLoading ? (
              <Message>Waiting for sign-in.</Message>
            ) : userIsLoading ? (
              <Message>Signing in...</Message>
            ) : (
              <StepButton
                disabled={!account || tokenIsLoading}
                onClick={() => {
                  if (!account) throw new Error();
                  signInWithEthereum();
                }}
              >
                Sign-In with Ethereum
              </StepButton>
            )}
            {tokenError && (
              <Message isError>
                Sign-in failed. Make sure you've set your Network to Ethereum.
              </Message>
            )}
            {siweAccount && userError && (
              <Message isError>
                {(userError as { details?: string }).details ??
                  "Cannot connect to our server."}
              </Message>
            )}
          </Step>

          <Step index={3} isDone={!!signedMessage}>
            {signedMessage ? null : signatureIsLoading ? (
              <Message>Signing...</Message>
            ) : (
              <StepButton
                disabled={!fullAccount || signatureIsLoading}
                onClick={() => {
                  if (!fullAccount) return;
                  signManifesto({ account: fullAccount });
                }}
              >
                Sign Pledge
              </StepButton>
            )}
            {signatureError && <Message isError>Error while signing.</Message>}
          </Step>
        </StepContainer>
        <p
          className={css`
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: auto auto 3rem;
            font: ${bodySmallSegment18};
            color: ${bodyDarkGreen60};
          `}
        >
          <img width="30" height="30" alt="" src={require("./gasless.svg")} />
          gasless transaction
        </p>
      </ManifestoPanelLayout>
    );
  }

  return (
    <ManifestoPanelSigned account={fullAccount} signedMessage={signedMessage} />
  );
}

function StepContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className={css`
        display: grid;
        grid: auto auto auto / auto;
        justify-items: center;
        gap: 2rem;
        margin: 0 4rem;

        @media (min-width: 36rem) {
          grid: auto / 1fr 1fr 1fr;
        }
      `}
    >
      {children}
    </div>
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
        min-height: 10rem;
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

function StepButton({
  children,
  disabled,
  onClick,
}: {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
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

        &:not([disabled]) {
          box-shadow: ${buttonShadow};
        }
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
