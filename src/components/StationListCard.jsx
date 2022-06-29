const StationListCard = ({ station }) => {
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
    </>
  );
};

export default StationListCard;


