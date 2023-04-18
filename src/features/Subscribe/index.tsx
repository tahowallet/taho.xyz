import { css } from "linaria";
import React, { useState } from "react";
import {
  bodyDarkGreen80,
  bodyDarkGreen95,
  buttonBackgroundSemanticSuccess,
  cardBackgroundGreen20,
  sectionBackgroundOffWhite,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodyExtraSmallSegment14,
  bodyNormalSegment24,
  buttonLabelQuincy18,
  h1Quincy72,
  labelLetterSpacing,
} from "shared/styles/fonts";
import {
  buttonBlockPadding,
  buttonBorderRadius,
  buttonInlinePadding,
  sectionBodyWideWidth,
  sectionInlinePadding,
  sectionWideWidth,
  subtitleBlockMargin,
} from "shared/styles/lengths";
import { buttonShadow } from "shared/styles/shadows";

export function Subscribe() {
  const [submittedEmail, setSubmittedEmail] = useState("");

  return (
    <div
      className={css`
        max-width: ${sectionWideWidth};
        padding: 0 ${sectionInlinePadding};
        margin: 0 auto;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-flow: column;
          gap: 2rem;
          padding: 6rem 2rem;
          border-radius: 1rem;
          background: ${cardBackgroundGreen20};
        `}
      >
        <div>
          <h1
            className={css`
              font: ${h1Quincy72};
              color: ${titleDarkHunterGreen};
              text-align: center;
            `}
          >
            Join the pack.
          </h1>
          <p
            className={css`
              max-width: 32rem;
              margin: ${subtitleBlockMargin} auto;
              font: ${bodyNormalSegment24};
              color: ${bodyDarkGreen95};
              text-align: center;
            `}
          >
            Get the alpha on Taho.
          </p>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const emailInput = event.currentTarget.elements.namedItem(
              "email"
            ) as HTMLInputElement;

            const email = emailInput.value;
            (window as any)._cio.identify({
              id: email,
              email: email,
              created_at: Math.floor(new Date().getTime() / 1000),
            });
            setSubmittedEmail(email);
          }}
        >
          <div
            className={css`
              display: flex;
              align-items: center;
              gap: 2rem;
              height: 5rem;
              max-width: ${sectionBodyWideWidth};
              margin: 2rem auto;
              padding: 0 2.5rem;
              border-radius: 3rem;
              background: ${sectionBackgroundOffWhite};
            `}
          >
            <input
              className={css`
                flex: 1;
                align-self: stretch;
                min-width: 0;
                border: none;
                outline: none;
                font: ${bodyNormalSegment24};
              `}
              required
              name="email"
              placeholder="your@email.com"
              type="email"
            />
            <button
              className={css`
                all: unset;
                display: inline-block;
                padding: ${buttonBlockPadding} ${buttonInlinePadding};
                border-radius: ${buttonBorderRadius};
                font: ${buttonLabelQuincy18};
                letter-spacing: ${labelLetterSpacing};
                box-shadow: ${buttonShadow};
                margin: 4rem -1.25rem;
                background-color: ${buttonBackgroundSemanticSuccess};
                cursor: pointer;
              `}
              type="submit"
            >
              Submit
            </button>
          </div>
          {submittedEmail && (
            <div
              className={css`
                display: flex;
                padding: 0 ${sectionInlinePadding};
                font: ${bodyExtraSmallSegment14};
                color: ${bodyDarkGreen80};
              `}
            >
              <p
                className={css`
                  background: left top 0.375rem / 1.5rem no-repeat
                    url("./confirm-icon.svg");
                  min-height: 2.5rem;
                  margin: -1rem auto -1.5rem;
                  padding: 0.5rem 0 0.5rem 2rem;
                  font: ${bodyExtraSmallSegment14};
                  color: ${bodyDarkGreen80};
                `}
              >
                {submittedEmail} successfully submitted. You will be able to
                unsubscribe at any time.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
