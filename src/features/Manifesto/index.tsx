import { DaoValues } from "features/Dao/Values";
import { Footer } from "features/Footer";
import { Header } from "features/Header";
import { css } from "linaria";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SEO from "shared/seo";
import {
  cardBackgroundOffWhite,
  sectionBackgroundTrophyGold,
} from "shared/styles/colors";
import { sectionNarrowWidth } from "shared/styles/lengths";
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
        <SEO title="Dear web3, what do you believe in?" />

        <Header />

        <div
          className={css`
            padding: 2rem 0 6rem;
          `}
        >
          <ManifestoHeaderCta />
          <ManifestoBody />
        </div>

        <div
          className={css`
            background: ${sectionBackgroundTrophyGold};
            padding: 0 0 8rem;
            margin: 0 0 12rem;
          `}
        >
          <DaoValues />
          <div
            id="sign"
            className={css`
              max-width: ${sectionNarrowWidth};
              min-height: 40rem;
              margin: 0 auto;
              padding: 4rem;
              border-radius: 1rem;
              background: ${cardBackgroundOffWhite};
            `}
          >
            <ManifestoPanel />
          </div>
        </div>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}
