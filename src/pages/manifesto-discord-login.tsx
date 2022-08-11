import { discordLoginChannel } from "features/Manifesto/ManifestoPanel/ManifestoSignedPanel/discord-login";
import { useEffect } from "react";

export default function ManifestoDiscordLogin() {
  useEffect(() => {
    discordLoginChannel.postMessage(window.location.hash);
    window.close();
  }, []);

  return null;
}
