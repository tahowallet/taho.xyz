import { openTwitterTweetIntent } from "features/Manifesto/ManifestoPanel/ManifestoPanelSigned/twitter";

export function shareOnTwitter() {
  openTwitterTweetIntent({
    text: `I signed Tally Ho petition.`,
    url: location.href,
  });
}
