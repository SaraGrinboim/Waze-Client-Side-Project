const AutoComplete = () => {
/** When the search input capability is enabled, initialize it. */
function initializeSearchInput(locator) {
    const geocodeCache = new Map();
    const geocoder = new google.maps.Geocoder();

    const searchInputEl = document.getElementById('location-search-input');
    const searchButtonEl = document.getElementById('location-search-button');

    const updateSearchLocation = function(address, location) {
      if (locator.searchLocationMarker) {
        locator.searchLocationMarker.setMap(null);
      }
      if (!location) {
        locator.searchLocation = null;
        return;
      }
      locator.searchLocation = {'address': address, 'location': location};
      locator.searchLocationMarker = new google.maps.Marker({
        position: location,
        map: locator.map,
        title: 'My location',
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: '#3367D6',
          fillOpacity: 0.5,
          strokeOpacity: 0,
        }
      });

      // Update the locator's idea of the user's country, used for units. Use
      // `formatted_address` instead of the more structured `address_components`
      // to avoid an additional billed call.
      const addressParts = address.split(' ');
      locator.userCountry = addressParts[addressParts.length - 1];

      // Update map bounds to include the new location marker.
      locator.updateBounds();

    const geocodeSearch = function(query) {
      if (!query) {
        return;
      }

      const handleResult = function(geocodeResult) {
        searchInputEl.value = geocodeResult.formatted_address;
        updateSearchLocation(
            geocodeResult.formatted_address, geocodeResult.geometry.location);
      };

      if (geocodeCache.has(query)) {
        handleResult(geocodeCache.get(query));
        return;
      }
      const request = {address: query, bounds: locator.map.getBounds()};
      geocoder.geocode(request, function(results, status) {
        if (status === 'OK') {
          if (results.length > 0) {
            const result = results[0];
            geocodeCache.set(query, result);
            handleResult(result);
          }
        }
      });
    };

    // Set up geocoding on the search input.
    searchButtonEl.addEventListener('click', function() {
      geocodeSearch(searchInputEl.value.trim());
    });

    // Initialize Autocomplete.
    initializeSearchInputAutocomplete(
        locator, searchInputEl, geocodeSearch, updateSearchLocation);
  }

  /** Add Autocomplete to the search input. */
  function initializeSearchInputAutocomplete(
      locator, searchInputEl, fallbackSearch, searchLocationUpdater) {
    // Set up Autocomplete on the search input. Bias results to map viewport.
    const autocomplete = new google.maps.places.Autocomplete(searchInputEl, {
      types: ['geocode'],
      fields: ['place_id', 'formatted_address', 'geometry.location']
    });
    autocomplete.bindTo('bounds', locator.map);
    autocomplete.addListener('place_changed', function() {
      const placeResult = autocomplete.getPlace();
      if (!placeResult.geometry) {
        // Hitting 'Enter' without selecting a suggestion will result in a
        // placeResult with only the text input value as the 'name' field.
        fallbackSearch(placeResult.name);
        return;
      }
      searchLocationUpdater(
          placeResult.formatted_address, placeResult.geometry.location);
    });
  }

    return (
        <header>
            <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/handlebars/4.7.7/handlebars.min.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
            <h1 className="search-title">
                <img src="https://fonts.gstatic.com/s/i/googlematerialicons/place/v15/24px.svg" />
                Find a location near you
            </h1>
            <div className="search-input">
                <input id="location-search-input" placeholder="Enter your address or zip code" />
                <div id="search-overlay-search" className="search-input-overlay search">
                    <button id="location-search-button">
                        <img className="icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/search/v11/24px.svg" alt="Search" />
                    </button>
                </div>
            </div>
        </header>
    )

}
export default AutoComplete;