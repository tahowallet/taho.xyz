import React from "react";

export function BannerPreviewPage({ inline }: { inline: boolean }) {
  return (
    <html style={{ backgroundColor: `#CCCCCC` }}>
      <head>{!inline && `%BANNER%`}</head>
      <body style={{ margin: `0` }}>
        {inline && `%BANNER%`}
        <div style={{ padding: `1rem` }}>
          <h1>Your page content</h1>
          <p>{new Array(30).join(` lorem ipsum dolor sit amet`)}</p>
        </div>
      </body>
    </html>
  );
}
