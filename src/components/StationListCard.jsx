import {useEffec}

const StationListCard = ({ station }) => {
const[newPrice, setNewPrice] = useState(station.price_petrol_main);






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
        </div>
      </div>
      <div>
        <form>
          <label>
            <
          </label>
        </form>
      </div>
    </>
  );
};

export default StationListCard;


