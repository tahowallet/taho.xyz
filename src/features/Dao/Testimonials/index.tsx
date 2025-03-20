import { css } from "linaria";
import React, { ReactNode } from "react";
import {
  bodyDarkGold120,
  borderDarkGold80,
  sectionBackgroundGold5,
  sectionBackgroundOffWhite,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import { bodyNormalSegment24, quoteQuincy32 } from "shared/styles/fonts";
import { sectionInlinePadding, sectionWideWidth } from "shared/styles/lengths";

export function DaoTestimonials() {
  return (
    <div
      className={css`
        background: ${sectionBackgroundGold5};
        padding: 8rem 0;
      `}
    >
      <div
        className={css`
          display: grid;
          grid: auto-flow auto / repeat(
              auto-fill,
              minmax(min(100%, 28rem), 1fr)
            );
          justify-items: center;
          gap: 2rem;
          max-width: ${sectionWideWidth};
          padding: 0 ${sectionInlinePadding};
          margin: 0 auto;
        `}
      >
        <Testimonial
          authorIconSrc={"/images/testimonial-icon-1-gitcoin.svg"}
          authorHeadline="Kevin Owocki"
          authorSupport="Gitcoin co-founder"
        >
          “We&rsquo;re excited to see Taho&rsquo;s leadership make public
          goods funding a top priority from their DAO&rsquo;s inception.”
        </Testimonial>
        <Testimonial
          authorIconSrc={"/images/testimonial-icon-2-bankless.png"}
          authorHeadline="BanklessDAO"
        >
          “Taho has been hard at work designing a DAO structure that is
          strong but nimble, and focuses on maximizing autonomy and agency while
          following a clear, scalable roadmap.”
        </Testimonial>
      </div>
    </div>
  );
}

function Testimonial({
  children,
  authorIconSrc,
  authorHeadline,
  authorSupport,
}: {
  children: ReactNode;
  authorIconSrc: string;
  authorHeadline: ReactNode;
  authorSupport?: ReactNode;
}) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        max-width: 32rem;
        padding: 2rem 4rem;
        border: 1px solid ${borderDarkGold80};
        border-radius: 1rem;
        background: ${sectionBackgroundOffWhite};
      `}
    >
      <div
        className={css`
          margin: auto 0;
          padding: 3rem 1rem;
          font: ${quoteQuincy32};
          color: ${titleDarkHunterGreen};
          text-align: center;
        `}
      >
        {children}
      </div>
      <div
        className={css`
          display: flex;
          gap: 1rem;
          align-items: flex-end;
          justify-content: center;
        `}
      >
        <img
          className={css`
            height: 4rem;
          `}
          src={authorIconSrc}
        />
        <div
          className={css`
            display: flex;
            flex-flow: column;
            min-height: 4rem;
            justify-content: center;
            font: ${bodyNormalSegment24};
            color: ${bodyDarkGold120};
          `}
        >
          <div>
            <strong>{authorHeadline}</strong>
          </div>
          <div>{authorSupport}</div>
        </div>
      </div>
    </div>
  );
}
