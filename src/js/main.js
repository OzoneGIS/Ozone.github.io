//to allow old browsers to have the .remove() function
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

//init mapbox accesstoken
mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhcmlhbiIsImEiOiJjajJvYWkzbncwMnRtMnJtaXljZjkzZm1tIn0.dadJW7Lq3wuEU6jr8B2Rcg';

//initialize border
var bounds = [
  [-120.434492, 37.360587], //Southwest coordinates
  [-120.417969, 37.373377], //Northeast coordinates
];

//initialize empty map
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [lon, lat] format
  center: [-120.4295379, 37.3634714],
  // initial zoom
  zoom: 17,
  maxBounds: bounds,
});

//geojson data for vernal pools
var vernal = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": {
      "title": "Vernal Pools",
      "description": "Brought to you by Brenda",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-120.4234919, 37.3682139],
    }
  }]
};

//geojson data for water refill station locations
var water = {
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4295379, 37.3634714],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4298095, 37.3638236],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4296546, 37.3642097],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4294038, 37.3642779],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4294095, 37.3642766],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.427814, 37.364143],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.426924, 37.364605],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.426837, 37.365075],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.427697, 37.365323],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.426142, 37.365323],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.426142, 37.365181],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.426955, 37.365905],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4301343, 37.3640383],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4249661, 37.3662876],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4244122, 37.3663140],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4244561, 37.3670241],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4234681, 37.3669634],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4228461, 37.3676064],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4219516, 37.3673346],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4222021, 37.3663892],
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Water Refill Station",
        "description": "Description to be added...",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-120.4216203, 37.3659548],
      }
    }
  ],
};

//var waterData = JSON.parse('./src/scripts/waterRefillStations.geojson');

//geojson line data
var linestring = {
  'type': 'Feature',
  'geometry': {
    'type': 'LineString',
    'coordinates': {}
  }
};

var distanceContainer = document.getElementById('distance');

map.on('load', function(e) {
  map.addSource('waterSource', {
    "type": "geojson",
    "data": water,
  });
  map.addLayer({
    'id': 'waterLayer',
    'type': 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    'source': 'waterSource',
    'layout': {
      'visibility': 'visible',
      'icon-image': '../styles/fa-solids/address-book.svg',
      'icon-allow-overlap': true,
    },
    'paint': {},
  });
  buildLocationList(water);
  buildLocationList(vernal);
});

//add the locate user button
map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true,
}));

//adding distance calculator for the given points
map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['waterLayer']
  });

  //Remove the linestring from the group
  //so we can redraw it based on the points collection
  if (water.features.length > 1) {
    water.features.pop();
  }

  //Clear the distance container to populate it with a new value
  distanceContainer.innerHTML = '';



  //If a feature was clicked, remove it from the map
  if (features.length) {
    var id = features[0].properties.id;
    water.features = water.features.filter(function(point) {
      return point.properties.id !== id;
    });
  } else {
    var point = {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [
          e.lngLat.lng,
          e.lngLat.lat
        ]
      },
      'properties': {
        'id': String(new Date().getTime())
      }
    };
    water.features.push(point);
  }

  if (water.features.length > 1) {
    linestring.geometry.coordinates = water.features.map(function(point) {
      return point.geometry.coordinates;
    });
    water.features.push(linestring);

    //populate the distanceContainer with total distance
    var value = document.createElement('pre');
    value.textContent = 'Total distance: ' + turf.lineDistance(linestring).toLocaleString() + 'km';
    distanceContainer.appendChild(value);
  }
  map.getSource('waterSource').setData(water);
});

//determine what style the mouse will be
map.on('mousemove', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['waterLayer']
  });
  //UI indicatore for clicking/hovering a point on the map
  map.getCanvas().style.cursor = (features.length) ? 'pointer' : 'default';
});








//add the location zoom in or out control
map.addControl(new mapboxgl.NavigationControl());

// This is where your interactions with the symbol layer used to be
// Now you have interactions with DOM markers instead
water.features.forEach(function(marker, i) {
  //create a div element for the marker
  var el = document.createElement('div');
  el.id = "marker-" + i;
  el.className = 'marker';
  // Add markers to the map at all points
  new mapboxgl.Marker(el, {
      offset: [0, -23]
    })
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);

  el.addEventListener('click', function(e) {
    //fly to the point
    flyToWater(marker);
    //close all other popups and display popup for clicked water
    createPopUp(marker);
    //highlight listing in sidebar (and remove highlight for all other listings)
    var activeItem = document.getElementsByClassName('active');

    e.stopPropagation();
    if (activeItem[0]) {
      activeItem[0].classList.remove('active');
    }
    var listing = document.getElementById('listing-' + i);
    listing.classList.add('active');
  });
});

//pan to the specified icon location
function flyToWater(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 17
  });
}

//after pan to icon location popup information
function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  //check if there is already a popup on the map and if so, remove it
  if (popUps[0]) popUps[0].remove();
  var popup = new mapboxgl.Popup({
      closeOnClick: true
    })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>Water Refill Station</h3>' +
      '<h4>' + currentFeature.properties.description + '</h4>')
    .addTo(map);
}

//Iterate through the json data locations and add each one to the sidebar listing
function buildLocationList(data) {
  //iterate through the list of data
  for (i = 0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    //shorten data.feature.properties to just 'prop' so we are not writing this long form over and over again
    var prop = currentFeature.properties;
    //select the listing container in the HTML and append a div with the class 'item' for each store
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = "listing-" + i;

    //create a new link with the class 'titles' for each water and fill it with the title
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'titles';
    link.dataPosition = i;
    link.innerHTML = prop.title;

    //create a new div with the class 'details' for each water and fill it with the description
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.description;

    //add an event listener for the links in the sidebar listing
    link.addEventListener('click', function(e) {
      //update the currentFeature to the water associated with the clicked link
      var clickedListing = data.features[this.dataPosition];
      //fly to the point associated with the clicked link
      flyToWater(clickedListing);
      //close all other popups and display popup for clicked water
      createPopUp(clickedListing);
      //highlight listing in sidebar (and remove highlight for all other listings)
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  }
}
