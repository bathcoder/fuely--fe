import {
  GoogleMap,
  Marker,
} from "@react-google-maps/api";

import fuelIcon from "../images/fuel-pump_26fd.png";

function MapConfig({allStations, coords}) {

//line 18 needs to change, to users current location/search bar entry in home component, eventually.


  const center = coords;

  return (
    <GoogleMap zoom={13} center={center} mapContainerClassName="map_container">
      {allStations.map((station, index) => {
        //change key to be unique station_id
        return (
          <Marker
            className="marker"
            key={station.station_id}
            position={{ lat: station.coordinates.lat, lng: station.coordinates.lng }}
            //ADD PRICE WHEN BE DONE WITH IT, chhange text to be price from station object
            label={{ text: `${station.price[station.price.length-1].price}p`, fontSize: "15px", fontWeight: "bold" }}
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

