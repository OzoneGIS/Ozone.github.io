import Dashboard from "views/Dashboard/Dashboard.jsx";
import Icons from "views/Components/Icons.jsx";
import Table from "views/Tables/ReactTable.jsx";

//Maps
import Environmental from "views/Maps/EnvironmentalMap.jsx";
import Economic from "views/Maps/EconomicMap.jsx";
import Social from "views/Maps/SocialMap.jsx";
import DevMap from "views/Maps/DevMap.jsx";

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
        mini: "EN",
        component: Environmental
      }, {
        path: '/maps/economic',
        name: 'Economic',
        mini: "EC",
        component: Economic
      }, {
        path: '/maps/social',
        name: 'Social',
        mini: "SM",
        component: Social
      }, {
        path: '/maps/dev',
        name: 'Social',
        mini: "SM",
        component: DevMap
      }
    ]
  }, {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  }, {
    path: "/icons",
    invisible: true,
    name: "Icons",
    icon: "design_app",
    component: Icons
  }, {
    path: "/tables",
    invisible: true,
    name: "Icons",
    icon: "design_app",
    component: Table
  }, {
    redirect: true,
    path: "/",
    pathTo: "/dashboard",
    name: "Dashboard"
  }
];
export default dashRoutes;
