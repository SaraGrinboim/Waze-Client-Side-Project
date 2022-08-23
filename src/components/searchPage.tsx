
import '../styles/search.css'
const SearchPage = () => {

    return (
        <div>
<header>
            <h1 className="search-title">
              <img src="https://fonts.gstatic.com/s/i/googlematerialicons/place/v15/24px.svg"/>
              Find a location near you
            </h1>
            <div className="search-input">
              <input id="location-search-input" placeholder="Enter your address or zip code"/>
              <div id="search-overlay-search" className="search-input-overlay search">
                <button id="location-search-button">
                  <img className="icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/search/v11/24px.svg" alt="Search"/>
                </button>
              </div>
            </div>
          </header>
        </div>
    )

}
export default SearchPage;