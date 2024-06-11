import { utils } from "./utils.js";
import { routes } from "./routes.js";

const recommendedRoutes = document.getElementById("recommendedRoutes");

let map = L.map("map", { zoomControl: false }).setView(
  [19.702578, -101.1929946],
  13
);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// search function
// document.getElementById("searchBar").addEventListener("keyup", (e) => {
//   let filter = e.target.value.toUpperCase();
//   let routes = document.querySelectorAll(".route");
//   routes.forEach((route) => {
//     if (route.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       route.style.display = "";
//     } else {
//       route.style.display = "none";
//     }
//   });
// });

routes.route.forEach((route) => {
  let li = document.createElement("li");
  li.className = "routes__item";
  let span = document.createElement("span");
  span.className = "routes__name";
  span.innerHTML = route.name;
  li.appendChild(span);
  let img = document.createElement("img");
  img.className = "routes__item-img";
  img.src =
    "https://eeao2nst5vu.exactdn.com/wp-content/uploads/2023/01/Centro-historico-de-Morelia-en-Mexico.jpg";
  img.alt = "foto del mercado";
  li.appendChild(img);
  let div = document.createElement("div");
  div.className = "routes__item-icons";
  let i = document.createElement("i");
  i.className = "fa-solid fa-basket-shopping";
  div.appendChild(i);
  let span2 = document.createElement("span");
  span2.innerHTML = "$";
  div.appendChild(span2);
  li.appendChild(div);
  li.onclick = () => {
    utils.cleanMap(map);
    let color = utils.genRandomColor();
    let polyline = L.polyline(route.path, { color: color, weight: 5 }).addTo(
      map
    );
    map.fitBounds(polyline.getBounds());
  };
  recommendedRoutes.appendChild(li);
});
