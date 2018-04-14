import Dashboard from 'views/Dashboard/Dashboard';
import Icons from 'views/Icons/Icons';
import Maps from 'views/Maps/Maps';
import DevMap from 'views/Maps/DevMap.jsx';


const appRoutes = [
    { path: "/maps", name: "Map", icon: "pe-7s-map-marker", component: Maps},
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard},
    { path: "/devmaps", name: "DevMap", icon: "pe-7s-map-marker", component: DevMap},
    { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons }
  ];

export default appRoutes;
