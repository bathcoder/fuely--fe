import axios from 'axios';

const stationApi = axios.create({baseURL: "https://fuely.herokuapp.com/api"})


export function getAllStations(coords, user){
    return stationApi.post("/stations", {lat: coords.lat, lng: coords.lng, user: user.user})
    .then(({data}) => {
        return data;
    })
    .catch((err) => {
        console.log(err, "Error here <<<<<<<<")
    })
}

//figure out if user is string or object?
export function putNewPrice(station_id,newprice, user){
    return stationApi.put("/price", {station_id: station_id, price: newprice, user: user})
    .then(({data}) => {
        console.log('PUT RETURN DATA >>>', data)
    })
    .catch((err) => {
        console.log(err, "Error here <<<<<<<<")
    }
    )
}