import { useState } from "react";
import UpdatePrice from "./UpdatePrice";



// import { getDistanceTime } from "../utils/api";

import { useEffect } from "react";

const StationListCard = ({ station, coords }) => {

  const [price, setPrice] = useState(station.price_petrol_main);
  const [priceMessage, setPriceMessage] = useState("Update price:")

//TESTING TO GET DISTANCE FROM coords (current user coords) to each station
  // useEffect(()=> {
  //   console.log('hello', station)
  //   getDistanceTime(coords, {lat: station.coordinates.lat, lng: station.coordinates.lng})
  // }, [coords])


  return (
    <>
      <div className="StationListCard">
        <div className="station-address">
          <h2>{station.name}</h2>
          <h2>{station.address}</h2>
          <h3>{'ADD DISTANCE'} miles</h3>
        </div>
        <div className="station-prices">
          {/* SET REAL PRICE, USING LAST ENTRY ATM.  PRICE OR USER_PRICE??????? */}
          <h1>{station.price[station.price.length-1].price}p</h1>
          {/* SET REAL TIME, USING LAST ENTRY ATM */}
          <h3>last updated: {station.price[station.price.length-1].time_submitted}</h3>
          <h3>{priceMessage}</h3>
         <UpdatePrice setPrice = {setPrice} setPriceMessage = {setPriceMessage} station_id={station.station_id}/> 
        </div>
      </div>
    </>
  );
};

export default StationListCard;

