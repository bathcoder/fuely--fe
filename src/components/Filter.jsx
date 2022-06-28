
//address search bar
//fuel type button (nice to have)
//radius option
//map/list button
const Filter = ({displayType, setDisplayType}) => {

    const mapListToggle = () => {
        if (displayType === "map") {
            setDisplayType("list");
        } else {
            setDisplayType("map");
        }
    }



    return (
        <div>
            <button onClick={mapListToggle}>
                {displayType === "map" ? "View List" : "View Map"}
            </button>
            
        </div>
    );
};

export default Filter;