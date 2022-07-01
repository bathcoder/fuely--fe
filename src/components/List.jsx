import StationListCard from "./StationListCard";

const List = ({ allStations, coords }) => {
  return (
    <div>
      {allStations.map((station) => {
        return <StationListCard key={station.station_id} station={station} coords={coords} />;
      })}
    </div>
  );
};

export default List;
