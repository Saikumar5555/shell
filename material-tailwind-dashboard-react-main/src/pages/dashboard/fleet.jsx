import React, { useState, useRef } from "react";
import { Typography, Card, CardBody, Button, Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import LorryImage from "/home/sai/Documents/Saikumar/shell/shell/material-tailwind-dashboard-react-main/src/pages/dashboard/img/lorry.jpg";

const VehicleData = [
  {
    id: 1,
    image: LorryImage,
    status: "Active",
    vehicleNo: "Vehicle 1",
    chassisNo: "12345",
    capacity: "20 tons",
    fuel: "Diesel",
    lastMaintenanceDate: "2024-07-01",
    RUL: "5000 km",
  },
  {
    id: 2,
    image: LorryImage,
    status: "Maintenance",
    vehicleNo: "Vehicle 2",
    chassisNo: "67890",
    capacity: "15 tons",
    fuel: "Petrol",
    lastMaintenanceDate: "2024-06-15",
    RUL: "3000 km",
  },
  {
    id: 3,
    image: LorryImage,
    status: "Available",
    vehicleNo: "Vehicle 3",
    chassisNo: "67890",
    capacity: "15 tons",
    fuel: "Petrol",
    lastMaintenanceDate: "2024-06-15",
    RUL: "3000 km",
  },
  {
    id: 4,
    image: LorryImage,
    status: "Active",
    vehicleNo: "Vehicle 4",
    chassisNo: "67890",
    capacity: "15 tons",
    fuel: "Petrol",
    lastMaintenanceDate: "2024-06-15",
    RUL: "3000 km",
  },
  {
    id: 5,
    image: LorryImage,
    status: "Maintenance",
    vehicleNo: "Vehicle 5",
    chassisNo: "67890",
    capacity: "15 tons",
    fuel: "Petrol",
    lastMaintenanceDate: "2024-06-15",
    RUL: "3000 km",
  },
  {
    id: 6,
    image: LorryImage,
    status: "Active",
    vehicleNo: "Vehicle 6",
    chassisNo: "67890",
    capacity: "15 tons",
    fuel: "Petrol",
    lastMaintenanceDate: "2024-06-15",
    RUL: "3000 km",
  },
  {
    id: 7,
    image: LorryImage,
    status: "Maintenance",
    vehicleNo: "Vehicle 7",
    chassisNo: "67890",
    capacity: "15 tons",
    fuel: "Petrol",
    lastMaintenanceDate: "2024-06-15",
    RUL: "3000 km",
  },
  {
    id: 8,
    image: LorryImage,
    status: "Available",
    vehicleNo: "Vehicle 8",
    chassisNo: "11223",
    capacity: "10 tons",
    fuel: "Diesel",
    lastMaintenanceDate: "2024-07-10",
    RUL: "7000 km",
  },
  {
    id: 9,
    image: LorryImage,
    status: "Active",
    vehicleNo: "Vehicle 9",
    chassisNo: "67890",
    capacity: "15 tons",
    fuel: "Petrol",
    lastMaintenanceDate: "2024-06-15",
    RUL: "3000 km",
  },
  {
    id: 10,
    image: LorryImage,
    status: "Maintenance",
    vehicleNo: "Vehicle 10",
    chassisNo: "67890",
    capacity: "15 tons",
    fuel: "Petrol",
    lastMaintenanceDate: "2024-06-15",
    RUL: "3000 km",
  },
];

function Fleet() {
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [vehicleData, setVehicleData] = useState([
    {
      model: "",
      vehicleNo: "",
      chassisNo: "",
      manufacturer: "",
      odometer: "",
      location: "",
      capacity: "",
      fuel: "",
      lastMaintenanceDate: "",
      RUL: "",
    },
  ]);
  const [filter, setFilter] = useState("All");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-600 text-white";
      case "Maintenance":
        return "bg-orange-600 text-white";
      case "Available":
        return "bg-yellow-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleInputChange = (e, index, field) => {
    const newVehicleData = [...vehicleData];
    newVehicleData[index][field] = e.target.value;
    setVehicleData(newVehicleData);
  };

  const addNewVehicle = () => {
    setVehicleData([
      ...vehicleData,
      {
        model: "",
        vehicleNo: "",
        chassisNo: "",
        manufacturer: "",
        odometer: "",
        location: "",
        capacity: "",
        fuel: "",
        lastMaintenanceDate: "",
        RUL: "",
      },
    ]);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const navigateToAddVehicle = () => {
    setShowAddVehicle(true);
  };

  const navigateBack = () => {
    setShowAddVehicle(false);
  };

  const handleSaveVehicles = () => {
    // Handle saving vehicles here
  };

  const navigatetoheader = () => {
    navigate("/dashboard/header");
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  const filteredVehicleData = filter === "All"
    ? VehicleData
    : VehicleData.filter(vehicle => vehicle.status === filter);

  if (showAddVehicle) {
    return (
      <div className="p-4 flex justify-center">
        <div className="w-full max-w-xlg">
          <div className="flex justify-between items-center mb-4">
            <Button
              onClick={navigateBack}
              style={{ backgroundColor: "#FD6F52", color: "white" }}
            >
              Back
            </Button>
            <Button
              onClick={triggerFileInput}
              style={{ backgroundColor: "#FD6F52", color: "white" }}
            >
              + Add Multiple Vehicles (CSV)
            </Button>
          </div>
          <Typography variant="h6" className="mb-4">
            Add New Vehicle
          </Typography>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="hidden"
            ref={fileInputRef}
          />
          {vehicleData.map((vehicle, index) => (
            <div
              key={index}
              className="mb-6 p-6 bg-white border border-gray-300 rounded shadow-md"
            >
              <div className="mb-4">
                <Input
                  type="text"
                  label="Vehicle Model"
                  value={vehicle.model}
                  onChange={(e) => handleInputChange(e, index, "model")}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  label="Vehicle No"
                  value={vehicle.vehicleNo}
                  onChange={(e) => handleInputChange(e, index, "vehicleNo")}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  label="Chassis No"
                  value={vehicle.chassisNo}
                  onChange={(e) => handleInputChange(e, index, "chassisNo")}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  label="Manufacturer"
                  value={vehicle.manufacturer}
                  onChange={(e) => handleInputChange(e, index, "manufacturer")}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="number"
                  label="Odometer"
                  value={vehicle.odometer}
                  onChange={(e) => handleInputChange(e, index, "odometer")}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  label="Location"
                  value={vehicle.location}
                  onChange={(e) => handleInputChange(e, index, "location")}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  label="Capacity"
                  value={vehicle.capacity}
                  onChange={(e) => handleInputChange(e, index, "capacity")}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  label="Fuel"
                  value={vehicle.fuel}
                  onChange={(e) => handleInputChange (e, index, "fuel")}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="date"
                  label="Last Maintenance Date"
                  value={vehicle.lastMaintenanceDate}
                  onChange={(e) => handleInputChange(e, index, "lastMaintenanceDate")}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="number"
                  label="RUL"
                  value={vehicle.RUL}
                  onChange={(e) => handleInputChange(e, index, "RUL")}
                  fullWidth
                />
              </div>
            </div>
          ))}
          <Button
            onClick={handleSaveVehicles}
            style={{ backgroundColor: "#FD6F52", color: "white" }}
            className="mt-4 ml-4"
          >
            Save Vehicles
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h4">Fleet</Typography>
        <Button
          onClick={navigateToAddVehicle}
          style={{ backgroundColor: "#FD6F52", color: "white" }}
        >
          + Add 
        </Button>
      </div>

      <div className="p-4">
      <div className="flex items-center mb-4 space-x-2">
  <Typography
    variant="button"
    className={`${
      filter === "All" ? "font-bold underline" : ""
    } cursor-pointer py-2 px-4 rounded`}
    onClick={() => handleFilterChange("All")}
  >
    All
  </Typography>
  <Typography
    variant="button"
    className={`${
      filter === "On Trip" ? "font-bold underline" : ""
    } cursor-pointer py-2 px-4 rounded`}
    onClick={() => handleFilterChange("On Trip")}
  >
    On Trip
  </Typography>
  <Typography
    variant="button"
    className={`${
      filter === "Under Maintenance" ? " font-bold underline" : ""
    } cursor-pointer py-2 px-4 rounded`}
    onClick={() => handleFilterChange("Under Maintenance")}
  >
    Under Maintenance
  </Typography>
  <Typography
    variant="button"
    className={`${
      filter === "Un-Assigned" ? " font-bold underline" : ""
    } cursor-pointer py-2 px-4 rounded`}
    onClick={() => handleFilterChange("Un-Assigned")}
  >
    Un-Assigned
  </Typography>
</div>


        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredVehicleData.map((vehicle) => (
          <Card key={vehicle.id} className="w-full max-w-sm cursor-pointer" onClick={() => navigatetoheader()}>
            <CardBody className="flex flex-col">
              <div className="relative h-32 overflow-hidden rounded-t-lg">
                <img
                  src={vehicle.image}
                  alt={vehicle.vehicleNo}
                  className="h-full w-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 space-y-2">
                <div
                  className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getStatusClass(vehicle.status)}`}
                >
                  {vehicle.status}
                </div>
                <Typography variant="body2" className="text-sm">
                  <strong>Vehicle No:</strong> {vehicle.vehicleNo}
                </Typography>
                <Typography variant="body2" className="text-sm">
                  <strong>Chassis No:</strong> {vehicle.chassisNo}
                </Typography>
                <Typography variant="body2" className="text-sm">
                  <strong>Capacity:</strong> {vehicle.capacity}
                </Typography>
                <Typography variant="body2" className="text-sm">
                  <strong>Fuel:</strong> {vehicle.fuel}
                </Typography>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>  
    </div>
  );
}

export default Fleet;
