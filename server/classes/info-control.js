const locationApi = require('../src/location/location');
const weather = require('../src/weather/weather');
const transport = require('../src/transport/transport');

const getInfo = async(addressStreet, agency_id) => {
    try {
        let coors = await locationApi.getAdressLatLng(addressStreet);
        console.log(coors);
        let temp = await weather.getWeather(coors.lat, coors.lng);
        console.log(temp);
        let vehiclesPositions = await transport.getVehiclesPositions(agency_id)
        console.log(vehiclesPositions);
        return `El clima en ${ coors.address } es de ${ temp } y las posiciones de los colectivos son ${vehiclesPositions}`
    } catch (e) {
        return `No se pudo determinar el clima en ${ addressStreet }`
    }
}

const getVehiclesPositions = async(agency_id) => {
    console.log(agency_id)
    let vehiclesPositions = await transport.getVehiclesPositions(agency_id);
    console.log(vehiclesPositions);
    return vehiclesPositions;
}

console.log(getVehiclesPositions(1))