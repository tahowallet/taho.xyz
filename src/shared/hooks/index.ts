import { useEffect, useState } from "react";

export function useFullHeight() {
  const [height, setHeight] = useState<string | undefined>();

  useEffect(() => {
    const resizeHandler = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      scrollHeight > clientHeight
        ? setHeight(`${scrollHeight}px`)
        : setHeight(`${clientHeight}px`);
    };

    if (typeof document !== "undefined") {
      resizeHandler();
      window.addEventListener("resize", resizeHandler);
      window.addEventListener("scroll", resizeHandler);

      return () => {
        window.removeEventListener("resize", resizeHandler);
        window.removeEventListener("scroll", resizeHandler);
      };
    }
  }, []);

  return height;
}
