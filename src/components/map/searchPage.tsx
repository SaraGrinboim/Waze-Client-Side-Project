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
<<<<<<< HEAD
            <Map/>
            <CreateLocation/>
=======
            <Map />
>>>>>>> d18067cba7bf3feabc75a734de1907b8cf6abc67
        </div>
    )
}
export default SearchPage;


