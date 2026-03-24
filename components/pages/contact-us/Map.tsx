"use client";
import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import type { Tooltip as TP } from "leaflet";

// Fix for default marker icons not showing up in React builds

let DefaultIcon = L.icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const MyMap = () => {
  const position = [5.447019761751152, 10.076910444180669]; // [Latitude, Longitude]
  const tooltip = useRef<TP | null>(null);
  return (
    <div
      style={{
        height: "400px",
        width: "100%",
        zIndex: 0,
        position: "relative",
      }}
    >
      <MapContainer
        center={{ lat: position[0], lng: position[1] }}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        {/* The TileLayer provides the actual map imagery (OpenStreetMap) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* The Marker and its Callout (Popup) */}
        <Marker position={{ lat: position[0], lng: position[1] }}>
          <Tooltip ref={tooltip} permanent sticky>
            <strong>StONEFARMS</strong> <br />
            Sustainable agriculture engineering.
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
