import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
  Radio,
} from "@material-tailwind/react";
import TruckImage from "./lorry.jpg";

const FleetOptions = [
  {
    id: 1,
    image: TruckImage,
    name: "Lowest carbon emission",
    vehicle: "EcoTruck X1",
  },
  {
    id: 2,
    image: TruckImage,
    name: "Lowest cost with moderate emissions",
    vehicle: "EconomyTruck Y2",
  },
  {
    id: 3,
    image: TruckImage,
    name: "Lowest Time with higher emissions",
    vehicle: "SpeedTruck Z3",
  },
];

function Assign() {
  const [freightData, setFreightData] = useState([
    {
      type: "",
      size: "",
      fromLocation: "",
      toLocation: "",
      dimensions: "",
      refrigeration: null, // null for unselected, true for yes, false for no
      deliveryDate: "",
      pickupDate: "",
      driverName: "", // Added driverName field
      driverID: "", // Added driverID field
    },
  ]);
  const [view, setView] = useState("form"); // State to switch between views
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleInputChange = (e, index, field) => {
    const newFreightData = [...freightData];
    if (field === "refrigeration") {
      newFreightData[index][field] = e.target.value === "yes";
    } else {
      newFreightData[index][field] = e.target.value;
    }
    setFreightData(newFreightData);
  };

  const addNewFreight = () => {
    setFreightData([
      ...freightData,
      {
        type: "",
        size: "",
        fromLocation: "",
        toLocation: "",
        dimensions: "",
        refrigeration: null,
        deliveryDate: "",
        pickupDate: "",
        driverName: "", // Initialize driverName for new freight
        driverID: "", // Initialize driverID for new freight
      },
    ]);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleNext = () => {
    setView("fleet");
  };

  const handleBack = () => {
    setView("form");
  };

  if (view === "fleet") {
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <Typography variant="h4" className="text-gray-900 font-semibold mb-8">
          Assign Fleet
        </Typography>
        <Button
          onClick={handleBack}
          style={{ backgroundColor: "#FD6F52", color: "white" }}
          className="mb-4 rounded-lg"
        >
          Back
        </Button>
        <div className="mb-8">
          <Typography variant="h5" className="text-gray-800 font-medium mb-4">
            Your Fleet Options
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FleetOptions.map((option) => (
              <Card
                key={option.id}
                className="flex flex-col shadow-lg rounded-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={option.image}
                  alt={option.name}
                  className="h-40 w-full object-cover rounded-t-lg"
                />
                <div
                  className="p-4"
                  style={{ backgroundColor: "#FD6F52", color: "white" }}
                >
                  <Typography variant="body1" className="font-medium mb-1">
                    {option.vehicle}
                  </Typography>
                  <Typography variant="body2">{option.name}</Typography>
                </div>
              </Card>
            ))}
          </div>
          <Typography variant="h5" className="text-gray-800 font-medium mt-8 mb-4">
            Assigned Driver
          </Typography>
          <Card className="mb-6 p-6 bg-white border border-gray-300 rounded-lg shadow-md w-full">
            <CardBody className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-4 items-center">
                <Typography>Driver Name</Typography>
                <Typography className="col-span-2 font-medium">John Doe</Typography>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <Typography>Driver ID</Typography>
                <Typography className="col-span-2 font-medium">D123456</Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <Typography variant="h4" className="mb-6">
        Assign Freight
      </Typography>
      <div className="flex space-x-4 mb-4">
        {/* <Button
          onClick={triggerFileInput}
          style={{ backgroundColor: "#FD6F52", color: "white" }}
          className="mb-4"
        >
          + Add Multiple Freights (csv)
        </Button> */}
      </div>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="hidden"
        ref={fileInputRef}
      />
      {freightData.map((freight, index) => (
        <Card
          key={index}
          className="mb-6 p-6 bg-white border border-gray-300 rounded-lg shadow-md w-full"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-4 flex justify-between items-center"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Enter Freight Details
            </Typography>
            <Button
              onClick={handleNext}
              style={{ backgroundColor: "#FD6F52", color: "white" }}
              className="mt-4 mb-4 rounded-lg"
            >
              Show vehicles
            </Button>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4 items-center">
              <Typography>Type</Typography>
              <Input
                type="text"
                name="type"
                value={freight.type}
                onChange={(e) => handleInputChange(e, index, "type")}
                className="col-span-2"
                label="Type"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <Typography>Size (Tons)</Typography>
              <Input
                type="text"
                name="size"
                value={freight.size}
                onChange={(e) => handleInputChange(e, index, "size")}
                className="col-span-2"
                label="Size (Tons)"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <Typography>From Location</Typography>
              <Input
                type="text"
                name="fromLocation"
                value={freight.fromLocation}
                onChange={(e) => handleInputChange(e, index, "fromLocation")}
                className="col-span-2"
                label="From Location"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <Typography>To Location</Typography>
              <Input
                type="text"
                name="toLocation"
                value={freight.toLocation}
                onChange={(e) => handleInputChange(e, index, "toLocation")}
                className="col-span-2"
                label="To Location"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <Typography>Dimensions</Typography>
              <Input
                type="text"
                name="dimensions"
                value={freight.dimensions}
                onChange={(e) => handleInputChange(e, index, "dimensions")}
                className="col-span-2"
                label="Dimensions"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <Typography>Refrigeration</Typography>
              <div className="col-span-2 flex items-center space-x-4">
                <Radio
                  id={`refrigeration-yes-${index}`}
                  name={`refrigeration-${index}`}
                  value="yes"
                  checked={freight.refrigeration === true}
                  onChange={(e) => handleInputChange(e, index, "refrigeration")}
                  label="Yes"
                />
                <Radio
                  id={`refrigeration-no-${index}`}
                  name={`refrigeration-${index}`}
                  value="no"
                  checked={freight.refrigeration === false}
                  onChange={(e) => handleInputChange(e, index, "refrigeration")}
                  label="No"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <Typography>Pickup Date</Typography>
              <Input
                type="date"
                name="pickupDate"
                value={freight.pickupDate}
                onChange={(e) => handleInputChange(e, index, "pickupDate")}
                className="col-span-2"
                label="Pickup Date"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <Typography>Delivery Date</Typography>
              <Input
                type="date"
                name="deliveryDate"
                value={freight.deliveryDate}
                onChange={(e) => handleInputChange(e, index, "deliveryDate")}
                className="col-span-2"
                label="Delivery Date"
              />
            </div>
          </CardBody>
        </Card>
      ))}
      <Button
        style={{ backgroundColor: "#FD6F52", color: "white" }}
        className="mt-4 rounded-lg"
        onClick={addNewFreight}
      >
        Add New Freight
      </Button>
    </div>
  );
}

export default Assign;
