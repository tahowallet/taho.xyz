import { css } from "linaria";
import { sectionBackgroundGold5 } from "shared/styles/colors";

css`
  :global() {
    html {
      height: 100vh;
      scroll-behavior: smooth;
      background: ${sectionBackgroundGold5};
      font-size: max(10px, min(1.25vw, 16px));
    }

    * {
      box-sizing: border-box;
      margin: unset;
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }

    @font-face {
      font-family: "QuincyCF-Regular";
      src: url("../fonts/quincy-cf/quincy-cf.woff2") format("woff2");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "QuincyCF-Text";
      src: url("../fonts/quincy-cf-text/quincy-cf-text.woff2") format("woff2");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "Segment-Regular";
      src: url("../fonts/segment-regular/segment-regular.woff2") format("woff2");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "Segment-Bold";
      src: url("../fonts/segment-bold/segment-bold.woff2") format("woff2");
      font-weight: normal;
      font-style: normal;
    }
  }
`;
