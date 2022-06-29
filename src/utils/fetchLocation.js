

export default function fetchLocation(setCoords) {navigator.geolocation.getCurrentPosition(function(position) {setCoords({lat: position.coords.latitude, lng: position.coords.longitude})})};

