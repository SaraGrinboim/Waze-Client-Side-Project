import React, { useEffect, useState } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
// import google from 'google';
import '../styles/search.css';
type placesProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void;
}
const AutoComplete = ({ setOffice }: placesProps) => {
    const {ready, value, setValue, suggestions:{status, data}, clearSuggestions} = usePlacesAutocomplete();
    const center = { lat: 50.064192, lng: -130.605469 };
    // Create a bounding box with sides ~10km away from the center point
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
    const handleSelect = async (val: string) => {
        //not working
        setValue(val, false);
        clearSuggestions();
        const result = await getGeocode({ address: val });
        const {lat, lng} = await getLatLng(result[0]);
        setOffice({lat, lng});
    }
     // window.google.maps.event.addDomListener(window, 'load', initialize);
    return (
        // <div>
        //     <input id="searchTextField" type="text" size={50} placeholder="Anything you want!" />
        // </div>
        <div>
            <header>
                <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/handlebars/4.7.7/handlebars.min.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
                <h1 className="search-title">
                    <img src="https://fonts.gstatic.com/s/i/googlematerialicons/place/v15/24px.svg" />
                    Find a location near you
                </h1>
                <div className="search-input">
                    <input id="searchTextField" placeholder="Enter your address or zip code"  onChange = {(e)=>{setValue(e.target.value);}}/>
                    <div id="search-overlay-search" className="search-input-overlay search">
                        <button id="location-search-button" type='submit' onSubmit={ ()=> handleSelect(value) }>
                            <img className="icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/search/v11/24px.svg" alt="Search" />
                        </button>
                    </div>
                    <ComboboxPopover>
                        <ComboboxList>
                            {status==="OK" && data.map(({place_id, description})=><ComboboxOption
                            key = {place_id} value={description}/>)}
                        </ComboboxList>
                    </ComboboxPopover>
                </div>
            </header>
        </div>
    )
}
export default AutoComplete;import React, { useEffect, useState } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
// import google from 'google';
import '../styles/search.css';
type placesProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void;
}
const AutoComplete = ({ setOffice }: placesProps) => {
    const {ready, value, setValue, suggestions:{status, data}, clearSuggestions} = usePlacesAutocomplete();
    const center = { lat: 50.064192, lng: -130.605469 };
    // Create a bounding box with sides ~10km away from the center point
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
    const handleSelect = async (val: string) => {
        //not working
        setValue(val, false);
        clearSuggestions();
        const result = await getGeocode({ address: val });
        const {lat, lng} = await getLatLng(result[0]);
        setOffice({lat, lng});
    }
     // window.google.maps.event.addDomListener(window, 'load', initialize);
    return (
        // <div>
        //     <input id="searchTextField" type="text" size={50} placeholder="Anything you want!" />
        // </div>
        <div>
            <header>
                <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/handlebars/4.7.7/handlebars.min.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
                <h1 className="search-title">
                    <img src="https://fonts.gstatic.com/s/i/googlematerialicons/place/v15/24px.svg" />
                    Find a location near you
                </h1>
                <div className="search-input">
                    <input id="searchTextField" placeholder="Enter your address or zip code"  onChange = {(e)=>{setValue(e.target.value);}}/>
                    <div id="search-overlay-search" className="search-input-overlay search">
                        <button id="location-search-button" type='submit' onSubmit={ ()=> handleSelect(value) }>
                            <img className="icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/search/v11/24px.svg" alt="Search" />
                        </button>
                    </div>
                    <ComboboxPopover>
                        <ComboboxList>
                            {status==="OK" && data.map(({place_id, description})=><ComboboxOption
                            key = {place_id} value={description}/>)}
                        </ComboboxList>
                    </ComboboxPopover>
                </div>
            </header>
        </div>
    )
}
export default AutoComplete;