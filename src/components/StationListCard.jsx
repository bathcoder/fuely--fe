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

  const [priceMessage, setPriceMessage] = useState("Update price:");

  const handlePriceClick = () => {
    setPriceClicked("clicked");
  };

  return (
    <>
      <div className="StationListCard">
        <div className="StationInfo">
          <h3 className="StationName">{station.name}</h3>
          <h5 className="StationAddress">{station.address}</h5>
        </div>
        <div className="station-prices">
          {/* SET REAL PRICE, USING LAST ENTRY ATM.  PRICE OR USER_PRICE??????? */}
          <h1 className="FuelPrice">{price}p</h1>
          {/* SET REAL TIME, USING LAST ENTRY ATM */}
          <h5 className="FuelTimeUpdated">last updated: {timeSubmitted}</h5>

          {currentUser && priceClicked === "clicked" ? (
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
          ) : currentUser && priceClicked === "not clicked" ? (
            <p onClick={handlePriceClick}>Is this price incorrect?</p>
          ) : currentUser && priceClicked === "submitted" ? (
            <h5 className="FuelUpdateMessage">{priceMessage}</h5>
          ) : (
            <p>HELLO</p>
          )}
        </div>
      </div>
    </>
  );
};

export default StationListCard;
