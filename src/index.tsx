import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './provider/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

export const ref = React.useRef<HTMLDivElement>(null);
const [map, setMap] = React.useState<google.maps.Map>();
React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);

// because React does not do deep comparisons, a custom hook is used
// see discussion in https://github.com/googlemaps/js-samples/issues/946
// useDeepCompareEffectForMaps(() => {
//   if (map) {
//     map.setOptions(options);
//   }
// }, [map, options]);

React.useEffect(() => {
  if (map) {
    ["click", "idle"].forEach((eventName) =>
      google.maps.event.clearListeners(map, eventName)
    );

    if (onclick) {
      map.addListener("click", onclick);
    }

    if (onIdle) {
      map.addListener("idle", () => onIdle(map));
    }
  }
}, [map, onclick, onIdle]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );};
root.render(
  <React.StrictMode>

    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
function useDeepCompareEffectForMaps(arg0: () => void, arg1: any[]) {
  throw new Error('Function not implemented.');
}

function onIdle(map: google.maps.Map) {
  throw new Error('Function not implemented.');
}

function children(children: any, arg1: (child: any) => React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement> | undefined) {
  throw new Error('Function not implemented.');
}

