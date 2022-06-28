import { useState } from "react";
import Filter from "./Filter";
import Map from "./Map";
import List from "./List";
import GeoLocation from "./GeoLocation";

const Home = () => {
    //state for how data is displayed (map or list)
  const [displayType, setDisplayType] = useState("map");
    //state for array of all station objects (from API)
  const [allStations, setAllStations] = useState([
    {
      station_id: "1",
      station_name: "Station 1",
      lat: 44,
      lng: -80,
      fuel_type: "petrol",
      street_address: "123 Main St",
      distance_from_center: 1.2,
      price_petrol_main: 198.9,
      updated: "22/6/22 14:32",
      price_petrol_five: {
        price1: {
          price: 198.9,
          time: "PICK SOME GOOD FORMAT FOR THIS",
          trust: 99,
        },
        price2: {
          price: 198.9,
          time: "PICK SOME GOOD FORMAT FOR THIS",
          trust: 99,
        },
      },
    },
    {
      station_id: "2",
      station_name: "Station 1",
      lat: 44,
      lng: -79,
      fuel_type: "petrol",
      street_address: "123 Main St",
      distance_from_center: 1.1,
      price_petrol_main: 198.9,
      updated: "22/6/22 14:00",
      price_petrol_five: {
        price1: {
          price: 198.9,
          time: "PICK SOME GOOD FORMAT FOR THIS",
          trust: 99,
        },
        price2: {
          price: 198.9,
          time: "PICK SOME GOOD FORMAT FOR THIS",
          trust: 99,
        },
      },
    },
  ]);
    //state for user location coordinates
    const [coords, setCoords] = useState()

  return (
    <div>
        <GeoLocation setCoords={setCoords} />
      <Filter setDisplayType={setDisplayType} displayType={displayType} />
      {displayType === "map" ? (
        <Map allStations={allStations} coords={coords} />
      ) : (
        <List allStations={allStations} />
      )}
    </div>
  );
};

export default Home;
