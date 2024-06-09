import { login, signUp } from "./login.js";

// routes
// path is an array of coordinates where each coordinate is an array of two numbers representing the latitude and longitude of a point
// [latitude, longitude] for each point, points are connected and a line is drawn between them
let routes = {
  route: [
    {
      name: "Mercado Tec",
      path: [
        [19.72364, -101.18314],
        [19.72386, -101.18475],
        [19.72407, -101.1848],
        [19.72422, -101.18475],
        [19.72482, -101.18419],
        [19.72582, -101.18352],
      ],
    },
    {
      name: "Mercado Ziracuarendiro",
      path: [
        [
          [19.706911, -101.244468],
          [19.707665, -101.245337],
        ],
        [
          [19.70647, -101.24544],
          [19.70712, -101.24479],
        ],
        [
          [19.70676, -101.24576],
          [19.70741, -101.24509],
        ],
      ],
    },
    {
      name: "Mercado Pedregal",
      path: [
        [
          [19.717226, -101.218212],
          [19.717147, -101.216048],
        ],
        [
          [19.717147, -101.216048],
          [19.715216, -101.215574],
        ],
        [
          [19.715216, -101.215574],
          [19.713625, -101.215684],
        ],
        [
          [19.717147, -101.216048],
          [19.718072, -101.216528],
        ],
        [
          [19.718072, -101.216528],
          [19.722311, -101.223134],
        ],
      ],
    },
    {
      // name: "Mercado la Colina",
      // path: [
      //   [
      //     [19.710004, -101.215699],
      //     [19.709083, -101.215598],
      //   ],
      // ],
    },
    {
      name: "Mercado la Guadalupe",
      path: [
        [19.709846, -101.221621],
        [19.712566, -101.22224],
      ],
    },
    {
      name: "Tianguis de la San Rafael",
      path: [
        [19.70108, -101.15533],
        [19.70165, -101.15239],
      ],
    },
    {
      name: "Tianguis del Infonavit",
      path: [
        [19.69879, -101.15925],
        [19.69921, -101.15921],
      ],
    },
    {
      name: "Tianguis de la Insurgentes",
      path: [
        [19.69535, -101.15497],
        [19.69733, -101.15479],
        [19.69836, -101.15462],
      ],
    },
    // {
    //   name: "Tianguis del Quinceo",
    //   path: [
    //     [19.69989, -101.16196],
    //     [19.70533, -101.16439],
    //   ],
    // },
    // {
    //   name: "Tianguis de la Guayangareo",
    //   path: [
    //     [19.70045, -101.15927],
    //     [19.70291, -101.16031],
    //   ],
    // },
  ],
};

function clean() {
  document.getElementById("container").innerHTML = "";
}

function cleanMap(map) {
  // clean leaflet map poly lines
  map.eachLayer(function (layer) {
    map.removeLayer(layer);
  });

  // Re-add the tile layer (since clearLayers will also remove the tile layer)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
}

function genRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// initialize the map and set its view
function initMap() {
  let searchBar = document.createElement("input");
  searchBar.id = "searchBar";
  searchBar.className = "searchBar";
  searchBar.type = "text";
  searchBar.placeholder = "Buscar... 🔎";
  document.getElementById("container").appendChild(searchBar);
  let aside = document.createElement("aside");
  aside.id = "aside";
  aside.className = "aside";
  document.getElementById("container").appendChild(aside);
  let mapDiv = document.createElement("div");
  mapDiv.id = "map";
  mapDiv.className = "map";
  document.getElementById("container").appendChild(mapDiv);

  search(searchBar);
}

function setMapPage() {
  clean();
  initMap();
  // console.log("mapa");
  // Initialize the map centered at the given coordinates with the specified zoom level
  let map = L.map("map").setView([19.702578, -101.1929946], 13);

  routes.route.forEach((route) => {
    // console.log(route.name);
    let div = document.createElement("div");
    div.innerHTML = route.name;
    div.className = "route";
    div.onclick = () => {
      cleanMap(map);
      let color = genRandomColor();
      let polyline = L.polyline(route.path, { color: color, weight: 20 }).addTo(
        map
      );
      map.fitBounds(polyline.getBounds());
    };
    document.getElementById("aside").appendChild(div);
  });

  // Add a tile layer to the map using OpenStreetMap tiles
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Function to retrieve the user's location
  let getLocation = () => map.locate({ setView: true, maxZoom: 18 });

  // Event handler for when the user's location is found
  function onLocationFound(e) {
    let radius = e.accuracy;

    // Add a circle to the map at the user's location with a radius equal to the accuracy
    L.circle(e.latlng, radius).addTo(map);

    console.log(e.latlng);
  }

  // Event handler for location errors
  function onLocationError(e) {
    alert(e.message);
  }

  // Attach the event handlers to the map's location events
  map.on("locationfound", onLocationFound);
  map.on("locationerror", onLocationError);

  // Call getLocation to initiate the process of locating the user's position
  // getLocation();

  // console.log(routes.route[1].name);
  // color = genRandomColor();
  // // console.log(color);
  // var polyline = L.polyline(routes.route[0].path, { color: color }).addTo(
  //   map
  // );
  // map.fitBounds(polyline.getBounds());
}

function setLandingPage() {
  // console.log("landing");
  clean();
  document.getElementById("container").innerHTML = `
  <div class="hero">
    <h2 class="hero__title">
      DESCUBRE LOS <span>MEJORES </span> MERCADOS Y BAZARES
    </h2>
    <div class="wrapper">
      <p class="hero__text">
        Sumérgete en la vida vibrante de los mercados urbanos
      </p>
      <button class="hero__btn" onclick="setMapPage()">Entrar</button>
    </div>
    <div class="hero__mockup"></div>
  </div>
  `;
}

function setContactPage() {
  clean();
  // console.log("contact");
  document.getElementById("container").innerHTML = `
  <div class="contact">
    <h2 class="contact__title">
      Contacto
    </h2>
    <div class="contact__wrapper">
      <p class="contact__text">
        Contacta con nosotros
      </p>
      <button class="contact__btn"><a href="mailto:contact@tianquiztli.com" target="_blank">Email</a></button>
    </div>
    <div class="contact__mockup"></div>
  </div>
  `;
}

function setLoginPage() {
  clean();
  // console.log("login");
  document.getElementById("container").innerHTML = `
  <div class="login">
    <h2 class="login__title">
      Iniciar Sesión
    </h2>
    <p class="login__text">
      Inicia sesión para acceder a la plataforma
    </p>
    <div class="login__wrapper">
      <form class="login__form">
        <input type="email" class="login__input" placeholder="Correo Electrónico" />
        <input type="password" class="login__input" placeholder="Contraseña" />
      <button class="login__btn" onclick="login()" >Iniciar Sesión</button>
    </div>
    <p class="signup__text">¿No tienes cuenta? Llena los campos y haz click en: </br> <a href="#" onclick="signUp()">Regístrate</a></p>
  </div>
  `;
}

function search(searchBar) {
  searchBar.addEventListener("keyup", (e) => {
    let filter = e.target.value.toUpperCase();
    let routes = document.querySelectorAll(".route");
    routes.forEach((route) => {
      if (route.innerHTML.toUpperCase().indexOf(filter) > -1) {
        route.style.display = "";
      } else {
        route.style.display = "none";
      }
    });
  });
}

// asign funs

window.login = login;
window.signUp = signUp;
window.genRandomColor = genRandomColor;
window.setMapPage = setMapPage;
window.setLandingPage = setLandingPage;
window.setContactPage = setContactPage;
window.setLoginPage = setLoginPage;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav__landing").onclick = setLandingPage;
  document.getElementById("nav__map").onclick = setMapPage;
  document.getElementById("hero__btn").onclick = setMapPage;
  document.getElementById("nav__contact").onclick = setContactPage;
  document.getElementById("navbar__btn").onclick = setLoginPage;
});
// var polyline = L.polyline(mkt_tec, { color: "#f5105d" }).addTo(map);
// map.fitBounds(polyline.getBounds());
