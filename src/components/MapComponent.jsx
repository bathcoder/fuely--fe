import React, { useRef, useState, useEffect, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api";

const MapComponent = ({ center, zoom }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>loading</div>;
  return <Map />;
};
export default MapComponent;








function Map() {

  const [markers, setMarkers] = useState([{ lat: 44, lng: -80 }, { lat: 44.001, lng: -80.001 }]);

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map_container"
    >
      {markers.map((marker, index) => {
        //change key to be unique station_id
        return <Marker key={index} position={marker} />
      })}

    </GoogleMap>
  );
}

// const ref = useRef(null);
//     const [map, setMap] = useState();

//     useEffect(() => {
//       if (ref.current && !map) {
//         setMap(new window.google.maps.Map(ref.current, {}));
//       }
//     }, [ref, map]);

//     return (
//         <>
//           <div ref={ref} />
//           {React.Children.map(children, (child) => {
//             if (React.isValidElement(child)) {
//               // set the map prop on the child component
//               return React.cloneElement(child, { map });
//             }
//           })}
//         </>
//       );
// }

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 52.422495,
//   lng: -1.524450
// };

// function MapComponent() {
// const apiKey = "AIzaSyBRo6y8Zv-tKoU-7gtfYbbpyFP-tY9OsKM"
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',

//     googleMapsApiKey:
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MapComponent)
