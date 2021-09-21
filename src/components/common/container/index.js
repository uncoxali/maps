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
        {data?.map((i) => (
          <Marker
            key={i?.id}
            position={[i?.location?.latitude, i?.location?.longitude]}
          >
            <Tooltip className="leaflet-container" sticky>
              <div className="popup">
                <div>
                  Name : <span className="text-color">{i?.name}</span>
                </div>
                <hr />
                <div>
                  Company : <span className="text-color">{i?.company}</span>
                </div>
                <hr />
                <div>
                  City : <span className="text-color">{i?.location?.city}</span>
                </div>
                <hr />
                <div>
                  Country :{" "}
                  <span className="text-color">{i?.location?.country}</span>
                </div>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
