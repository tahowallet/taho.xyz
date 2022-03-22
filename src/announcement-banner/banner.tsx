import { BannerColorScheme } from "announcement-banner/banner-color-scheme";
import React from "react";

export function Banner({ colorScheme }: { colorScheme: BannerColorScheme }) {
  return (
    <div
      style={{
        padding: `1rem 2rem`,
        backgroundColor: colorScheme.background,
        color: colorScheme.foreground,
        textAlign: `center`,
        overflow: `hidden`,
        fontSize: `0.875rem`,
        fontFamily: `Helvetica,sans-serif`,
      }}
    >
      <div
        style={{
          float: `right`,
          padding: `1rem`,
          margin: `-1rem 0`,
          marginRight: `-2rem`,
          background: `none`,
          cursor: `pointer`,
        }}
        attr-onclick="this.parentElement.remove()"
      >
        &times;
      </div>
      <img
        style={{ margin: `-0.5rem -0.5rem -2.5rem` }}
        src={`${
          process.env.NODE_ENV === "development"
            ? `http://localhost:8000`
            : `https://tally.cash`
        }/banner-icon.svg`}
      />
      We&rsquo;re partnering with Tally Ho! The community-owned Web3 wallet.{" "}
      <a
        style={{ color: colorScheme.foreground }}
        target="_blank"
        href="https://tally.cash"
      >
        Try it now!
      </a>
    </div>
  );
}
