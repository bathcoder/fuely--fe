import { useState } from "react";
import UpdatePrice from "./UpdatePrice";

const StationListCard = ({ station }) => {

  const [price, setPrice] = useState(station.price_petrol_main);
  const [priceMessage, setPriceMessage] = useState("Update price:")

  return (
    <>
      <div className="StationListCard">
        <div className="station-address">
          {<h2>{station.station_name}</h2>}
          {<h2>{station.street_address}</h2>}
          {<h3>{station.distance_from_center} miles</h3>}
        </div>
        <div className="station-prices">
          {<h1>{price}</h1>}
          {<h3>{station.updated}</h3>}
          <h3>{priceMessage}</h3>
         <UpdatePrice setPrice = {setPrice} setPriceMessage = {setPriceMessage}/> 
        </div>
      </div>
    </>
  );
};

export default StationListCard;
