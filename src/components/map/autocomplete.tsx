
import React, { useEffect, useState } from 'react';
import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from "@reach/combobox";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { TextField } from '@mui/material';
type PlaceProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void;
}
const Auto = ({ setOffice }: PlaceProps) => {
    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();
    const [inputVal, setInputVal] = useState("");
    const center = { lat: 70.064192, lng: -130.605469 };
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
            // componentRestrictions: { country: "us" },
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
export default Auto;