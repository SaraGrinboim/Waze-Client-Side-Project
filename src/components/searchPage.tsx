import React from 'react';
import '../styles/search.css'
import AutoComplete from './autocomplete'
import { useLoadScript } from "@react-google-maps/api";
import Map from '../components/map';

const SearchPage = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey:"AIzaSyDjamB5iGG3nZYRbM0INNmUOWXlkRqiRYE",
        libraries: ["places"]
        })
        if(!isLoaded)
        return <div>loading...</div>
    return (
        <div>
            <AutoComplete/>
            <Map/>
        </div>
    )
}
export default SearchPage;