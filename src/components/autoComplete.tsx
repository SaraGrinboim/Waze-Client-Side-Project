import React from 'react';
// import google from 'google';
<script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBL9SengOBv22kYKJDCPRUSvgt_orH7q0M&libraries=places&callback=initMap">
</script>
const AutoComplete = () => {
    const center = { lat: 50.064192, lng: -130.605469 };
    // Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
        north: center.lat + 0.1,
        south: center.lat - 0.1,
        east: center.lng + 0.1,
        west: center.lng - 0.1,
    };
    const input = document.getElementById("pac-input") as HTMLInputElement;
    const options = {
        bounds: defaultBounds,
        componentRestrictions: { country: "us" },
        fields: ["address_components", "geometry", "icon", "name"],
        strictBounds: false,
        types: ["establishment"],
    };

    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.setFields(["place_id", "geometry", "name"]);

    return (
        <div>

            <input id="searchTextField" type="text" size={50} placeholder="Anything you want!" />
        </div>
    )

}
export default AutoComplete;




