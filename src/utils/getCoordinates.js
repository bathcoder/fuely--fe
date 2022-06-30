//this function takes in a string of an address or postcode sents it to google geocoding api and returns the lat and long (average of all 4 corners)
export const getCoordinates = async (address) => {
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();
    return data.results[0].geometry.location;
    }

    https://maps.googleapis.com/maps/api/geocode/json?address=801+Savoy+Rd,+Youngsville,+LA&key=<API_KEY/>