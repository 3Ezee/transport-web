const transport = require('../src/transport/transport');


class InfoControl {

    constructor() {

    }
    async getVehiclesPositions(agency_id, route_id) {
        return await transport.getVehiclesPositions(agency_id, route_id);
    }
}

module.exports = { InfoControl }