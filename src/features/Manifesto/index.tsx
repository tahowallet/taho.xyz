import { Footer } from "features/Footer";
import { Header } from "features/Header";
import { SignatureList } from "features/Manifesto/SignatureList";
import { css } from "linaria";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SEO from "shared/seo";
import { sectionBackgroundOffWhite } from "shared/styles/colors";
import {
  sectionInlinePadding,
  sectionNarrowWidth,
} from "shared/styles/lengths";
import { tileBoxShadow } from "shared/styles/shadows";
import { ManifestoBody } from "./ManifestoBody";
import { ManifestoHeaderCta } from "./ManifestoHeaderCta";
import { ManifestoPanel } from "./ManifestoPanel";

const queryClient = new QueryClient();

export function Manifesto() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={css`
          display: flex;
          flex-flow: column;
        `}
      >
        <SEO
          title="Taho Community Pledge"
          description={
            "Sign to join our community & be eligible for future surprises"
          }
          metaImage="https://taho.xyz/web3pledge-cover.png"
        />

        <Header />

        <div
          className={css`
            display: flex;
            flex-flow: column;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-flow: column;
              width: 100%;
              max-width: 68rem;
              margin: 0 auto;
            `}
          >
            <div
              className={css`
                aspect-ratio: 3 / 1;
                margin: 0 4rem -1.5rem;
                background: bottom center / contain no-repeat url(./bg.png);
              `}
            />
          </div>
          <div
            className={css`
              position: sticky;
              top: 1.5rem;
              z-index: 1;
              width: 100%;
              max-width: 72rem;
              margin: 1.5rem auto 24rem;
              padding: 0 2rem;
            `}
          >
            <ManifestoHeaderCta />
          </div>
          <div
            className={css`
              display: flex;
              flex-flow: column;
              width: 100%;
              max-width: ${sectionNarrowWidth};
              margin: -28rem auto 0;
              box-shadow: ${tileBoxShadow};
              padding: 6rem 0 0;
            `}
          >
            <ManifestoBody />
          </div>
        </div>
        <div
          className={css`
            width: 100%;
            max-width: ${sectionNarrowWidth};
            margin: 0 auto;
            border-radius: 0 0 1rem 1rem;
            background: ${sectionBackgroundOffWhite};
            box-shadow: ${tileBoxShadow};
          `}
          id="sign"
        >
          <ManifestoPanel />
        </div>

        <div
          className={css`
            margin: 8rem 0 24rem;
            padding: 0 ${sectionInlinePadding};
          `}
        >
          <SignatureList />
        </div>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}
