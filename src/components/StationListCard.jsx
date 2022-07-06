import { useState } from "react";
import UpdatePrice from "./UpdatePrice";
import { useAuth } from "../firebaseauth/AuthContext";

const StationListCard = ({ station }) => {
  const [priceClicked, setPriceClicked] = useState("not clicked");

  const { currentUser } = useAuth();

  //state for price that is shown to user. initially it is taken from the database, then updated optimistically
  const [price, setPrice] = useState(
    station.price[station.price.length - 1].price
  );

  //state for time last updated that is shown to user. initially it is taken from the database, then updated optimistically
  const [timeSubmitted, setTimeSubmitted] = useState(
    station.price[station.price.length - 1].time_submitted
  );

  const [priceMessage, setPriceMessage] = useState("");

  const handlePriceClick = () => {
    setPriceClicked("clicked");
  };

  return (
    <>
      <div className="StationListCard"
        onClick={
          currentUser ? handlePriceClick : () => {}
        }



      >
        <div className="StationInfo">
          <h3 className="StationName">{station.name}</h3>
          <h5 className="StationAddress">{station.address}</h5>
        </div>
        <div className="station-prices">
          <h1 className="FuelPrice">{price}p</h1>
          <h5 className="FuelTimeUpdated">last updated: {timeSubmitted}</h5>

          {
          //IF USER HAS CLICKED INITIALLY, SHOW UPDATE PRICE FORM
          currentUser && priceClicked === "clicked" ? (
            <>
              <h5 className="FuelUpdateMessage">{priceMessage}</h5>
              <UpdatePrice
                setPrice={setPrice}
                setPriceMessage={setPriceMessage}
                station_id={station.station_id}
                setTimeSubmitted={setTimeSubmitted}
                setPriceClicked={setPriceClicked}
              />
            </>
          //IF USER HAS SUBMITTED NEW PRICE, SHOW SUCCESS MESSAGE
          ) : currentUser && priceClicked === "submitted" ? (
            <h5 className="FuelUpdateMessage">{priceMessage}</h5>
          ) : 
          //IF USER IS NOT LOGGED IN, SHOW NOTHING
          (
            null
          )}




        </div>
      </div>
    </>
  );
};

export default StationListCard;
