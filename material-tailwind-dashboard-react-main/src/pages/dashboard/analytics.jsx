import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from "chart.js";
import ProjectStastics_cost from '@/data/ProjectStastics_cost';
import ProjectStastics_service from '@/data/ProjectStastics_service';
import ProjectStastics from "@/data/ProjectStastics";

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const fuel = [
  {
    tripId:10101,
    date:"12-9-2022",
    speculativeCost:1200,
    actualCost:1000,
    savedCost:200,
    distance:"30Km"

  },
  {
    tripId:10102,
    date:"12-9-2022",
    speculativeCost:1200,
    actualCost:1000,
    savedCost:200,
    distance:"30Km"

  },
  {
    tripId:10103,
    date:"12-9-2022",
    speculativeCost:1200,
    actualCost:1000,
    savedCost:200,
    distance:"30Km"

  },
  {
    tripId:10104,
    date:"12-9-2022",
    speculativeCost:1200,
    actualCost:1000,
    savedCost:200,
    distance:"30Km"

  },
  {
    tripId:10105,
    date:"12-9-2022",
    speculativeCost:1200,
    actualCost:1000,
    savedCost:200,
    distance:"30Km"

  },
  {
    tripId:10106,
    date:"12-9-2022",
    speculativeCost:1200,
    actualCost:1000,
    savedCost:200,
    distance:"30Km"

  },
]

const emission=[
  {
    trip:'10101',
    fuel:'100',
    co2:"2,310",
    nox:"0.2",
    pm:'0.2',
    co:'2.3',
    hc:'0.05',
    so:'0.003'
  },
  {
    trip:'10102',
    fuel:'208',
    co2:"2,310",
    nox:"0.2",
    pm:'0.2',
    co:'2.3',
    hc:'0.05',
    so:'0.003'
  },
  {
    trip:'10103',
    fuel:'170',
    co2:"2,310",
    nox:"0.2",
    pm:'0.2',
    co:'2.3',
    hc:'0.05',
    so:'0.003'
  }
]

// Dummy data for vehicles
const vehicles = [
  {
    image: "/img/lorry.jpg",
    name: "Vehicle A",
    recentTrips: "5",
    resaleValue: "$15,000",
    lastMaintenance: "2024-06-15",
  },
  {
    image: "/img/truck4.webp",
    name: "Vehicle B",
    recentTrips: "8",
    resaleValue: "$20,000",
    lastMaintenance: "2024-05-22",
  },
  // Add more vehicles as needed
];

function Analytics() {
  const [activeTab, setActiveTab] = useState("vehicle");
  const [filter, setFilter] = useState("monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFilterChange = (option) => {
    setFilter(option);
  };

  // Dummy chart data
  const chartData = {
    labels: filter === "monthly" ? Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`) : ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Fuel Costs",
        data: filter === "monthly" ? Array(12).fill(100) : [1200, 1800, 1600, 2200],
        borderColor: "#4EC33D",
        backgroundColor: "rgba(78, 195, 61, 0.2)",
        fill: true,
      },
      {
        label: "Service Costs",
        data: filter === "monthly" ? Array(12).fill(50) : [600, 800, 700, 900],
        borderColor: "#1E90FF",
        backgroundColor: "rgba(30, 144, 255, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-4">
      <Typography variant="h4" className="mb-6">
        Reports
      </Typography>
      
      <div className="flex items-center mb-4 space-x-2">
        <Typography
          variant="button"
          className={`cursor-pointer py-2 px-4 rounded ${activeTab === "vehicle" ? "font-bold underline" : ""}`}
          onClick={() => handleTabChange("vehicle")}
        >
          Vehicle
        </Typography>
        <Typography
          variant="button"
          className={`cursor-pointer py-2 px-4 rounded ${activeTab === "cost" ? "font-bold underline" : ""}`}
          onClick={() => handleTabChange("cost")}
        >
          Cost
        </Typography>
        <Typography
          variant="button"
          className={`cursor-pointer py-2 px-4 rounded ${activeTab === "emission" ? "font-bold underline" : ""}`}
          onClick={() => handleTabChange("emission")}
        >
          Emission
        </Typography>
      </div>

      {activeTab === "vehicle" && (
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
      )}
{/* cost tab-------------------------------------------------------------------------------------------------- */}
{activeTab === "cost" && (
  <div>
    <ProjectStastics_cost/>
    <div className='bg-white p-3 rounded-xl mt-3 overflow-scroll max-h-[350px]'>
      <table className='w-full text-sm '>
        <thead className=' text-left border-y text-gray-800'>
          <tr className=''>
            <th className='px-2 py-4'>Month</th>
            <th>Year</th>
            <th>Total No. of Trips</th>
            <th>Total Fuel Cost</th>
            <th>Total Fuel (in liters)</th>
            <th>Total Distance</th>
          </tr>
        </thead>
        
        {
          fuel.map((fuel,index) => (
            <tbody className='text-left text-gray-800' key={index}>
              <tr className='border-y'>
                <td className='px-2 py-4'>{fuel.month}</td>
                <td className='px-2 py-4'>{fuel.year}</td>
                <td className='px-2 py-4'>{fuel.totalTrips}</td>
                <td className='px-2 py-4'>{fuel.totalFuelCost}</td>
                <td className='px-2 py-4'>{fuel.totalFuel}</td>
                <td className='px-2 py-4'>{fuel.totalDistance}</td>
              </tr>
            </tbody>
          ))
        }
      </table>
    </div>
    <div className='mt-4'>
      <ProjectStastics_service/>
    </div>
    
    <div className='mt-4 grid md:grid-cols-3 gap-3'>
      <div className='bg-white p-6 rounded-xl shadow-xl'>
        <div className='flex gap-2 items-center'>
          <h1 className='text-gray-800 text-md font-semibold'>Service 1 </h1>
          <p className='text-sm items-center'> (19-10-2021)</p>
        </div>
        <div className='mt-3'>
          <table className='text-gray-800'>
            <thead className='text-left text-sm'>
              <tr className='border-b'>
                <th className='px-2 py-2'></th>
                <th className='px-2 py-2'>Components</th>
                <th className='px-2 py-2'>Cost</th>
              </tr>
            </thead>
            <tbody className='text-sm border-b'>
              <tr className='border-b'>
                <td>1</td>
                <td className='px-2 py-2'>Oil and Filter Changes</td>
                <td className='px-2 '>2934</td>
              </tr>
              <tr className='border-b'>
                <td>2</td>
                <td className='px-2 py-2'>Tire Maintenance</td>
                <td className='px-2 py-2'>10982</td>
              </tr>
            </tbody>
          </table>
          <div className='flex gap-3 text-sm mt-4'>
            <h1 className='font-semibold text-gray-800'>Total Maintenance Time:</h1>
            <p className='text-gray-800'>1day3hr20mins</p>
          </div>
          <div className='flex text-sm gap-2'>
            <h1 className='font-semibold text-gray-800'>Total Service Cost:</h1>
            <p className='text-gray-800'>13872</p>
          </div>
        </div>
      </div>
      {/* Repeat the above block for Service 2 and Service 3 */}
    </div>
  </div>
)}

{/*emission tab------------------------------------------------------------------------------------------------*/}
      {activeTab === "emission" && (
        <div>
        <div>
            <ProjectStastics/>
        </div>
        <div className='mt-4 bg-white p-3 rounded-md'>
          <table className='w-full text-left'>
            <thead className=''>
              <tr className='text-gray-800 text-sm border-y'>
                <th className='py-3 px-2'>TripId</th>
                <th className='py-3 px-2'>Fuel Consumed</th>
                <th className='py-3 px-2'>CO2</th>
                <th className='py-3 px-2'>NOx</th>
                <th className='py-3 px-2'>PM</th>
                <th className='py-3 px-2'>CO</th>
                <th className='py-3 px-2'>HC/VOCs</th>
                <th className='py-3 px-2'>SO2</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                emission.map((emission,index) =>(
                  <tr className='text-sm text-gray-800 border-b' key={index}>
                    <th className='py-3 ps-4'>{emission.trip}</th>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.fuel}</li>
                        <li className='text-xs text-gray-600'>liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2 items-center'>
                    <ul className='items-center'>
                        <li>{emission.co2}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.nox}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.pm}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.co}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.hc}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.so}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    </div>
      )}
    </div>
  );
}

export default Analytics;
