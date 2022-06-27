import React, {useRef, useState, useEffect} from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';




const MapComponent = ({center,zoom}) => {
const{isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyBRo6y8Zv-tKoU-7gtfYbbpyFP-tY9OsKM"})
if(!isLoaded) return <div>loading</div>
return <div>map</div>
}
export default MapComponent;








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