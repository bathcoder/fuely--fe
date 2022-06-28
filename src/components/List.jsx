import StationListCard from "./StationListCard";

const List = ({ allStations }) => {
  return (
    <div>
      {allStations.map((station) => {
        return <StationListCard key={station.station_id} station={station} />;
      })}
    </div>
  );
};

export default List;
