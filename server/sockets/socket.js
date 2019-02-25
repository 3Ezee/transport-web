const { io } = require('../server');
const { InfoControl } = require('../classes/info-control2')

const infoControl = new InfoControl();

io.on('connection', (client) => {
    client.on('getInfo', async(data, callback) => {
        console.log(data);
        let positions = await infoControl.getVehiclesPositions(data.agency_id, data.route_id)

        callback({ positions });
    })
});