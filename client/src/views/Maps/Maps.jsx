import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

import 'assets/css/Maps.css';
import leed from 'assets/img/leed.png';
import PitchToggle from 'views/Maps/PitchToggle.jsx';
import {waterStation} from 'variables/Data.jsx';
import Papa from 'papaparse';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

var results = {};
/*var featureValues = {};
var geoJson = {
  type: 'FeatureCollection',
  features: []
};*/


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

    axios.get(`https://raw.githubusercontent.com/adriandarian/DigestQuest/master/Geotags.csv`).then(res => {
      var csvString = res.data;
      results = Papa.parse(csvString, {
          delimiter: ",",
          header: true,
          dynamicTyping: true
      });
    })

    console.log(typeof results);

    for (var value of results) {
      console.log(typeof value);
    }

    ///////Controls
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(new PitchToggle({minpitchzoom: 11}));

    waterStation.features.forEach(function(marker) {
      var refill = document.createElement('div');
      refill.className = 'water-station';
      refill.appendChild(document.createElement('i'));
      new mapboxgl.Marker(refill).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({offset: 25}).setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>')).addTo(map);
    });
  }

  render() {
    return (<div id="map">
      <img src={leed} className="App-leed" alt="leed"/>
      <div ref={el => (this.mapContainer = el)} className="absolute top right left bottom"/>
    </div>)
  }
}

export default Maps;
