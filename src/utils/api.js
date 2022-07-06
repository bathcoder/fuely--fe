import axios from "axios";

const stationApi = axios.create({ baseURL: "https://fuely.herokuapp.com/api" });
const googleGeoCode = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode",
});
const googleDistance = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/distancematrix",
});

//POST ('get') all stations from backend
export function getAllStations(coords, user) {
  return stationApi
    .post("/stations", { lat: coords.lat, lng: coords.lng, user: user.user })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err, "Error here <<<<<<<<");
    });
}

//PUT new price to database
export function putNewPrice(station_id, newprice, user) {
  return stationApi
    .put("/price", { station_id: station_id, price: newprice, user: user })
    .then(({ data }) => {
      console.log("PUT RETURN DATA >>>", data);
    })
    .catch((err) => {
      console.log(err, "Error here <<<<<<<<");
    });
}

//GET coordinates from address (string) using google geocode api
export function getCoordsFromAddress(address) {
  return googleGeoCode
    .get(
      `/json?address=${address} UK&key=${process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    )
    .then(({ data }) => {
      return data.results[0].geometry.location;
    })
    .catch((err) => {
      console.log(err, "Error here <<<<<<<<");
    });
}

//CORS blocked in front-end, try back-end
//GET distance/time object from google distance matrix api when given start and end coordinates
export function getDistanceTime(start, end) {
  return googleDistance
    .get(
      `/json?units=imperial&origins=${start.lat},${start.lng}&destinations=${end.lat},${end.lng}&key=${process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    )
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err, "Error here <<<<<<<<");
    });
}


// https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${start.lat},${start.lng}&destinations=${end.lat},${end.lng}&key=${process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}