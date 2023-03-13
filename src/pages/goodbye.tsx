import { css } from "linaria";
import React, { useEffect } from "react";
import {
  bodyLightGold5,
  bodyDarkHunterGreen,
  bodyDarkGreen40,
} from "shared/styles/colors";
import {
  segmentFontFamily,
  quincyRegularFontFamily,
} from "shared/styles/font-families";

css`
  :global() {
    .container {
      height: 100vh;
      scroll-behavior: smooth;
      background: ${bodyDarkHunterGreen} url("../shared/images/bg-dark.png")
        no-repeat;
      background-size: cover;
      background-position: center bottom;
      font-size: max(10px, min(1.25vw, 16px));
      font-family: ${segmentFontFamily};
    }
    .banner {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: top;
      height: 100%;
      width: 100%;
      color: ${bodyLightGold5};
    }
    .banner h1 {
      color: #e1953a;
      font-family: ${quincyRegularFontFamily};
      font-size: 48px;
      font-weight: normal;
      margin: 0 auto;
      margin-bottom: 24px;
      padding: 0 30px;
      text-align: center;
    }
    .banner p {
      color: ${bodyDarkGreen40};
      font-size: 18px;
      margin-bottom: 12px;
      padding: 0 20px;
      text-align: center;
    }
    .banner a {
      float: left;
    }
    .branding {
      background: url("../shared/images/logo-dark.svg") no-repeat;
      background-size: 100%;
      width: 300px;
      height: 100px;
      margin-top: 80px;
    }
    .social-container {
      max-width: 200px;
      text-align: center;
    }
  }
`;

function Goodbye() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (window.posthog !== undefined) {
      window.posthog.capture("Uninstall", { distinct_id: params.get("uuid") });
    }

    document.title = 'Goodbye';
  }, []);

  return (
    <div className="container">
      <div className="banner">
        <div className="branding" />
        <h1>We’re sorry to see you go...</h1>
        {/* Drop typeform code here */}
        <p>
          It didn't work out this time, but you can still keep in touch!
        </p>
        <p>To get updates on new features and improvements, follow us on Discord or Twitter.</p>
        <br />
        <br />
        <div className="social-container">
          <SocialIcon
            href="https://chat.taho.xyz"
            icon={{
              width: `24px`,
              height: `24px`,
              src: `url(${require("../features/Footer/Nav/social-icons/discord-light.svg")})`,
              hoverSrc: `url(${require("../features/Footer/Nav/social-icons/discord-hover.svg")})`,
              activeSrc: `url(${require("../features/Footer/Nav/social-icons/discord-click.svg")})`,
            }}
          />
          <SocialIcon
            href="https://twitter.com/taho_xyz"
            icon={{
              width: `28px`,
              height: `24px`,
              src: `url(${require("../features/Footer/Nav/social-icons/twitter-light.svg")})`,
              hoverSrc: `url(${require("../features/Footer/Nav/social-icons/twitter-hover.svg")})`,
              activeSrc: `url(${require("../features/Footer/Nav/social-icons/twitter-click.svg")})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: {
    width: string;
    height: string;
    src: string;
    hoverSrc: string;
    activeSrc: string;
  };
}) {
  return (
    <a
      href={href}
      target="_blank"
      style={
        {
          "--icon-width": icon.width,
          "--icon-height": icon.height,
          "--icon-src": icon.src,
          "--icon-active-src": icon.activeSrc,
          "--icon-hover-src": icon.hoverSrc,
        } as CSSProperties
      }
      className={css`
        display: block;
        position: relative;
        flex: 0 0 auto;
        margin: 0 1rem;
        background-repeat: no-repeat;
        width: 28px;
        height: 28px;
        background: no-repeat center / contain var(--icon-src);

        &:hover {
          background: no-repeat center / contain var(--icon-hover-src);
        }

        &:active {
          background: no-repeat center / contain var(--icon-active-src);
        }

        }
      `}
    />
  );
}

export default Goodbye;
