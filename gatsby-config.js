require("dotenv").config({
  path: `.env.${process.env.TARGET_ENV ?? "dev"}`,
});

module.exports = {
  siteMetadata: {
    title: `Taho — The community owned & operated wallet`,
    description: ``,
    image: `https://taho.xyz/cover.png`, // Twitter wants an absolute rather than relative url.
    author: `@thesis_co`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Taho — The community owned & operated wallet`,
        short_name: `Taho`,
        start_url: `/`,
        background_color: `#fbf9f2`,
        theme_color: `#fbf9f2`,
        display: `minimal-ui`,
        icon: `src/shared/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-linaria`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://tallycash.matomo.cloud",
        siteUrl: "https://tallyho.org",
      },
    },
    {
      resolve: `gatsby-plugin-twitter-pixel`,
      options: {
        pixelId: "o9kgt",
      },
    },
    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        apiKey: "phc_VzveyNxrn2xyiKDYn7XjrgaqELGeUilDZGiBVh6jNmh",
        initOptions: {
          persistence: "localStorage",
          autocapture: false,
          capture_pageview: false,
          disable_session_recording: true,
        },
      },
    },
  ],
};
