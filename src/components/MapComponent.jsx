import React, { useState, useEffect, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, useJsApiLoader} from "@react-google-maps/api";
import fuelIcon from "../images/fuel-pump_26fd.png";

const MapComponent = ({ center, zoom }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>loading</div>;
  return (
    <div className="map">
      <Map />,
    </div>
  );
};
export default MapComponent;

function Map() {
  const [markers, setMarkers] = useState([
    { lat: 44, lng: -80 },
    { lat: 44.001, lng: -80.001 },
  ]);

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map_container">
      {markers.map((marker, index) => {
        //change key to be unique station_id
        return <Marker className = "marker" key={index} position={marker} label={"pricey"} icon = {fuelIcon}  style = {{"grey"}} />;
      })}
    </GoogleMap>
  );
}
