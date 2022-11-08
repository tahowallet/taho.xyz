import { css } from "linaria";
import React from "react";
import { bodyLightGold5, bodyDarkHunterGreen } from "shared/styles/colors";
import { segmentFontFamily } from "shared/styles/font-families";
import { quincyRegularFontFamily } from "shared/styles/font-families";

css`
  :global() {
    html {
      height: 100vh;
      scroll-behavior: smooth;
      background: ${bodyDarkHunterGreen} url("../shared/images/bg-dark.png") no-repeat;
      background-size: cover;
      background-position: center bottom;
      font-size: max(10px, min(1.25vw, 16px));
      font-family: ${segmentFontFamily};
    }
    h1 {
      color: #E1953A;
      font-family: ${quincyRegularFontFamily};
      font-size: 58px;
      margin: 0 auto;
      margin-bottom: 60px;
      padding: 0 30px;
    }
    .banner {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: ${bodyLightGold5};
    }
    .branding {
      background: url("../shared/images/logo-dark.svg") no-repeat;
      background-size: 100%;
      width: 350px;
      height: 120px;
      margin-top: 60px;
    }
    .placeholder {
      background: url("../shared/images/doggo-sad.png") no-repeat;
      background-size: 100%;
      width: 350px;
      height: 350px;
      margin: auto;
    }
  }
`;

const Goodbye = () => (

  <div className="banner">
    <div className="branding"/>
    <h1>We’re sorry to see you go 🙁</h1>
    {/* Drop typeform code here */}
    <div className="placeholder"/>
  </div>
);

export default Goodbye;
