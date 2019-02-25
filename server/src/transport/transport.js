const axios = require('axios');

const getVehiclesPositions = async(agency_id, route_id) => {

    let encodeUrl = encodeURI(agency_id);

    //let resp = await axios.get(`https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?agency_id=${agency_id}&client_id=9c81a763028e42d68475a5139529c504&client_secret=3cf26c3981054456843ad721B63dA221`);
    if (agency_id != 0) {
        agency_id = `agency_id=${agency_id}&`
    } else {
        agency_id = ''
    }

    let resp = await axios.get(`https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?&${agency_id}client_id=9c81a763028e42d68475a5139529c504&client_secret=3cf26c3981054456843ad721B63dA221`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para el bondi ${ agency_id }`);
    }

    allPositionsVehicles = []
    for (index in resp.data) {
        if (route_id != '' || resp.data[index].route_id != null) {
            lat = resp.data[index].latitude
            lng = resp.data[index].longitude

            allPositionsVehicles.push([lat, lng])
        }

    }
    return allPositionsVehicles
}

module.exports = {
    getVehiclesPositions
}