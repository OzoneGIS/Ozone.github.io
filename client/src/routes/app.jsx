import Dashboard from 'views/Dashboard/Dashboard';
import Maps from 'views/Maps/Maps';
import DevMap from 'views/Maps/DevMap';
import Icons from 'views/Icons/Icons.jsx';

const appRoutes = [
    { path: "/maps", name: "Map", icon: "pe-7s-map-2", component: Maps},
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-airplay", component: Dashboard},
    { path: '/icons', name: 'Icons', icon: 'pe-7s-cloud', component: Icons},
    { path: "/devmap", name: "DevMap", icon: "pe-7s-map", component: DevMap},
    { redirect: true, path: "/", to: "/maps", name: "Maps" }
];


export default appRoutes;
