var map = L.map('map').setView([-12.9704, -38.5124], 13);

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 18,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);