import React from "react";
import zones from "./zones";
import Zone from "./Zone";

export default function MapZones() {
  return (
    <>
      {zones.map((zone) => (
        <Zone {...zone} />
      ))}
    </>
  );
}
