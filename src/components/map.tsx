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

import { Circle, GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useMemo, useRef, useState } from "react";
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
    mapId: "AIzaSyBL9SengOBv22kYKJDCPRUSvgt_orH7q0M",
    disableDefaultUi: true,
    clickableIcons: true,
  }), []);

  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  return <div className="container">
    <div className="controls">
      <AutoComplete 
      setOffice={(position: any) => {
        setOffice(position);
        mapRef.current?.panTo(position);
      }} />
    </div>
    <div className="map">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="mapContainer"
        options={options}
        onLoad={onLoad}
      >
        {office && 
        <>
        // icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        (
        <Marker position={office} />
        <Circle center={office} radius={15000} options = { closeOptions }/>
        <Circle center={office} radius={30000} options = { middleOptions }/>
        <Circle center={office} radius={45000} options = { farOptions }/>

        )
        </>
        }

      </GoogleMap>
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