var map = L.map('map').setView([-12.9704, -38.5124], 13);

var greenIcon = L.icon({
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/viguitoh.appspot.com/o/pin4-removebg-preview.png?alt=media&token=67fd8d24-ae69-4f45-bffe-4605e23beb68',
    // shadowUrl: 'images/hortas.png',
    iconSize:     [60, 85], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var marker = L.marker([-12.9656132, -38.4339905], {icon: greenIcon}).addTo(map);
var marker2 = L.marker([-12.932342, -38.4695409], {icon: greenIcon}).addTo(map);
var marker3 = L.marker([-12.9897929, -38.4620597], {icon: greenIcon}).addTo(map);

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 18,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);