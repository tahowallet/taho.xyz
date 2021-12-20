import { useEffect, useState } from "react";

export function useIsBraveBrowser() {
  const [isBrave, setIsBrave] = useState(false);

  useEffect(() => {
    // https://github.com/brave/brave-browser/issues/10165
    (navigator as any)?.brave?.isBrave().then(setIsBrave);
  });

  return isBrave;
}
