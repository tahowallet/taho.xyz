import { Footer } from "features/Footer";
import { Header } from "features/Header";
import { css } from "linaria";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SEO from "shared/seo";
import { sectionBackgroundOffWhite } from "shared/styles/colors";
import { sectionNarrowWidth } from "shared/styles/lengths";
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
        <SEO title="Dear web3, what do you believe in?" />

        <Header />

        <div
          className={css`
            display: flex;
            flex-flow: column;
            width: ${sectionNarrowWidth};
            border-radius: 1rem;
            margin: 0 auto 24rem;
          `}
        >
          <div
            className={css`
              height: 24rem;
              margin: 0 -4rem;
              background: bottom 4rem center / contain no-repeat url(./bg.png);
            `}
          />
          <div
            className={css`
              position: sticky;
              top: 1.5rem;
              z-index: 1;
              margin: -4rem;
            `}
          >
            <ManifestoHeaderCta />
          </div>
          <div
            className={css`
              box-shadow: ${tileBoxShadow};
              border-radius: 1rem;
              padding: 6rem 0 0;
            `}
          >
            <div
              className={css`
                padding: 0 6rem;
              `}
            >
              <ManifestoBody />
            </div>

            <div
              className={css`
                border-radius: 0 0 1rem 1rem;
                background: top -4rem center / auto no-repeat url(./ManifestoHeaderCta/bg.svg),
                  ${sectionBackgroundOffWhite};
                padding: 4.5rem 0;
                min-height: 40rem;
              `}
              id="sign"
            >
              <ManifestoPanel />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}
