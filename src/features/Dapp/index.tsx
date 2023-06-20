import React, { useCallback, useEffect, useState } from "react";
import { Image, Layer, Stage, Text } from "react-konva";
import Map, { MAP_POSITION } from "./Map";
import { Vector2d } from "konva/lib/types";
import Gif from "./Gif";
import MapZones from "./MapZones";
import Img from "./Img";

export default function Dapp() {
  const [scale, setScale] = useState(0.5);
  const [stageDimensions, setStageDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const onDrag = (position: Vector2d) => ({
    x: position.x > MAP_POSITION.start.x ? MAP_POSITION.start.x : position.x,
    y: position.y > MAP_POSITION.start.y ? MAP_POSITION.start.y : position.y,
  });

  const onZoomOut = () =>
    setScale((prevScale) => (prevScale > 0.4 ? prevScale - 0.1 : prevScale));
  const onZoomIn = () =>
    setScale((prevScale) => (prevScale < 0.7 ? prevScale + 0.1 : prevScale));

  const handleResize = useCallback(() => {
    setStageDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div>
      <div>
        <button onClick={onZoomOut}>Zoom out</button>
        <button onClick={onZoomIn}>Zoom in</button>
      </div>
      <Stage
        draggable
        dragBoundFunc={onDrag}
        scale={{ x: scale, y: scale }}
        width={stageDimensions.width}
        height={stageDimensions.height}
      >
        <Layer>
          <Map />
          <MapZones />
          <Gif src="/dapp_meme.gif" x={2000} y={2000} />
          <Img src="/dapp_building.png" x={600} y={300} scale={0.7}/>
        </Layer>
      </Stage>
    </div>
  );
}
