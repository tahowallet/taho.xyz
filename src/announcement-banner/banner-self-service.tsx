import { BannerSnippet } from "announcement-banner/banner-snippet";
import { BannerPreviewPage } from "announcement-banner/example-page-content";
import { textLight } from "layout/colors";
import { quincyRegularFontFamily } from "layout/fonts";
import { css } from "linaria";
import React, { useLayoutEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { BannerColorScheme } from "./banner-color-scheme";
import { mediumScreenQuery, largeScreenQuery } from "layout/layout";

const colorSchemes: BannerColorScheme[] = [
  { background: "#001413", foreground: "#D08E39", name: `Dark` },
  { background: "#FAF8F1", foreground: "#002522", name: `Light` },
  { background: "#1C53A6", foreground: "#FFFFFF", name: `Blue` },
];

export function BannerSnippetSelfService() {
  const [colorSchemeIndex, setColorSchemeIndex] = useState(0);
  const colorScheme = colorSchemes[colorSchemeIndex];

  const [inline, setInline] = useState(false);

  const frameRef = useRef<HTMLIFrameElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const load = () => {
    const frame = frameRef.current;
    if (!frame || !frame.contentWindow) return;
    frame.srcdoc = examplePageSource;
  };

  const fixTextAreaHeight = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;
    textArea.style.height = ``;
    textArea.style.height = `${textArea.scrollHeight + 2}px`;
  };

  useLayoutEffect(load);
  useLayoutEffect(fixTextAreaHeight);

  useLayoutEffect(() => {
    window.addEventListener("resize", fixTextAreaHeight);
    return () => {
      window.removeEventListener("resize", fixTextAreaHeight);
    };
  });

  const bannerSource =
    `<!-- TALLY BANNER -->` +
    renderToString(<BannerSnippet colorScheme={colorScheme} inline={inline} />)
      .replace(/<!-- -->/g, ``)
      .replace(/ data-reactroot=""/g, ``)
      .replace(/attr-/g, ``) +
    `<!-- END TALLY BANNER -->`;

  const examplePageSource = renderToString(
    <BannerPreviewPage inline={inline} />
  ).replace(`%BANNER%`, bannerSource);

  return (
    <>
      <div
        className={css`
          display: flex;
          flex-flow: column;
          padding: 8rem 0 2rem;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-flow: column;
            align-items: center;
            width: 100%;
            max-width: 75rem;
            margin: 0 auto;
          `}
        >
          <h1
            className={css`
              margin: 2rem 0;
              padding: 0 2rem;
              font-family: ${quincyRegularFontFamily};
              font-size: min(64px, 8vw);
              font-weight: normal;
              line-height: 110%;
              color: ${textLight};
            `}
          >
            Add Tally Ho! banner to your Web site
          </h1>
        </div>
      </div>

      <div
        className={css`
          color: white;
          max-width: 72rem;
          margin: 0 auto;
          padding: 2rem;

          label {
            display: block;
            margin: 1rem 0;
          }
        `}
      >
        <label>
          Color scheme:{" "}
          <select
            onChange={(event) => {
              setColorSchemeIndex(
                Number.parseInt(event.currentTarget.value, 10)
              );
            }}
          >
            {colorSchemes.map((scheme, i) => (
              <option value={i}>{scheme.name}</option>
            ))}
          </select>
        </label>

        <label>
          Code placement:{" "}
          <select
            defaultValue="head"
            onChange={(event) => {
              setInline(event.currentTarget.value === "inline");
            }}
          >
            <option value="head">Anywhere in {`<head>`} element</option>
            <option value="inline">Manual placement in {`<body>`}</option>
          </select>
        </label>

        <div
          className={css`
            display: grid;
            gap: 2rem;
            grid: auto / 1fr;

            ${largeScreenQuery} {
              grid: auto / 1fr 1fr;
            }
          `}
        >
          <textarea
            className={css`
              resize: none;
              padding: 1.5rem;
              border: 1px solid rgb(0 0 0 / 60%);
              border-radius: 1rem;
              color: white;
              background-color: rgb(0 0 0);
              font-family: monospace;
            `}
            readOnly
            onFocus={(event) => {
              event.currentTarget.select();
            }}
            onChange={(event) => {
              event.preventDefault();
            }}
            value={bannerSource}
            ref={textAreaRef}
          />
          <div
            className={css`
              display: flex;
              flex-flow: column;
            `}
          >
            <iframe
              className={css`
                width: 40rem;
                height: 20rem;
                border: none;
                background-color: white;
              `}
              ref={frameRef}
            />
            <div>
              <button
                className={css`
                  appearance: none;
                  border: none;
                  background: none;
                  color: white;
                  text-decoration: underline;
                  cursor: pointer;
                `}
                onClick={load}
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
