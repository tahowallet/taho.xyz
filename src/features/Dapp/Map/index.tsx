import React, { useEffect, useState } from "react";
import { Image } from "react-konva";
import useImage from "use-image";

export const MAP_POSITION = {
  start: {
    x: 0,
    y: -5,
  },
  end: {
    x: 5540,
    y: 3103,
  },
};

export default function Map() {
  const [mapImage] = useImage("/dapp_map.png");

  return (
    <Image
      image={mapImage}
      x={MAP_POSITION.start.x}
      y={MAP_POSITION.start.y}
      width={MAP_POSITION.end.x}
      height={MAP_POSITION.end.y}
    />
  );
}
