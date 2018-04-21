import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import Papa from 'papaparse';

import 'assets/css/Maps.css';
import leed from 'assets/img/leed.png';
import PitchToggle from 'views/Maps/PitchToggle.jsx';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

var geoJson = {
  'type': 'FeatureCollection',
  'features': []
};

class Maps extends Component {

  constructor(props : Props) {
    super(props);
    this.state = {
      lng: -120.426,
      lat: 37.3646,
      zoom: 15.5
    };
  }

  componentDidMount() {
    const {lng, lat, zoom} = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [
        lng, lat
      ],
      attributionControl: false,
      zoom,
      maxZoom: 17
    });

    map.on('move', () => {
      const {lng, lat} = map.getCenter();
      this.setState({lng: lng.toFixed(4), lat: lat.toFixed(4), zoom: map.getZoom().toFixed(2)});
    });

    map.on('load', () => {
      map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': [
                [
                  [
                    -67.13734351262877, 45.137451890638886
                  ],
                  [
                    -66.96466, 44.8097
                  ],
                  [
                    -68.03252, 44.3252
                  ],
                  [
                    -69.06, 43.98
                  ],
                  [
                    -70.11617, 43.68405
                  ],
                  [
                    -70.64573401557249, 43.090083319667144
                  ],
                  [
                    -70.75102474636725, 43.08003225358635
                  ],
                  [
                    -70.79761105007827, 43.21973948828747
                  ],
                  [
                    -70.98176001655037, 43.36789581966826
                  ],
                  [
                    -70.94416541205806, 43.46633942318431
                  ],
                  [
                    -71.08482, 45.3052400000002
                  ],
                  [
                    -70.6600225491012, 45.46022288673396
                  ],
                  [
                    -70.30495378282376, 45.914794623389355
                  ],
                  [
                    -70.00014034695016, 46.69317088478567
                  ],
                  [
                    -69.23708614772835, 47.44777598732787
                  ],
                  [
                    -68.90478084987546, 47.184794623394396
                  ],
                  [
                    -68.23430497910454, 47.35462921812177
                  ],
                  [
                    -67.79035274928509, 47.066248887716995
                  ],
                  [
                    -67.79141211614706, 45.702585354182816
                  ],
                  [
                    -67.13734351262877, 45.137451890638886
                  ]
                ]
              ]
            }
          }
        },
        'layout': {},
        'paint': {
          'fill-color': '#088',
          'fill-opacity': 0.8
        }
      });
    });

    axios.get(`https://raw.githubusercontent.com/adriandarian/GhettoDatabase/master/Social.csv`).then(res => {
      let results = Papa.parse(res.data, {
        delimiter: ",",
        header: true,
        dynamicTyping: true
      });

      for (let i = 0; i < results.data.length - 1; i++) {
        geoJson.features.push({
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [
              results.data[i].longitude,
              results.data[i].latitude
            ]
          },
          'properties': {
            'title': results.data[i].title,
            'description': results.data[i].description,
            'location': results.data[i].location
          }
        });
      }

      geoJson.features.forEach(marker => {
        var refill = document.createElement('div');
        var icon = document.createElement('i');

        switch (marker.properties.title) {
          case 'Water Refill Station':
            icon.className = 'fas fa-tint';
            icon.style.color = 'rgb(6, 129, 208)'
            break;
          case 'Trash Can':
            icon.className = 'fas fa-trash-alt';
            icon.style.color = 'rgb(87, 86, 87)'
            break;
          case 'Bike Rack':
            icon.className = 'fas fa-bicycle';
            icon.style.color = 'rgb(230, 7, 7)'
            break;
          default:
            icon.className = 'fas fa-question';
            icon.style.color = 'rgb(57, 153, 108)'
            break;
        }

        refill.appendChild(icon);
        new mapboxgl.Marker(refill).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({offset: 25}).setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</br>' + marker.properties.location + '</p>')).addTo(map);
      });

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

  }

  render() {
    return (<div id="map">
      <img src={leed} className="App-leed" alt="leed"/>
      <div ref={el => (this.mapContainer = el)} className="absolute top right left bottom"/>
    </div>)
  }
}

export default Maps;
