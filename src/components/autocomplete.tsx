// import React, { useEffect, useState } from 'react';
// import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
// import { ComboboxPopover, ComboboxList, ComboboxOption, Combobox, ComboboxInput } from "@reach/combobox";
// import '../styles/search.css';
// type placesProps = {
//     setOffice: (position: google.maps.LatLngLiteral) => void;
// }
// const AutoComplete = ({ setOffice }: placesProps) => {
//     const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();
//     const center = { lat: 50.064192, lng: -130.605469 };
//     // Create a bounding box with sides ~10km away from the center point
//     const defaultBounds = {
//         north: center.lat + 0.1,
//         south: center.lat - 0.1,
//         east: center.lng + 0.1,
//         west: center.lng - 0.1,
//     };
//     useEffect(() => {
//         const input = document.getElementById("searchTextField") as HTMLInputElement;
//         const options = {
//             bounds: defaultBounds,
//             componentRestrictions: { country: "us" },
//             fields: ["address_components", "geometry", "icon", "name"],
//             strictBounds: false,
//             types: ["establishment"],
//         };
//         const autocomplete = new window.google.maps.places.Autocomplete(input, options);
//         autocomplete.setFields(["place_id", "geometry", "name"]);
//     }, []);
//     const handleSelect = async (val: string) => {
//         //not working
//         console.log("sdff");
//         setValue(val, false);
//         clearSuggestions();
//         const result = await getGeocode({ address: val });
//         const { lat, lng } = await getLatLng(result[0]);
//         setOffice({ lat, lng });
//     }
//     // window.google.maps.event.addDomListener(window, 'load', initialize);
//     return (
//         // <div>
//         //     <input id="searchTextField" type="text" size={50} placeholder="Anything you want!" />
//         // </div>
//         <div>
//             <header>
//                 <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
//                 <script src="https://ajax.googleapis.com/ajax/libs/handlebars/4.7.7/handlebars.min.js"></script>
//                 <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
//                 <h1 className="search-title">
//                     <img src="https://fonts.gstatic.com/s/i/googlematerialicons/place/v15/24px.svg" />
//                     Find a location near you
//                 </h1>
//                 <div className="search-input">
//                     <input id="searchTextField" placeholder="Enter your address or zip code" onChange={(e) => { setValue(e.target.value); }} />
//                     <div id="search-overlay-search" className="search-input-overlay search">
//                         <button id="location-search-button" type='submit' onSubmit={() => handleSelect(value)}>
//                             <img className="icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/search/v11/24px.svg" alt="Search" />
//                         </button>
//                     </div>
//                     <Combobox>
//                         <ComboboxPopover>
//                             <ComboboxInput id="searchTextField" placeholder="Enter your address or zip code" onChange={(e) => { setValue(e.target.value); }}/>
//                             <ComboboxList>
//                                 {status === "OK" && data.map(({ place_id, description }) => <ComboboxOption
//                                     key={place_id} value={description} />)}
//                             </ComboboxList>
//                         </ComboboxPopover>
//                     </Combobox>
//                 </div>
//             </header>
//         </div>
//     )
// }
// export default AutoComplete;
import React, { useEffect, useState } from 'react';
import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from "@reach/combobox";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { TextField } from '@mui/material';
const values = ["Google, Breithaupt Street, Kitchener, ON, Canada", "Isabella", "Brasov", "Prosperity", "Jerusalem"];
type PlaceProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void;
}
const AutoComplete = ({ setOffice }: PlaceProps) => {
    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();
    const [inputVal, setInputVal] = useState("");
    const center = { lat: 50.064192, lng: -130.605469 };
    const defaultBounds = {
        north: center.lat + 0.1,
        south: center.lat - 0.1,
        east: center.lng + 0.1,
        west: center.lng - 0.1,
    };
    useEffect(() => {
        const input = document.getElementById("searchTextField") as HTMLInputElement;
        const options = {
            bounds: defaultBounds,
            componentRestrictions: { country: "us" },
            fields: ["address_components", "geometry", "icon", "name"],
            strictBounds: false,
            types: ["establishment"],
        };
        const autocomplete = new window.google.maps.places.Autocomplete(input, options);
        autocomplete.setFields(["place_id", "geometry", "name"]);
    }, []);
    const handleSelection = async (val: string) => {
    // const l= document.getElementById("searchTextField").value?document.getElementById("searchTextField").value:"";
        console.log(val) ;

        clearSuggestions();
        const result = await getGeocode({ address: val });

        console.log(result);

        const { lat, lng } = await getLatLng(result[0]);
        setOffice({ lat, lng });
    }
    return (
        <>
            {/* <Combobox onSelect={handleSelection}>
                <h1 className="search-title">
                    <img src="https://fonts.gstatic.com/s/i/googlematerialicons/place/v15/24px.svg" />
                    Find a location near you
                </h1>
                <ComboboxInput value={value} onChange={e => setValue(e.target.value)} disabled={!ready} id="searchTextField" placeholder="Enter your address or zip code" />
                <ComboboxPopover>
                    <ComboboxList>
                        {values.map((val) => (
                            <ComboboxOption value={val} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox> */}
            {/* <input type="search" id="searchTextField" placeholder="Enter your address or zip code" onChange={(e) => { setValue(e.target.value); }} /> */}
            <TextField fullWidth label="" id="searchTextField" placeholder="Enter your address or zip code" onChange={(e) => { setValue(e.target.value); }}/>
            <div id="search-overlay-search" className="search-input-overlay search">
                <button id="location-search-button" type='submit' onClick={() => handleSelection(value)}>
                    <img className="icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/search/v11/24px.svg" alt="Search" />
                </button>
            </div>
        </>
    );
}
export default AutoComplete;