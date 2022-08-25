import { GoogleMap } from "@react-google-maps/api";
import React, { useCallback, useMemo, useRef } from "react";
import '../styles/search.css'
// }
type LatLngLiteral = google.maps.LatLngLiteral;
type DirectiosResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map() {
  const mapRef = useRef<GoogleMap>()
  const center = useMemo<LatLngLiteral>(() => ({ lat: 43, lng: -80 }), []);
  const options = useMemo<MapOptions>(() => ({
    mapId: "enter your map id",
    disableDefaultUi: true,
    clickableIcons: true,
  }), []);

  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  return (
    <div className="container">
      <div className="map">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="mapContainer"
          options={options}
          onLoad={onLoad}
        ><div>jj</div></GoogleMap>
      </div>
    </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickAble: false,
  drageAble: false,
  editAble: false,
  visible: true
}

const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A"
};

const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D"
};

const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252"
};

// const genersteHouses = (position:LatLngLiteral) => {
//   const _houses:Array<LatLngLiteral> = [];
// };