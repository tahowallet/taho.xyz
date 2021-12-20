import { textLight } from "layout/colors";
import { Layout } from "layout/layout";
import { css } from "linaria";
import React from "react";

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <div
      className={css`
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        color: ${textLight};
      `}
    >
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
