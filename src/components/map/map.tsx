import { Circle, DirectionsRenderer, GoogleMap, Marker, MarkerClusterer, MarkerClustererProps } from "@react-google-maps/api";
// , MarkerClusterer, useLoadScript
import React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import locationStore from "../../api/location";

// import Auto from './autocomplete'
import '../../styles/search.css';
import Auto from "./autocomplete";

// }
type LatLngLiteral = google.maps.LatLngLiteral;
type DirectiosResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;
export default function Map() {
  const [office, setOffice] = useState<LatLngLiteral>();
  const [directions, setDirections] = useState<DirectiosResult>();
  const [zoom, setZoom] = useState(9);
  const mapRef = useRef<GoogleMap>()

  const center = useMemo<LatLngLiteral>(() => ({ lat: 43, lng: -80 }), []);
  const JerusalemPosition = useMemo<LatLngLiteral>(() => ({ lat: 31.771959, lng: 35.217018 }), []);
  const options = useMemo<MapOptions>(() => ({
    // mapId: "AIzaSyBL9SengOBv22kYKJDCPRUSvgt_orH7q0M",
    disableDefaultUi: true,
    clickableIcons: true,
  }), []);
  useEffect(() => {
    locationStore.location = office;
    console.log(office);
  }, [office])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setOffice({ lat: position.coords.latitude, lng: position.coords.longitude });
        // window.console.log(position.coords.latitude)
      });
    }
    // navigator.geolocation.getCurrentPosition(function(position){
    // setOffice({lat:position.coords.latitude,lng:position.coords.longitude});})
  }, []);

  const optionsMarker = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  };

  const onLoad = useCallback((map: any) => (mapRef.current = map), []);
  const houses = useMemo(() => generateHouses(center), [center]);
  const fetchDirections = (_houses: LatLngLiteral) => {
    if (!office) return;
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: _houses,
        destination: office,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    )
  };

  return <div className="container">
    <div className="controls">
      <Auto
        setOffice={(position: any) => {
          setOffice(position);
          mapRef.current?.panTo(position);
        }} />
    </div>
    <div className="map">
      <GoogleMap zoom={zoom} center={office} mapContainerClassName={"mapContainer"} onLoad={onLoad} >
        <>
          {/* { && <Marker position={office} />} */}
        </>
        {directions && <DirectionsRenderer directions={directions} options={{ polylineOptions:{
          zIndex:50,
          strokeColor:"#1976D2",
          strokeWeight:5
        }}}/>}
        {/* {directions && <DirectionsRenderer directions={directions} />} */}
        {office && (
          <>
            <Marker position={office} />

            <MarkerClusterer>
              {(clusterer:any|MarkerClustererProps | Readonly<MarkerClustererProps>): any=>
               houses.map((h:any) => (
              <Marker
               key={h.lat}
                position={h}
                clusterer={clusterer}
                onClick={()=>{
                  fetchDirections(h)
                }}
                />
                ))
                }
             </MarkerClusterer>
            <Circle center={office} radius={15000} options={closeOptions} />
            <Circle center={office} radius={30000} options={middleOptions} />
            <Circle center={office} radius={45000} options={farOptions} />
          </>
        )}
      </GoogleMap>
    </div>
  </div>
};

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickAble: false,
  drageAble: false,
  editAble: false,
  visible: true
};

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

const generateHouses = (position: LatLngLiteral) => {
  const houses: Array<LatLngLiteral> = [];
  for (let i = 0; i < 5; i++) {
    const direction = Math.random() < 0.5 ? -0.1 : 0.1;
    houses.push({
      lat: position.lat * Math.random() / direction,
      lng: position.lng * Math.random() / direction,
    });
  }
  houses.push({lat: 31.9023394, lng: 35.027524});
  houses.push({lat: 31.849598, lng: 35.034977});
  return houses;
};