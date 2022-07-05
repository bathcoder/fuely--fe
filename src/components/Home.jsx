import { useState, useEffect } from "react";
import Filter from "./Filter";
import Map from "./Map";
import List from "./List";
import fetchLocation from "../utils/fetchLocation";
import { getAllStations } from "../utils/api";
import "../styles/App.css";

const Home = () => {
  //remove this at some point
  const user = { user: "guest" };

  const [displayType, setDisplayType] = useState("map");
  const [allStations, setAllStations] = useState([]);
  const [loadingLocations, setLoadingLocations] = useState(true);

  //state which holds prices that are being shown on map/list
  const [shownPrices, setShownPrices] = useState();

  //state for user location coordinates
  //change to not have a default, set loading behavaiour
  const [coords, setCoords] = useState(null);

  //this updates the location with users coords on iniital render if user allows location
  useEffect(() => {
    fetchLocation(setCoords);
  }, []);

  // Sends API request for all stations array when coords changes, like if theyre set by geolocate.
  useEffect(() => {
    if (coords) {
      setLoadingLocations(true);
      setAllStations([])

      getAllStations(coords, user).then((data) => {
        setAllStations(data.allStations);
        setLoadingLocations(false);
      });
    }
  }, [coords]);

  return (
    <div className="Home">
      <Filter
        setDisplayType={setDisplayType}
        displayType={displayType}
        setCoords={setCoords}
        allStations={allStations}
        setAllStations={setAllStations}
      />

      {displayType === "map" ? (
        <Map allStations={allStations} coords={coords} />
      ) : (
        <List allStations={allStations} coords={coords} />
      )}
    </div>
  );
};

export default Home;
