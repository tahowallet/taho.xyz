import { Vector2d } from "konva/lib/types";
import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

type ImgProps = {
  src: string;
  scale?: number;
  x?: number;
  y?: number;
};

export default function Img(props: ImgProps) {
  const { src, scale = 1, x, y } = props;
  const [image] = useImage(src);

  return <Image x={x} y={y} image={image} scale={{ x: scale, y: scale }} />;
}
