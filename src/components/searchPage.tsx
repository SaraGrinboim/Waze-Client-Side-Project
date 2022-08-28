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
            <Map/>
        </div>
    )
}
export default SearchPage;


