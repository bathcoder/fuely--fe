import { getCoordsFromAddress } from "../utils/api";
import "../styles/App.css";

//address search bar
//fuel type button (nice to have)
//radius option (nice to have)
//map/list button
const Filter = ({
  displayType,
  setDisplayType,
  setCoords,
  allStations,
  setAllStations,
}) => {
  const mapListToggle = () => {
    if (displayType === "map") {
      setDisplayType("list");
    } else {
      setDisplayType("map");
    }
  };

  //onsubmit for address search bar uses getCoordsFromAddress to set coords state
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    getCoordsFromAddress(e.target.address.value).then((data) => {
      console.log(data);
      setCoords(data);
    });
  };

  //function to sort allStations by price ascending
  const sortStationsByPrice = () => {
    let copiedStations = [...allStations];
    console.log(
      copiedStations[3].price[copiedStations[3].price.length - 1].price
    );

    copiedStations.sort((first, second) => {
      if (
        first.price[first.price.length - 1].price >
        second.price[second.price.length - 1].price
      ) {
        return 1;
      }

      if (
        first.price[first.price.length - 1].price <
        second.price[second.price.length - 1].price
      ) {
        return -1;
      }

      return 0;
    });

    console.log(copiedStations);
    setAllStations(copiedStations);
  };

  return (
    <div className="filter">
      
      <div className="addressForm">
        <form className="addressInput" onSubmit={(e) => handleAddressSubmit(e)}>
          <input type="text" name="address" placeholder="Enter an address" />
          <button className="addressButton" type="submit">Search</button>
        </form>
      </div>
      <div className="bothButtons">
        <button
          className="viewButton ListSortButtons mapListButton"
          onClick={mapListToggle}
        >
          {displayType === "map" ? "View List" : "View Map"}
        </button>

        {displayType === "map" ? (
          <div className="sortButton"></div>
        ) : (
          <div>
            <button
              className="viewButton ListSortButtons sortButton"
              onClick={sortStationsByPrice}
            >
              Sort by price
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
