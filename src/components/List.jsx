import StationListCard from "./StationListCard";
import LoginMessage from "./LoginMessage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../firebaseauth/AuthContext";

const List = ({ allStations, coords }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="allStationCards">
      <LoginMessage />

      {!allStations.length ? (
        <>
          <div className="listBackground">
           
            <div className="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </>
      ) : (
        allStations.map((station) => {
          return (
            <StationListCard
              key={station.station_id}
              station={station}
              coords={coords}
            />
          );
        })
      )
      }
    </div>
  );
};

export default List;
