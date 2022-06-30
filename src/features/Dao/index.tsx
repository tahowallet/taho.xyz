import { DaoGetInvolved } from "features/Dao/GetInvolved";
import { DaoHero } from "features/Dao/Hero";
import { DaoTestimonials } from "features/Dao/Testimonials";
import { DaoTimeline } from "features/Dao/Timeline";
import { DaoValues } from "features/Dao/Values";
import { Footer, footerSeparatorBackground } from "features/Footer";
import { Header } from "features/Header";
import { Subscribe } from "features/Subscribe";
import { css } from "linaria";
import React from "react";
import SEO from "shared/seo";
import { sectionBackgroundOffWhite } from "shared/styles/colors";

export function Dao() {
  return (
    <>
      <SEO />
      <div
        className={css`
          background: ${sectionBackgroundOffWhite};

          @media (min-width: 32rem) {
            background: calc(50% + 10rem) calc(50% + 10rem) / 60rem auto
                no-repeat url("background-dogs.png"),
              calc(50% + 20rem) calc(50% + 10rem) / 120rem auto no-repeat
                url("background-sunburst.svg"),
              ${sectionBackgroundOffWhite};
          }
        `}
      >
        <Header />
        <DaoHero />
      </div>

      <DaoTestimonials />
      <DaoValues />
      <DaoTimeline />
      <DaoGetInvolved />

      <div
        className={css`
          background: ${footerSeparatorBackground}, ${sectionBackgroundOffWhite};
          padding: 6rem 0 28rem;
        `}
      >
        <Subscribe />
      </div>

      <Footer />
    </>
  );
}
