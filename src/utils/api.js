import axios from 'axios';

const stationApi = axios.create({baseURL: "http://fuely.herokuapp.com/api"})


export default function getAllStations(coords, user){
    return stationApi.post("/stations", {lat: coords.lat, lng: coords.lng, user: user.user})
}