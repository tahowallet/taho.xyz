import { ethers } from "ethers";
import { css } from "linaria";
import React, { ReactNode } from "react";
import {
  buttonBackgroundSemanticSuccess,
  buttonLabelHunterGreen,
} from "shared/styles/colors";
import { buttonLabelQuincy18, textLabelQuincy18 } from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
} from "shared/styles/lengths";
import { buttonShadow } from "shared/styles/shadows";
import { useEthereumAccount } from "../hooks/useEthereumAccount";
import { useManifestoSign } from "../hooks/useManifestoSign";
import { useSIWE } from "../hooks/useSIWE";
import { useUserData } from "../hooks/useUserData";
import { CTAText } from "./CTAText";
import { ManifestoSignedPanel } from "./ManifestoSignedPanel";
import { Message } from "./Message";
import { Title } from "./Title";

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
  const { signInWithEthereum, token, tokenError, tokenIsLoading } = useSIWE();
  const { userData, userError, userIsLoading } = useUserData(token);
  const {
    signManifesto,
    signature,
    signatureError,
    signatureIsLoading,
  } = useManifestoSign();

  const hasSigned = !!(userData?.hasSigned || signature);

  if (!hasSigned || !token) {
    return (
      <>
        <Title>Are you in?</Title>
        <CTAText>
          Sign this with your Tally Ho! wallet to show you&rsquo;re onboard.
        </CTAText>
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
                Connect with Tally Ho!
              </StepButton>
            )}
            {accountError && <Message>Error while connecting wallet.</Message>}
          </Step>

          <Step index={2} isDone={!!userData}>
            {userData ? (
              <Message>Signed in with Ethereum</Message>
            ) : tokenIsLoading ? (
              <Message>Waiting for log in.</Message>
            ) : userIsLoading ? (
              <Message>Logging in...</Message>
            ) : (
              <StepButton
                disabled={!account || tokenIsLoading}
                onClick={() => {
                  if (!account) throw new Error();
                  signInWithEthereum(account);
                }}
              >
                Sign in with Ethereum
              </StepButton>
            )}
            {tokenError && <Message>Log-in failed</Message>}
            {token && userError && (
              <Message>Cannot connect to our server.</Message>
            )}
          </Step>

          <Step index={3} isDone={hasSigned}>
            {hasSigned ? null : signatureIsLoading ? (
              <Message>Signing...</Message>
            ) : (
              <StepButton
                disabled={!userData || signatureIsLoading}
                onClick={() => {
                  if (!userData || !token || !account) return;
                  signManifesto({ account, token, userData });
                }}
              >
                Sign pledge
              </StepButton>
            )}
            {signatureError && <Message>Error while signing.</Message>}
          </Step>
        </StepContainer>
      </>
    );
  }

  return (
    <>
      <Title>
        🎉 🌭
        <br />
        Wohoooo! Glad our values are aligned!
      </Title>
      <ManifestoSignedPanel token={token} />
    </>
  );
}

function StepContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className={css`
        display: grid;
        grid: auto / 1fr 1fr 1fr;
        justify-items: center;
        gap: 2rem;
        margin: 4rem;
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
