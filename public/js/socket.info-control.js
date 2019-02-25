var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('agency_id')) {
    console.log('no agency_id');
    throw new Error('Require agency_id');
}
var route_id = ''
if (searchParams.has('route_id')) {
    route_id = searchParams.get('route_id')
}

var agency_id = searchParams.get('agency_id');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {

    console.log('Desconectado del servidor');
});

async function initMap() {
    var transport = []
    socket.emit('getInfo', {
        agency_id: agency_id,
        route_id: route_id
    }, function(resp) {
        transport = resp.positions
        var myLatLng = {
            lat: -34.6437569,
            lng: -58.4458656
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: myLatLng
        });

        for (var i = 0; i < transport.length; i++) {
            var elem = transport[i];
            var marker = new google.maps.Marker({
                position: {
                    lat: elem[0],
                    lng: elem[1]
                },
                map: map,
            });
        }
    });
}