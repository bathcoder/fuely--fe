import { useState } from "react";
import UpdatePrice from "./UpdatePrice";



// import { getDistanceTime } from "../utils/api";

import { useEffect } from "react";

const StationListCard = ({ station, coords }) => {

  //state for price that is shown to user. initially it is taken from the database, then updated optimistically
  const [price, setPrice] = useState(station.price[station.price.length-1].price);

  //state for time last updated that is shown to user. initially it is taken from the database, then updated optimistically
  const [timeSubmitted, setTimeSubmitted] = useState(station.price[station.price.length-1].time_submitted);


  const [priceMessage, setPriceMessage] = useState("Update price:")

//TESTING TO GET DISTANCE FROM coords (current user coords) to each station
  // useEffect(()=> {
  //   console.log('hello', station)
  //   getDistanceTime(coords, {lat: station.coordinates.lat, lng: station.coordinates.lng})
  // }, [coords])


  return (
    <>
      <div className="StationListCard">
        <div className="StationInfo">
          <h3 className="StationName">{station.name}</h3>
          <h5 className="StationAddress">{station.address}</h5>
          <p>{'ADD DISTANCE'} miles</p>
        </div>
        <div className="station-prices">
          {/* SET REAL PRICE, USING LAST ENTRY ATM.  PRICE OR USER_PRICE??????? */}
          <h1 className="FuelPrice">{price}p</h1>
          {/* SET REAL TIME, USING LAST ENTRY ATM */}
          <h5 className="FuelTimeUpdated">last updated: {timeSubmitted}</h5>
          <h5 className="FuelUpdateMessage">{priceMessage}</h5>
         <UpdatePrice setPrice = {setPrice} setPriceMessage = {setPriceMessage} station_id={station.station_id} setTimeSubmitted={setTimeSubmitted}/> 
        </div>
      </div>
    </>
  );
};

export default StationListCard;

