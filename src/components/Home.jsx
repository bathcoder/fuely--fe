import { useState, useEffect} from "react";
import Filter from "./Filter";
import Map from "./Map";
import List from "./List";
import fetchLocation from "../utils/fetchLocation";


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
    //state for user location coordinates
    const [coords, setCoords] = useState({lat: 59.9139, lng:10.7522})
    useEffect(() => {fetchLocation(setCoords)}, [])

    
  return (
    <div>
     
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



// {'name': 'ESSO TESCO OLTON EXPRESS', 'station_id': 'ChIJ7_8A2iS6cEgR-FhkV2HcyoA', 'address': '11 Warwick Rd, Olton, Solihull, Birmingham B92 7HS',
//  'coordinates': {'lat': 52.4426908, 'lng': -1.8116267}, 'price': 0, 'votes': 0}