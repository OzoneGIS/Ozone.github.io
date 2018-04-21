import Dashboard from "views/Dashboard/Dashboard.jsx";
import Icons from "views/Components/Icons.jsx";
import Charts from "views/Charts/Charts.jsx";

//Maps
import Environmental from "views/Maps/EnvironmentalMap.jsx";
import Economic from "views/Maps/EconomicMap.jsx";
import Social from "views/Maps/SocialMap.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";

var dashRoutes = [
  {
    collapse: true,
    path: "/maps",
    name: "Maps",
    state: "openMaps",
    icon: "location_pin",
    views: [
      {
        path: "/maps/environmental",
        name: "Environmental",
        mini: "ENM",
        component: Environmental
      }, {
        path: '/maps/economic',
        name: 'Economic',
        mini: "ECM",
        component: Economic
      }, {
        path: '/maps/social',
        name: 'Social',
        mini: "SM",
        component: Social
      }, {
        path: '/maps/full-screen-map',
        name: 'Full Screen Map',
        mini: 'FSM',
        component: FullScreenMap
      }
    ]
  }, {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  }, {
    path: "/charts",
    name: "Charts",
    icon: "business_chart-pie-36",
    component: Charts
  }, {
    collapse: true,
    path: "/components",
    name: "Components",
    state: "openComponents",
    icon: "education_atom",
    views: [
      {
        path: "/components/icons",
        name: "Icons",
        mini: "I",
        component: Icons
      }
    ]
  }, {
    redirect: true,
    path: "/",
    pathTo: "/dashboard",
    name: "Dashboard"
  }
];
export default dashRoutes;
