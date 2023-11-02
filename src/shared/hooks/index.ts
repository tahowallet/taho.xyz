import { useEffect, useState } from "react";

export function useFullHeight() {
  const [height, setHeight] = useState<string | undefined>();

  useEffect(() => {
    const resizeHandler = () => {
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = document.body.clientHeight;

      if (scrollHeight > clientHeight) {
        setHeight(`${scrollHeight + 1}px`); // adding missing pixel
      } else {
        setHeight(`${clientHeight}px`);
      }
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [document.body.scrollHeight, document.body.clientHeight]);

  return height;
}
