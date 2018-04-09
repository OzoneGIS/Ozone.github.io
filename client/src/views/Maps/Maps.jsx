import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';

import 'assets/css/Maps.css';
import leed from 'assets/img/leed.png';
import PitchToggle from 'views/Maps/PitchToggle.jsx';

//import waterStation from 'variables/Data.jsx';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Maps extends Component {

  constructor(props : Props) {
    super(props);
    this.state = {
      lng: -120.426,
      lat: 37.3646,
      zoom: 16.96,
      pitch: 45,
      bearing: -17.6
    };
  }

  componentDidMount() {
    const {lng, lat, zoom, pitch, bearing} = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [
        lng, lat
      ],
      attributionControl: false,
      zoom,
      maxZoom: 17,
      pitch,
      bearing
    });

    map.on('move', () => {
      const {lng, lat} = map.getCenter();
      this.setState({lng: lng.toFixed(4), lat: lat.toFixed(4), zoom: map.getZoom().toFixed(2)});
    });

    map.on('mousemove', function (e) {
    document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        JSON.stringify(e.point) + '<br />' +
        // e.lngLat is the longitude, latitude geographical position of the event
        JSON.stringify(e.lngLat);
});

    ///////Controls
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(new PitchToggle({minpitchzoom: 11}));

    var waterStation = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4295379, 37.3634714]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4298095, 37.3638236]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4296546, 37.3642097]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4294038, 37.3642779]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4294095, 37.3642766]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.427814, 37.364143]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.426924, 37.364605]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.426837, 37.365075]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.427697, 37.365323]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.426142, 37.365323]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.426142, 37.365181]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.426955, 37.365905]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4301343, 37.3640383]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4249661, 37.3662876]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4244122, 37.366314]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4244561, 37.3670241]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4234681, 37.3669634]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4228461, 37.3676064]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4219516, 37.3673346]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4222021, 37.3663892]
          }
        }, {
          type: 'Feature',
          properties: {
            title: 'Water Refill Station',
            description: 'Description to be added...'
          },
          geometry: {
            type: 'Point',
            coordinates: [-120.4216203, 37.3659548]
          }
        }
      ]
    };

    waterStation.features.forEach(function(marker) {
      var refill = document.createElement('div');
      refill.className = 'water-station';
      new mapboxgl.Marker(refill).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({offset: 25}).setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>')).addTo(map);
    });
  }

  render() {
    const {lng, lat, zoom} = this.state;

    return (<div id="map">
      <img src={leed} className="App-leed" alt="leed"/>
      <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
        <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
      </div>
      <div ref={el => (this.mapContainer = el)} className="absolute top right left bottom"/>
      <pre id="info"></pre>
    </div>)
  }
}

export default Maps;
