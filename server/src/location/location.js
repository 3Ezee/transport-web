const axios = require('axios');

const getAdressLatLng = async(streetAddress) => {

    let encodeUrl = encodeURI(streetAddress);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyD3v5d90hY2NP7hvI3EhQuRnoDsejijKt8`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ streetAddress }`);
    }

    let location = resp.data.results[0].formatted_address;
    let coors = resp.data.results[0].geometry.location;

    return {
        address: location,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getAdressLatLng
}