import React, {useEffect} from "react";
import { useGeolocated } from "react-geolocated";

export default function GeoLocation({setCoords}) {
    
    //maybe put in useEffect, async useGeolocated????
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
      useGeolocated({
        positionOptions: {
          enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
      })

    console.log(coords)

    //   let renderTrigger = 0;

    // useEffect(() => {
    //     setCoords({ lat: coords.latitude, lng: coords.longitude })
    //     console.log('here')
    // }, [])

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation, please enter address into searchbar</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled, please enter address into searchbar</div>
    //REMOVE RETURN STUFF BELOW
  ) : coords ? (
    <table>
      <tbody>
        <tr>
          <td>latitude</td>
          <td>{coords.latitude}</td>
        </tr>
        <tr>
          <td>longitude</td>
          <td>{coords.longitude}</td>
        </tr>
        <tr>
          <td>altitude</td>
          <td>{coords.altitude}</td>
        </tr>
        <tr>
          <td>heading</td>
          <td>{coords.heading}</td>
        </tr>
        <tr>
          <td>speed</td>
          <td>{coords.speed}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
}
