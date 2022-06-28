import StationListCard from "./StationListCard";

const List = ({allStations}) => {
    return (
        <div>
         {allStations.map((station) => {
          return <StationListCard station={station} />  
         }
            )}   
        </div>
    );
};

export default List;