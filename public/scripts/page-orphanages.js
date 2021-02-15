//create map

const map = L.map("mapid").setView([-22.9489608, -47.0731184], 16);

//create and add tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popipAnchor: [170, 2],
});

//create pupup overlay
const popup = L.popup({
  closebutton: false,
  className: "map-popup",
  minWidth: 240,
  minheight: 240,
}).setContent(
  'Cidade dos Meninos - Esperança sem Limites <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>'
);

//create and add marker

L.marker([-22.9489608, -47.0731184], { icon }).addTo(map).bindPopup(popup);
