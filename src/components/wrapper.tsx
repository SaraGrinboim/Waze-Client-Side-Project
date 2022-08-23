import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Marker } from "..";
const render = (status: Status) => {
  return <h1>{status}</h1>;
};

<Wrapper apiKey={"AIzaSyDjamB5iGG3nZYRbM0INNmUOWXlkRqiRYE"}>
  <Map center={center} zoom={zoom}>
    <Marker position={position} />
  </Map>
</Wrapper>
