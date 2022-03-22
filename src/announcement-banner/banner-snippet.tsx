import { Banner } from "announcement-banner/banner";
import { BannerColorScheme } from "announcement-banner/banner-color-scheme";
import React from "react";

export function BannerSnippet({
  colorScheme,
  inline,
}: {
  colorScheme: BannerColorScheme;
  inline: boolean;
}) {
  return inline ? (
    <Banner colorScheme={colorScheme} />
  ) : (
    <BannerSnippetHead colorScheme={colorScheme} />
  );
}

function BannerSnippetHead({
  colorScheme,
}: {
  colorScheme: BannerColorScheme;
}) {
  return (
    <>
      <template id="tally-banner-template">
        <Banner colorScheme={colorScheme} />
      </template>
      <script
        dangerouslySetInnerHTML={{
          __html: loadScript,
        }}
      ></script>
    </>
  );
}

const loadScript = `window.addEventListener('load',()=>{var d=document;d.body.prepend(d.importNode(d.getElementById('tally-banner-template').content,true))})`;
