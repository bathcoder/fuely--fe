import { getCoordsFromAddress } from "../utils/api";


//address search bar
//fuel type button (nice to have)
//radius option (nice to have)
//map/list button
const Filter = ({displayType, setDisplayType, setCoords}) => {

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




    return (
        <div>
            <button onClick={mapListToggle}>
                {displayType === "map" ? "View List" : "View Map"}
            </button>

            <form onSubmit={(e) => handleAddressSubmit(e)}>
                <input type="text" name="address" placeholder="Enter address" />
                <button type="submit">Search</button>
            </form>
            
        </div>
    );
};

export default Filter;