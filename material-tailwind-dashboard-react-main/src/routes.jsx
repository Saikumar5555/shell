// import {
//   HomeIcon,
//   UserCircleIcon,
//   TableCellsIcon,
//   InformationCircleIcon,
//   ServerStackIcon,
//   RectangleStackIcon,
// } from "@heroicons/react/24/solid";
// import { Home, Fleet, Assign,OverView,FuelHistory,ServiceHistory,WorkOrders } from "@/pages/dashboard";
// import { Header } from "./widgets/layout";


// const icon = {
//   className: "w-5 h-5 text-inherit",
// };

// export const routes = [
//   {
//     layout: "dashboard",
//     pages: [
//       {
//         icon: <HomeIcon {...icon} />,
//         name: "Home",
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         icon: <UserCircleIcon {...icon} />,
//         name: "Fleet",
//         path: "/fleet/*",
//         element: <Fleet />,
//         children: [
//           {
//             path: "/header/*",
//             element: <Header />,
//             children: [
//               {
//                 children: [
//                   {
//                     path: "overview",
//                     element: <OverView />,
//                   },
//                   {
//                     path: "serviceHistory",
//                     element: <ServiceHistory />,
//                   },
//                   {
//                     path: "fuelHistory",
//                     element: <FuelHistory />,
//                   },
//                   {
//                     path: "workOrders",
//                     element: <WorkOrders />,
//                   },
//                 ],
//               }
//             ]
//           },
//         ]
//       },
//       {
//         icon: <TableCellsIcon {...icon} />,
//         name: "Assign",
//         path: "/assign",
//         element: <Assign />,
//       },
//     ],
//   },

// ];

// export default routes;


// import {
//   HomeIcon,
//   UserCircleIcon,
//   TableCellsIcon,
// } from "@heroicons/react/24/solid";
// import { Home, Fleet, Assign, OverView, FuelHistory, ServiceHistory, WorkOrders } from "@/pages/dashboard";
// import { Header } from "./widgets/layout";

// const icon = {
//   className: "w-5 h-5 text-inherit",
// };

// export const routes = [
//   {
//     layout: "dashboard",
//     pages: [
//       {
//         icon: <HomeIcon {...icon} />,
//         name: "Home",
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         icon: <UserCircleIcon {...icon} />,
//         name: "Fleet",
//         path: "/fleet",
//         element: <Fleet />,
//         children: [
//           {
//             path: "header/*",
//             element: <Header />,
//             children: [
//               {
//                 path: "overview",
//                 element: <OverView />,
//               },
//               {
//                 path: "serviceHistory",
//                 element: <ServiceHistory />,
//               },
//               {
//                 path: "fuelHistory",
//                 element: <FuelHistory />,
//               },
//               {
//                 path: "workOrders",
//                 element: <WorkOrders />,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         icon: <TableCellsIcon {...icon} />,
//         name: "Assign",
//         path: "/assign",
//         element: <Assign />,
//       },
//     ],
//   },
// ];

// export default routes;


import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  ChartBarIcon,
  MapIcon,
  UsersIcon
} from "@heroicons/react/24/solid";
import { Home, Fleet, Assign, Analytics, Trips,Drivers } from "@/pages/dashboard";
import { Header } from "@/widgets/layout";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Fleet",
        path: "/fleet",
        element: <Fleet />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Assign",
        path: "/assign",
        element: <Assign />,
      },

      {
        icon: <ChartBarIcon {...icon} />,
        name: "Reports",
        path: "/analytics",
        element: <Analytics />,
      },
      {
        icon: <MapIcon {...icon} />,
        name: "Trips",
        path: "/trips",
        element: <Trips />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "Drivers",
        path: "/drivers",
        element: <Drivers />,
      },
    ],
  },
];

export default routes;
