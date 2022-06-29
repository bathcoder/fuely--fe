import {
  GoogleMap,
  Marker,
} from "@react-google-maps/api";

import fuelIcon from "../images/fuel-pump_26fd.png";

function MapConfig({allStations, coords}) {
//   const [markers, setMarkers] = useState([
//     { lat: 44, lng: -80 },
//     { lat: 44.001, lng: -80.001 },
//     { lat: 44.001, lng: -80.004 },
//     { lat: 44.001, lng: -80.008 },
//   ]);
//line 18 needs to change, to users current location/search bar entry in home component, eventually.
  // const center = useMemo(() => ({ allStations:[], user:default, lat: 44, lng: -80 }), []);

  const center = coords;
  console.log(`passed cords: ${center}`);
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map_container">
      {allStations.map((station, index) => {
        //change key to be unique station_id
        return (
          <Marker
            className="marker"
            key={station.station_id}
            position={{ lat: station.lat, lng: station.lng }}
            label={{ text: `${station.price_petrol_main}p`, fontSize: "15px", fontWeight: "bold" }}
            icon={{
              url: fuelIcon,
              scaledSize: new window.google.maps.Size(50, 50),
              labelOrigin: new window.google.maps.Point(20, -10),
            }}
          />
        );
      })}
    </GoogleMap>
  );
}

export default MapConfig;
