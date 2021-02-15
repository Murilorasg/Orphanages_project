//create map
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
const map = L.map("mapid", options).setView([-22.9489608, -47.0731184], 16);

//create and add tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popipAnchor: [170, 2],
});


//create and add marker

L.marker([-22.9489608, -47.0731184], { icon }).addTo(map)

/* image gallery */

function selectImage(event){
  const button = event.currentTarget


  console.log(button.children)

  //remover todas classes .active

  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button){
  //    button.classList.remove("active") 
  }

  //selecionar a img clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")


  //atualizar o container de imagem

imageContainer.src = image.src

  //adicionar de volta a classe .active para este botão



}