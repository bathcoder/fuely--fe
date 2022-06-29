import { useState } from "react";

const StationListCard = ({ station }) => {
  const [newPrice, setNewPrice] = useState("");
console.log(station.price_petrol_main)
console.log(newPrice)
const handleSubmit = (event) => {
  event.preventDefault();
  station.price_petrol_main = newPrice;
}


  return (
    <>
      <div className="StationListCard">
        <div className="station-address">
          {<h2>{station.station_name}</h2>}
          {<h2>{station.street_address}</h2>}
          {<h3>{station.distance_from_center} miles</h3>}
        </div>
        <div className="station-prices">
          {<h1>{station.price_petrol_main}</h1>}
          {<h3>{station.updated}</h3>}
          <form onSubmit ={handleSubmit}>
            <label>
              <input
                type="text"
                id="price-input"
                name="new-price"
                placeholder="what price can you see?"
                value={newPrice}
                onChange={(event) => setNewPrice(event.target.value)}
              />
            </label>
       
          </form>
          <button type="submit">enter fuely</button>
        </div>
      </div>
    </>
  );
};

export default StationListCard;
