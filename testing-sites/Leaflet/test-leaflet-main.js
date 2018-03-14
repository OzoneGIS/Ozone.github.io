var bounds = [
  [37.360587, -120.434492], //Southwest coordinates
  [37.373377, -120.417969], //Northeast coordinates
];

var map = L.map('map', {
  attributionControl: false,
  maxBounds: bounds,
}).setView([37.3634714, -120.4295379], 17);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWRhcmlhbiIsImEiOiJjajJvYWkzbncwMnRtMnJtaXljZjkzZm1tIn0.dadJW7Lq3wuEU6jr8B2Rcg', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 20,
  minZoom: 15,
  id: 'mapbox.light',
  accessToken: 'your.mapbox.access.token'
}).addTo(map);

map.locate({
  setView: true,
  maxZoom: 16
});

function onLocationFound(e) {
  var radius = e.accuracy / 2;

  L.marker(e.latlng).addTo(map)
    .bindPopup("You are within " + radius + " meters from this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
  alert(e.message);
}

map.on('locationerror', onLocationError);

L.control.scale().addTo(map);

L.AwesomeMarkers.Icon.prototype.options.prefix = 'ion';

L.marker([37.366303, -120.424662], {
  icon: L.AwesomeMarkers.icon({
    //prefix: 'fa',
    icon: 'document',
    markerColor: 'blue',
    iconColor: 'black',
  })
}).addTo(map);

var LeafIcon = L.Icon.extend({
  options: {
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  }
});

var book = new LeafIcon({
  iconUrl: '../../src/styles/icons/fa-solids/address-book.svg'
});



L.icon = function(options) {
  return new L.Icon(options);
};

L.marker([37.365067, -120.426711], {
  icon: book
}).addTo(map).bindPopup("I am a book.");

var marker = L.marker([37.3634714, -120.4295379]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");


var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}
map.on('click', onMapClick);

//load GeoJSON from an external file
$.getJSON("https://adriandarian.github.io/Sustainable-Sites/src/scripts/waterRefillStations.geojson", function(data) {
  var waterIcon = L.icon({
    iconUrl: '../../src/styles/icons/fa-solids/tint.svg',
    iconSize: [15, 15],
  });
  console.log(data);
  //add GeoJSON layer to the map once the file is loaded
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      var markerTest = L.marker(latlng, {
        icon: waterIcon
      });
      console.log(data);
      markerTest.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT);
      return markerTest;
    }
  }).addTo(map);
});
