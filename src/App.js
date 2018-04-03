import React, {Component} from 'react';
import leed from './leed.png';
import './App.css';
import mapboxgl from 'mapbox-gl';
import XLSX from 'xlsx';


//var url = 'https://ucmerced.box.com/s/gvaizp4esghg3f9823lz68eol7goi8a6';

var url = "https://github.com/adriandarian/sustainable/blob/master/dist/Geotags.xlsx";


/*set up async GET request*/
var req = new XMLHttpRequest();
req.open("GET", url, true);
req.responseType = "arraybuffer";

req.onload = function() {
  var data = new Uint8Array(req.response);
  var workbook = XLSX.read(data, {type: "array"});

  var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
  var information = XLSX.utils.sheet_to_json(first_worksheet, {header:1});
  console.log(data);
  console.log(workbook);
  console.log(first_worksheet);
  console.log(information);
}

req.send();




mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class App extends Component {
  constructor(props : Props) {
    super(props);
    this.state = {
      lng: -120.426,
      lat: 37.3646,
      zoom: 15
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

    ////// Controls
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    map.addControl(new mapboxgl.NavigationControl());

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

    ///  Icon Markers
    //Water Markers
    waterStation.features.forEach(function(marker) {
      var refill = document.createElement('div');
      refill.className = 'water-station';
      new mapboxgl.Marker(refill).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({offset: 25}).setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>')).addTo(map);
    });
  }

  render() {
    const {lng, lat, zoom} = this.state;

    return (<div>
      <img src={leed} className="App-leed" alt="leed"/>
      <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
        <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
      </div>
      <div ref={el => (this.mapContainer = el)} className="absolute top right left bottom"/>
    </div>);
  }
}

export default App;
