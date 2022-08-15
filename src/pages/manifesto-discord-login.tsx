import { getDiscordLoginBroadcastChannel } from "features/Manifesto/ManifestoPanel/ManifestoPanelSigned/discord-login";
import { useEffect } from "react";

export default function ManifestoDiscordLogin() {
  useEffect(() => {
    getDiscordLoginBroadcastChannel().postMessage(window.location.hash);
    window.close();
  }, []);

  return null;
}
