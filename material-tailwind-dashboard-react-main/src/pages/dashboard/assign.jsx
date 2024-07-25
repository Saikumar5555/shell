import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
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
      temperatureControl: "",
      deliveryDate: "",
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
    newFreightData[index][field] = e.target.value;
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
        temperatureControl: "",
        deliveryDate: "",
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
          className="mb-4"
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
        </div>
        <div>
          <Typography variant="h5" className="text-gray-800 font-medium mb-6">
            What If Analysis
          </Typography>
          <Card className="flex items-start flex-row space-x-6 p-6 shadow-lg rounded-lg bg-white">
            <img
              src={TruckImage}
              alt="Analysis"
              className="h-80 w-80 object-cover rounded-lg border border-gray-200"
            />
            <div className="flex flex-col space-y-4 text-gray-700 w-full max-w-lg">
              <Typography variant="body1">
                <strong>Reduced emissions by 60 percent.</strong>
              </Typography>
              <Typography variant="body1">
                <strong>Reduced fuel cost by 20 percent.</strong>
              </Typography>
              <Typography variant="body1">
                <strong>Reduced maintenance cost by 30 percent.</strong>
              </Typography>
              <Typography variant="body1">
                <strong>Reduction in downtime by 10 percent.</strong>
              </Typography>
            </div>
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
          className="mb-6 p-6 bg-white border border-gray-300 rounded shadow-md w-full"
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
              style={{ backgroundColor: "#FD6F52", color: "white" }} // Inline styles for button color
            >
              Next
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
              <Typography>Size (kg)</Typography>
              <Input
                type="text"
                name="size"
                value={freight.size}
                onChange={(e) => handleInputChange(e, index, "size")}
                className="col-span-2"
                label="Size (kg)"
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
              <Typography>Temperature Control</Typography>
              <Input
                type="text"
                name="temperatureControl"
                value={freight.temperatureControl}
                onChange={(e) => handleInputChange(e, index, "temperatureControl")}
                className="col-span-2"
                label="Temperature Control"
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
        className="mt-4"
      >
        Save Freights
      </Button>
    </div>
  );
}

export default Assign;
