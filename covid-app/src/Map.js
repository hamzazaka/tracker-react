import React from 'react';
import './Map.css'
import { Map as LeafletMap,  TileLayer} from 'react-leaflet'; 

export default function Map({center,zoom}) {
    return (
        <div className="map">
<LeafletMap
  center={center} zoom={zoom}
  >
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />
</LeafletMap>
        </div>
    )
}
