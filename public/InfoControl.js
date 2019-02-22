const location = require('../server/src/location/location');
const weather = require('../server/src/weather/weather');
const transport = require('../server/src/transport/transport');

/*getInfo = async(address, agency_id) => {
    try {
        let coors = await location.getAdressLatLng(address);
        console.log(coors);
        let temp = await weather.getWeather(coors.lat, coors.lng);
        console.log(temp);
        let vehiclesPositions = await transport.getVehiclesPositions(agency_id)
        console.log(vehiclesPositions);
        return `El clima en ${ coors.address } es de ${ temp } y las posiciones de los colectivos son ${vehiclesPositions}`
    } catch (e) {
        return `No se pudo determinar el clima en ${ address }`
    }
}*/

function getVehiclesPositions(agency_id) {
    console.log(agency_id)
    let vehiclesPositions = transport.getVehiclesPositions(agency_id);
    console.log(vehiclesPositions);
    document.getElementById('transport').innerHTML = vehiclesPositions;
}