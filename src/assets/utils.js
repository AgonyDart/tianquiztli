export function cleanMap(map) {
  // clean leaflet map poly lines
  map.eachLayer(function (layer) {
    map.removeLayer(layer);
  });

  // Re-add the tile layer (since clearLayers will also remove the tile layer)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
}

export function genRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export * as utils from "./utils.js";