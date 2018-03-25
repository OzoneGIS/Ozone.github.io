if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhcmlhbiIsImEiOiJjajJvYWkzbncwMnRtMnJtaXljZjkzZm1tIn0.dadJW7Lq3wuEU6jr8B2Rcg';

var bounds = [
  [-120.434492, 37.360587], //Southwest coordinates
  [-120.417969, 37.373377], //Northeast coordinates
];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-120.4295379, 37.3634714],
  zoom: 17,
  maxBounds: bounds,
});


var vernal = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": {
      "title": "Brenda Gave Me This",
      "description": "Vernal Pools",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-120.4053216, 37.3799573],
    }
  }]
};

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

var waterData = $.get("https://adriandarian.github.io/Sustainable-Sites/src/scripts/waterRefillStations.geojson", function() {
  alert("success");
}).done(function() {
  waterData = waterData.responseText;
  console.log(waterData);
}).fail(function() {
  alert("error");
  console.log(vernal);
});

map.on('load', function(e) {
  map.addSource('water', {
    'type': 'geojson',
    'data': water,
  });
  buildLocationList(water);
});
map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true,
}));

map.addControl(new mapboxgl.NavigationControl());

water.features.forEach(function(marker, i) {
  var el = document.createElement('div');
  el.id = "marker-" + i;
  el.className = 'marker';
  new mapboxgl.Marker(el, {
      offset: [0, -23]
    })
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
  el.addEventListener('click', function(e) {
    flyToWater(marker);
    createPopUp(marker);
    var activeItem = document.getElementsByClassName('active');
    e.stopPropagation();
    if (activeItem[0]) {
      activeItem[0].classList.remove('active');
    }
    var listing = document.getElementById('listing-' + i);
    listing.classList.add('active');
  });
});

function flyToWater(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 17
  });
}

function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  var popup = new mapboxgl.Popup({
      closeOnClick: true
    })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>Water Refill Station</h3>' +
      '<h4>' + currentFeature.properties.description + '</h4>')
    .addTo(map);
}

function buildLocationList(data) {
  for (i = 0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    var prop = currentFeature.properties;
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = "listing-" + i;
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'titles';
    link.dataPosition = i;
    link.innerHTML = prop.title;
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.description;
    link.addEventListener('click', function(e) {
      var clickedListing = data.features[this.dataPosition];
      flyToWater(clickedListing);
      createPopUp(clickedListing);
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  }
}