export type TwitterTweetIntentOptions = {
  text?: string;
  url?: string;
  via?: string;
  hashtags?: string; // Comma-separated
} & Record<string, string>;

export function openTwitterTweetIntent(options: TwitterTweetIntentOptions) {
  openTwitterIntentUrl(twitterTweetIntentUrl(options));
}

export function openTwitterIntentUrl(href: string) {
  const width = 600;
  const height = 640;

  const screenHeight = screen.height;
  const screenWidth = screen.width;

  const windowOptions = {
    scrollbars: "yes",
    resizable: "yes",
    toolbar: "no",
    location: "yes",
    width,
    height,
    left: Math.round(screenWidth / 2 - width / 2),
    top: screenHeight > height ? Math.round(screenHeight / 2 - height / 2) : 0,
  };

  window.open(
    href,
    "intent",
    Object.entries(windowOptions)
      .map(([key, value]) => `${key}=${value}`)
      .join(",")
  );
}

export function twitterTweetIntentUrl(parameters: TwitterTweetIntentOptions) {
  return `https://twitter.com/intent/tweet?${new URLSearchParams(
    parameters
  ).toString()}`;
}
