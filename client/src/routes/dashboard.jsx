import Icons from "views/Components/Icons.jsx";
import Table from "views/Tables/ReactTable.jsx";

//Maps
import Environmental from "views/Maps/EnvironmentalMap.jsx";
import Economic from "views/Maps/EconomicMap.jsx";
import Social from "views/Maps/SocialMap.jsx";
import DevMap from "views/Maps/DevMap.jsx";

//Dashboards
import DashboardCOB1 from "views/Dashboard/DashboardCOB1.jsx";
import DashboardCOB2 from "views/Dashboard/DashboardCOB2.jsx";
import DashboardSSB from "views/Dashboard/DashboardSSB.jsx";
import DashboardSSM from "views/Dashboard/DashboardSSM.jsx";
import DashboardSE1 from "views/Dashboard/DashboardSE1.jsx";
import DashboardSE2 from "views/Dashboard/DashboardSE2.jsx";
import DashboardKL from "views/Dashboard/DashboardKL.jsx";


//Components
import Wizard from "../views/Forms/Wizard/Wizard.jsx";
import ExtendedForm from "../views/Forms/ExtendedForms.jsx";
import RegularForm from "../views/Forms/RegularForms.jsx";
import ValidationForm from "../views/Forms/ValidationForms.jsx";

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
      }
    ]
  }, {
    collapse: true,
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    views: [
      {
        path: '/dashboard/cob1',
        name: 'Classroom and Office Building 1',
        mini: 'COB1',
        component: DashboardCOB1
      }, {
        path: '/dashboard/cob2',
        name: 'Classroom and Office Building 2',
        mini: 'COB2',
        component: DashboardCOB2
      }, {
        path: '/dashboard/ssm',
        name: 'Social Sciences and Management',
        mini: 'SSM',
        component: DashboardSSM
      }, {
        path: '/dashboard/ssb',
        name: 'Student Services Building',
        mini: 'SSB',
        component: DashboardSSB
      }, {
        path: '/dashboard/se1',
        name: 'School and Engineering 1',
        mini: 'SE1',
        component: DashboardSE1
      }, {
        path: '/dashboard/se2',
        name: 'School and Engineering 2',
        mini: 'SOE2',
        component: DashboardSE2
      }, {
        path: '/dashboard/kl',
        name: 'Kolligian Library',
        mini: 'KL',
        component: DashboardKL
      }
    ]
  }, {
    path: '/maps/dev',
    invisible: true,
    name: 'Social',
    mini: "SM",
    component: DevMap
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
    path: "/wizard",
    invisible: true,
    name: "Wizard",
    icon: "design_app",
    component: Wizard
  }, {
    path: "/extended",
    invisible: true,
    name: "Extended Form",
    icon: "design_app",
    component: ExtendedForm
  }, {
    path: "/regular",
    invisible: true,
    name: "Regular Form",
    icon: "design_app",
    component: RegularForm
  }, {
    path: "/validation",
    invisible: true,
    name: "Validation Form",
    icon: "design_app",
    component: ValidationForm
  }, {
    redirect: true,
    path: "/",
    pathTo: "/maps/environmental",
    name: "Environmental"
  }
];
export default dashRoutes;
