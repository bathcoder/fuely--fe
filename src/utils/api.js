import axios from 'axios';

const stationApi = axios.create({baseURL: "https://fuely.herokuapp.com/api"})


export function getAllStations(coords, user){
    return stationApi.post("/stations", {
        "user": "Geoff",
        "lng": coords.lng,
        "lat": coords.lat,
        "allStations": [
          "string"
        ]
      })
    .then(({data}) => {
        return data
    })
    .catch((err) => {
        console.log(err, "Error here <<<<<<<<")
    })
}

export function postNewPrice(station_id,newprice, user){
    return stationApi.post("/stations/price", {station_id: station_id, price: newprice, user: user.user})
}