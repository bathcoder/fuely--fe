import { useLoadScript } from "@react-google-maps/api";

import MapConfig from "./MapConfig";

const Map = ({ allStations, coords }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>loading</div>;

  return (
    <div className="container">
      {!allStations.length ? (
        <>
          
          <div className="spinner overlay">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="map-box">
            <MapConfig allStations={allStations} coords={coords} />,
          </div>
        </>
      ) : (
        <div className="map-box">
          <MapConfig allStations={allStations} coords={coords} />,
        </div>
      )}
    </div>
  );
};

export default Map;
