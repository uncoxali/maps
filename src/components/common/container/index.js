import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

import "./style.css";

export default function maps({ data }) {
  return (
    <>
      <MapContainer
        style={{ width: "100vw", height: "100vw" }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map((map) => (
          <Marker
            key={map?.id}
            position={[map?.location?.latitude, map?.location?.longitude]}
          >
            <Tooltip className="leaflet-container" sticky>
              <div className="popup">
                <div>
                  Name : <span className="text-color">{map?.name}</span>
                </div>
                <hr />
                <div>
                  Company : <span className="text-color">{map?.company}</span>
                </div>
                <hr />
                <div>
                  City :{" "}
                  <span className="text-color">{map?.location?.city}</span>
                </div>
                <hr />
                <div>
                  Country :{" "}
                  <span className="text-color">{map?.location?.country}</span>
                </div>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
