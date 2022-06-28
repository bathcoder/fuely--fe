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

// {
//     station_id: "1",
//     station_name: "Station 1",
//     lat: 44,
//     lng: -79,
//     fuel_type: "petrol",
//     street_address: "123 Main St",
//     price_petrol_main: 198.9,
//     price_petrol_five: {
//       price1: { price: 198.9, time: "PICK SOME GOOD FORMAT FOR THIS", trust: 99 },
//       price2: { price: 198.9, time: "PICK SOME GOOD FORMAT FOR THIS", trust: 99 },
// }}])
