// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// export default function Map() {
//   const center = useMemo(() => ({ lat: 32, lng: 35 }), [])
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBL9SengOBv22kYKJDCPRUSvgt_orH7q0M",
//   });
//   if (!isLoaded) return <div>isLoading...</div>
//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainer">
//       <Marker position={center}></Marker>
//     </GoogleMap>);

import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useMemo, useRef, useState} from "react";
import AutoComplete from "../components/autoComplete";
import '../styles/search.css';
// }
type LatLngLiteral = google.maps.LatLngLiteral;
type DirectiosResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;


export default function Map() {
  const [office, setOffice] = useState<LatLngLiteral>();
  const mapRef = useRef<GoogleMap>()
  const center = useMemo<LatLngLiteral>(() => ({ lat: 43, lng: -80 }), []);
  const options = useMemo<MapOptions>(() => ({
    mapId:"enter your map id",
    disableDefaultUi: true,
    clickableIcons: true,
  }), []);

  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  return <div className="container">
    <div className="controls">
    <AutoComplete setOffice = {(posinion:any)=>{
        setOffice(posinion);
        mapRef.current?.panTo(posinion);
    }}/>
    </div>
    <div className="map">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="mapContainer"
        options={options}
        onLoad={onLoad}
      ></GoogleMap>
    </div>
  </div>
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