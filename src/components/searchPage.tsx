<<<<<<< HEAD
import { style } from '@mui/system';
import '../styles/search.css';
import { useLoadScript } from "@react-google-maps/api";
import Map from '../components/map';


const SearchPage = () => {
    const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyBL9SengOBv22kYKJDCPRUSvgt_orH7q0M",
    libraries: ["places"]
    })
    if(!isLoaded)
    return <div>loading...</div>
    return (
        <div>
=======
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
>>>>>>> 65514dbea9938d44e047ff402558f7f77a66af5b
            <Map/>
        </div>
    )
}
export default SearchPage;