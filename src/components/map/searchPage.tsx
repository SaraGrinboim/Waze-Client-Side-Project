import '../../styles/search.css';
import { useLoadScript } from "@react-google-maps/api";
import Map from './map';
import CreateLocation from '../createLocation';

const SearchPage = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBL9SengOBv22kYKJDCPRUSvgt_orH7q0M",
        libraries: ["places"]
    })
    if (!isLoaded)
        return <div>loading...</div>
    return (
        <div>
            <Map/>
            <CreateLocation/>
        </div>
    )
}
export default SearchPage;


