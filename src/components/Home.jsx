import { useState } from "react";
import Filter from "./Filter";
import Map from "./Map";
import List from "./List";

const Home = () => {
  const [displayType, setDisplayType] = useState("map");
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

  return (
    <div>
      <Filter setDisplayType={setDisplayType} displayType={displayType} />
      {displayType === "map" ? (
        <Map allStations={allStations} />
      ) : (
        <List allStations={allStations} />
      )}
    </div>
  );
};

export default Home;
