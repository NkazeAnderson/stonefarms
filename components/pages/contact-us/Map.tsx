"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const iconUrl = new URL("leaflet/dist/images/marker-icon.png", import.meta.url)
  .href;
const iconRetinaUrl = new URL(
  "leaflet/dist/images/marker-icon-2x.png",
  import.meta.url,
).href;
const shadowUrl = new URL(
  "leaflet/dist/images/marker-shadow.png",
  import.meta.url,
).href;

const defaultIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
});

L.Marker.prototype.options.icon = defaultIcon;

const MyMap = () => {
  const position: [number, number] = [5.447019761751152, 10.076910444180669];

  return (
    <div className="relative h-[400px] w-full">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Tooltip permanent sticky>
            <strong>StONEFARMS</strong>
            <br />
            Sustainable agriculture engineering.
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
