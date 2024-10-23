import React from "react";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../Pin/Pin";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function MyMap({ items }) {
  return (
    <MapContainer
      className="map"
      center={[19.6964, 72.7652]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default MyMap;
