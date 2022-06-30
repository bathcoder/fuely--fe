import axios from 'axios';

const stationApi = axios.create({baseURL: "http://fuely.herokuapp.com/api"})


export function getAllStations(coords, user){
    return stationApi.post("/stations", {lat: coords.lat, lng: coords.lng, user: user})
    .then(({data}) => {
        console.log(data, "<<<<<<<<<")
    })
    .catch((err) => {
        console.log(err, "Error here <<<<<<<<")
    })
}

export function postNewPrice(station_id,newprice, user){
    return stationApi.post("/stations/price", {station_id: station_id, price: newprice, user: user.user})
}