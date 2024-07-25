// import React from "react";
// import { Typography, Card, CardBody } from "@material-tailwind/react";

// // Dummy data for vehicles
// const vehicles = [
//   {
//     image: "/img/vehicle-1.jpeg",
//     name: "Vehicle A",
//     recentTrips: "5",
//     resaleValue: "$15,000",
//     lastMaintenance: "2024-06-15"
//   },
//   {
//     image: "/img/vehicle-2.jpeg",
//     name: "Vehicle B",
//     recentTrips: "8",
//     resaleValue: "$20,000",
//     lastMaintenance: "2024-05-22"
//   },
//   {
//     image: "/img/vehicle-3.jpeg",
//     name: "Vehicle C",
//     recentTrips: "3",
//     resaleValue: "$18,000",
//     lastMaintenance: "2024-07-01"
//   },
//   {
//     image: "/img/vehicle-4.jpeg",
//     name: "Vehicle D",
//     recentTrips: "7",
//     resaleValue: "$22,000",
//     lastMaintenance: "2024-04-10"
//   },
//   // Add more vehicles as needed
// ];

// function Analytics() {
//   return (
//     <div className="p-4">
//       <Typography variant="h4" className="mb-6">
//         Vehicle Analytics
//       </Typography>
      
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recent Trips</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resale Value</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Maintenance</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {vehicles.map((vehicle, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center">
//                     <img src={vehicle.image} alt={vehicle.name} className="h-12 w-12 rounded-full object-cover mr-4" />
//                     <Typography variant="body1">{vehicle.name}</Typography>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {vehicle.recentTrips}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {vehicle.resaleValue}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {vehicle.lastMaintenance}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Analytics;
// import React from 'react'

// export default function analytics() {
//   return (
//     <div>analytics</div>
//   )
// }


import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

// Dummy data for vehicles
const vehicles = [
  {
    image: "/img/lorry.jpg", // Ensure this path is correct
    name: "Vehicle A",
    recentTrips: "5",
    resaleValue: "$15,000",
    lastMaintenance: "2024-06-15"
  },
  {
    image: "/img/truck4.webp",
    name: "Vehicle B",
    recentTrips: "8",
    resaleValue: "$20,000",
    lastMaintenance: "2024-05-22"
  },
  {
    image: "/img/truck1.webp",
    name: "Vehicle C",
    recentTrips: "3",
    resaleValue: "$18,000",
    lastMaintenance: "2024-07-01"
  },
  {
    image: "/img/truck.jpg ",
    name: "Vehicle D",
    recentTrips: "7",
    resaleValue: "$22,000",
    lastMaintenance: "2024-04-10"
  },
  // Add more vehicles as needed
];

function Analytics() {
  return (
    <div className="p-4">
      <Typography variant="h4" className="mb-6">
        Vehicle Analytics
      </Typography>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recent Trips</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resale Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Maintenance</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vehicles.map((vehicle, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img src={vehicle.image} alt={vehicle.name} className="h-12 w-12 rounded-full object-cover mr-4" />
                    <Typography variant="body1">{vehicle.name}</Typography>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {vehicle.recentTrips}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {vehicle.resaleValue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {vehicle.lastMaintenance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Analytics;
