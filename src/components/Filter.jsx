import { getCoordsFromAddress } from "../utils/api";


//address search bar
//fuel type button (nice to have)
//radius option (nice to have)
//map/list button
const Filter = ({displayType, setDisplayType, setCoords, allStations, setAllStations}) => {

    const mapListToggle = () => {
        if (displayType === "map") {
            setDisplayType("list");
        } else {
            setDisplayType("map");
        }
    }

    //onsubmit for address search bar uses getCoordsFromAddress to set coords state
    const handleAddressSubmit = (e) => {
        e.preventDefault();
        getCoordsFromAddress(e.target.address.value)
        .then(data => {
            console.log(data)
            setCoords(data)
        }
        )
    }

    //function to sort allStations by price ascending
    const sortStationsByPrice = () => {
        let copiedStations = [...allStations];
        console.log(copiedStations[3].price[copiedStations[3].price.length-1].price);

        copiedStations.sort( (first, second) => {

           if (first.price[first.price.length-1].price > second.price[second.price.length-1].price) {
              return 1;
           }

           if (first.price[first.price.length-1].price < second.price[second.price.length-1].price) {
              return -1;
           }

           return 0;

        });

        console.log(copiedStations)
        setAllStations(copiedStations);




    }





    return (
        <div>
            <button onClick={mapListToggle}>
                {displayType === "map" ? "View List" : "View Map"}
            </button>

            <form onSubmit={(e) => handleAddressSubmit(e)}>
                <input type="text" name="address" placeholder="Enter address" />
                <button type="submit">Search</button>
            </form>

            <button onClick={sortStationsByPrice}>Sort by price</button>
            
        </div>
    );
};

export default Filter;