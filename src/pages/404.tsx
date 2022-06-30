import { css } from "linaria";
import React from "react";
import { bodyLightGold5 } from "shared/styles/colors";

const NotFoundPage = () => (
  <div
    className={css`
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: ${bodyLightGold5};
    `}
  >
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
