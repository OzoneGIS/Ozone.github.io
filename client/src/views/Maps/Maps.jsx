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
      zoom: 16.96
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

    axios.get(`https://raw.githubusercontent.com/adriandarian/DigestQuest/master/Geotags.csv`)
      .then(res => {
        let results = Papa.parse(res.data, {
          delimiter: ",",
          header: true,
          dynamicTyping: true
        });

        for (let i = 0; i < results.data.length; i++) {
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
              'description': results.data[i].description
            }
          });
        }

          geoJson.features.forEach(marker => {
            var refill = document.createElement('div');
            refill.className = 'water-station';
            refill.appendChild(document.createElement('i'));
            new mapboxgl.Marker(refill).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({offset: 25}).setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>')).addTo(map);
          });

      	console.log(geoJson);
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




    ////I want to change the variable waterStation here to geoJson so that it can display all the points cause later I will edit the map so you can select which icons you want to display
  }

  render() {
    return (<div id="map">
      <img src={leed} className="App-leed" alt="leed"/>
      <div ref={el => (this.mapContainer = el)} className="absolute top right left bottom"/>
    </div>)
  }
}

export default Maps;
