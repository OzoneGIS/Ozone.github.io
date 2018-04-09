import Dashboard from 'views/Dashboard/Dashboard';
//import UserProfile from 'views/UserProfile/UserProfile';
//import Icons from 'views/Icons/Icons';
import Maps from 'views/Maps/Maps';

const appRoutes = [
    { path: "/maps", name: "Map", icon: "pe-7s-map-marker", component: Maps },
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    //{ path: "/user", name: "User Profile", icon: "pe-7s-user", component: UserProfile },
    //{ path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
    { redirect: true, path:"/", to:"/maps", name: "Maps" }
];

export default appRoutes;
