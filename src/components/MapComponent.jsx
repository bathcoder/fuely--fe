// import React, { useState, useEffect, useMemo } from "react";

// //mock petrol station array info
// const mockData = [

//   {
//     station_id: "1",
//     station_name: "Station 1",
//     lat: 44,
//     lng: -80,
//     fuel_type: "petrol",
//     street_address: "123 Main St",
//     price_petrol_main: 198.9,
//     price_petrol_five: {
//       price1: { price: 198.9, time: "PICK SOME GOOD FORMAT FOR THIS", trust: 99 },
//       price2: { price: 198.9, time: "PICK SOME GOOD FORMAT FOR THIS", trust: 99 },
//     }
//   },


// ];

// //mock post object to receive petrol station array info, sent to BE
// const mockRequest = {
//   lat: 44,
//   lng: -80,
//   radius: 10,
//   fuel_type: "petrol",
// }

// //if user shares location -> auto send request to BE
// //if user DOESNT share -> display some sort of message saying 'please enter location in search bar'
// //when BE station array is received save it in a state
// //state used to populate map with markers
// //if user clicks 'list' 


// const MapComponent = ({ center, zoom }) => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });
//   if (!isLoaded) return <div>loading</div>;
//   return (
//     <div className="map">
//       <Map />,
//     </div>
//   );
// };
// export default MapComponent;

// function Map() {

//   const [markers, setMarkers] = useState([
//     { lat: 44, lng: -80 },
//     { lat: 44.001, lng: -80.001 },
//     { lat: 44.001, lng: -80.004 },
//     { lat: 44.001, lng: -80.008 }
//   ]);

//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map_container">
//       {markers.map((marker, index) => {
//         //change key to be unique station_id
//         return (
//           <Marker
//             className="marker"
//             key={index}
//             position={marker}
//             label={{ text: "198.9p", fontSize: "15px", fontWeight: "bold" }}
//             icon={{
//               url: fuelIcon,
//               scaledSize: new window.google.maps.Size(50, 50),
//               labelOrigin: new window.google.maps.Point(20, -10),
//             }}
//           />
//         );
//       })}
//     </GoogleMap>
//   );
// }
