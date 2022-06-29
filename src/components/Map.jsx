import {

  useLoadScript,

} from "@react-google-maps/api";

import MapConfig from "./MapConfig";

const Map = ({ allStations, coords }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>loading</div>;
  return (
    <div className="map">
      <MapConfig allStations={allStations} coords={coords} />,
    </div>
  );
};

export default Map;
