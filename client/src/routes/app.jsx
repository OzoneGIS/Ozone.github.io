import Dashboard from 'views/Dashboard/Dashboard';
import Maps from 'views/Maps/Maps';

const appRoutes = [
    { path: "/maps", name: "Map", icon: "pe-7s-map-marker", component: Maps},
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard}
];


export default appRoutes;
