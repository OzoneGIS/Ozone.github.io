import Dashboard from "views/Dashboard/Dashboard.jsx";

//Maps
import Environmental from "views/Maps/EnvironmentalMap.jsx";
import Economic from "views/Maps/EconomicMap.jsx";
import Social from "views/Maps/SocialMap.jsx";

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
      }
    ]
  }, {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  }, {
    redirect: true,
    path: "/",
    pathTo: "/dashboard",
    name: "Dashboard"
  }
];
export default dashRoutes;
