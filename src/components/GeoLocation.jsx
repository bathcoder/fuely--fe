import React, {useEffect} from "react";
import { useGeolocated } from "react-geolocated";
import useGeolocation from 'react-hook-geolocation'

export default function GeoLocation({setCoords}) {
    
  // const geolocation = useGeolocation()


const onGeolocationUpdate = geolocation => {
  console.log('Here’s some new data from the Geolocation API: ', geolocation)
}

const geolocation = useGeolocation({}, onGeolocationUpdate)

  return !geolocation.error
    ? (
      <ul>
        <li>Latitude:          {geolocation.latitude}</li>
        <li>Longitude:         {geolocation.longitude}</li>
        <li>Location accuracy: {geolocation.accuracy}</li>
        <li>Altitude:          {geolocation.altitude}</li>
        <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
        <li>Heading:           {geolocation.heading}</li>
        <li>Speed:             {geolocation.speed}</li>
        <li>Timestamp:         {geolocation.timestamp}</li>
      </ul>
    )
    : (
      <p>No geolocation, sorry.</p>
    )
}

// const onGeolocationUpdate = geolocation => {
//   console.log('Here’s some new data from the Geolocation API: ', geolocation)
// }

// const geolocation = useGeolocation({}, onGeolocationUpdate)




    // //maybe put in useEffect, async useGeolocated????
    // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    //   useGeolocated({
    //     positionOptions: {
    //       enableHighAccuracy: false,
    //     },
    //     userDecisionTimeout: 5000,
    //   })

    // console.log(coords)

    //   let renderTrigger = 0;

    // useEffect(() => {
    //     setCoords({ lat: coords.latitude, lng: coords.longitude })
    //     console.log('here')
    // }, [])

  // return !isGeolocationAvailable ? (
  //   <div>Your browser does not support Geolocation, please enter address into searchbar</div>
  // ) : !isGeolocationEnabled ? (
  //   <div>Geolocation is not enabled, please enter address into searchbar</div>
  //   //REMOVE RETURN STUFF BELOW
  // ) : coords ? (
  //   <table>
  //     <tbody>
  //       <tr>
  //         <td>latitude</td>
  //         <td>{coords.latitude}</td>
  //       </tr>
  //       <tr>
  //         <td>longitude</td>
  //         <td>{coords.longitude}</td>
  //       </tr>
  //       <tr>
  //         <td>altitude</td>
  //         <td>{coords.altitude}</td>
  //       </tr>
  //       <tr>
  //         <td>heading</td>
  //         <td>{coords.heading}</td>
  //       </tr>
  //       <tr>
  //         <td>speed</td>
  //         <td>{coords.speed}</td>
  //       </tr>
  //     </tbody>
  //   </table>
  // ) : (
  //   <div>Getting the location data&hellip; </div>
//   // );
// }
