import { Widget } from "@typeform/embed-react";
import { css } from "linaria";
import React, { CSSProperties, useEffect } from "react";
import { bgGradient } from "shared/styles/bg-gradients";
import {
  bodyLightGold5,
  bodyDarkGreen20,
} from "shared/styles/colors";
import {
  segmentFontFamily,
  quincyTextFontFamily,
} from "shared/styles/font-families";

css`
  :global() {
    ${bgGradient}

    .container {
      height: 100vh;
      scroll-behavior: smooth;
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
      position: relative;
    }
    .banner h1 {
      color: #D6EAE9;
      font-family: ${quincyTextFontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 42px;
      text-align: center;
      margin: 0.5rem 0;
    }
    .banner p {
      color: ${bodyDarkGreen20};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      width: 430px;
    }
    .banner p span{
      color: #D6EAE9;
    }
    .banner a {
      float: left;
    }
    .branding {
      background: url("../shared/favicon.svg") no-repeat;
      background-size: 100%;
      width: 78.46px;
      height: 80px;
      margin-top: 2rem;
    }
    .social-container {
      max-width: 200px;
      text-align: center;
    }
    .form {
      margin: 1rem 0 2rem;
      width: 599px;
      height: 620px;
      overflow: hidden;
      background: #082C29;
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
      <div className="cover gradient-1" />
      <div className="cover gradient-2" />
      <div className="cover gradient-3" />
      <div className="banner">
        {/* TODO change to gif  */}
        <div className="branding" />
        <h1>We’re sorry to see you go</h1>
        <p>
          Help us build the wallet <span>YOU</span> deserve by answering these two questions?
        </p>
        <Widget id="iEZWGXuv" className="form" />
        <p>Follow us for news on improvements and new features.</p>
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
