import { Footer } from "common/footer";
import { Header } from "common/header";
import { NewsSection } from "common/news";
import { Banner } from "home/banner";
import { Headline } from "home/headline";
import { HomeFeatures } from "home/home-features";
import { ProductHero } from "home/home-product-hero";
import { green120 } from "layout/colors";
import { css } from "linaria";
import React from "react";

export function Home() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        background: no-repeat 50% 60rem / auto 24rem
            url(${require("../home/forest-background.svg")}),
          no-repeat top left / contain
            linear-gradient(
              to bottom,
              rgb(255 255 255 / 0) 48rem,
              rgb(255 255 255 / 0.12) 80rem,
              ${green120} 80rem
            );
      `}
    >
      <Header />
      <Banner />
      <Headline />
      <ProductHero />
      <HomeFeatures />
      <NewsSection />
      <Footer />
    </div>
  );
}
