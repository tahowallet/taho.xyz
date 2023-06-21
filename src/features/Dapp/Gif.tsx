// @ts-nocheck
import React, { useEffect, useMemo, useRef } from "react";
import { Image } from "react-konva";
import "gifler";
import { isBrowser } from "shared/utils";

type GifProps = {
  src: string;
  x?: number;
  y?: number;
};

// TODO not sure if gifler is the best library to use here, there is no ts support
export default function Gif(props: GifProps) {
  const { src, x, y } = props;
  const imageRef = useRef(null);
  const canvas = useMemo(() => {
    return document.createElement("canvas");
  }, []);

  useEffect(() => {
    let anim;
    if (isBrowser) {
      window.gifler(src).get((a) => {
        anim = a;
        anim.animateInCanvas(canvas);
        anim.onDrawFrame = (ctx, frame) => {
          ctx.drawImage(frame.buffer, frame.x, frame.y);
          imageRef.current?.getLayer().draw();
        };
      });
    }
    return () => anim?.stop();
  }, [src, canvas]);

  return <Image x={x} y={y} image={canvas} ref={imageRef} />;
}
