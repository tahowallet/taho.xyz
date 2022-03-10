import { Header } from "common/header";
import { NewsItem, NewsSection } from "common/news";
import { Banner } from "home/banner";
import { HomeFeatures } from "home/home-features";
import { HomeGetInvolved } from "home/home-get-involved";
import { ProductHero } from "home/home-product-hero";
import { hunterGreen } from "layout/colors";
import { css } from "linaria";
import React from "react";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <ProductHero />
      <HomeFeatures />

      <div
        className={css`
          display: flex;
          flex-flow: column;
          background: ${hunterGreen};
          padding: 4rem 0;
        `}
      >
        <NewsSection>
          <NewsItem
            to="https://blog.tally.cash/what-is-tally/"
            title={<>What is Tally Ho</>}
            date={<>December 15, 2021</>}
            body={<>A community-owned wallet for the open internet.</>}
            main
          />
          <NewsItem
            to="https://blog.tally.cash/tally-call-for-delegates/"
            title={<>Call for Delegates</>}
            date={<>December 1, 2021</>}
            body={<>Tally Ho is now accepting applications for DAO delegates.</>}
          />
          <NewsItem
            to="https://blog.tally.cash/all-rights-reversed-tally-is-now-open-source/"
            title={<>Open Source Announcement</>}
            date={<>November 17, 2021</>}
            body={
              <>Tally Ho is open source under GNU General Public License v3.</>
            }
          />
        </NewsSection>
      </div>

      <HomeGetInvolved />
    </>
  );
}
