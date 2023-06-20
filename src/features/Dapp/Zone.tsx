import React, { useState } from "react";
import { Path } from "react-konva";

type ZoneProps = {
  path: string;
  width: number;
  height: number;
  x: number;
  y: number;
};

export default function Zone(props: ZoneProps) {
  const { path, width, height, x, y } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Path
      x={x}
      y={y}
      data={path}
      width={width}
      height={height}
      fill={isSelected ? "pink" : "transparent"}
      stroke={isHovered ? "red" : "black"}
      strokeWidth={10}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsSelected((prev) => !prev)}
    />
  );
}
