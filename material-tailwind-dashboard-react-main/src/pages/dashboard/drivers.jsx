// import React, { useState } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Input
// } from "@material-tailwind/react";
// import { TruckIcon, UserIcon, CalendarIcon } from "@heroicons/react/24/outline";
// import { Modal, Backdrop, Fade } from '@mui/material';

// // Images from public folder
// const driver1 = "/img/team-1.jpeg";
// const driver2 = "/img/team-2.jpeg";
// const driver3 = "/img/team-3.jpeg";
// const driver4 = "/img/team-4.jpeg";

// function Drivers() {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     dateOfBirth: '',
//     driverId: '',
//     aadharNumber: '',
//     nationalId: '',
//     phoneNumber: '',
//     emailAddress: '', 
//     photo: null,
//     drivingLicense: null
//   });

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({ ...formData, [name]: files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//     // Reset form and close the modal after submission
//     setFormData({
//       name: '',
//       dateOfBirth: '',
//       driverId: '',
//       aadharNumber: '',
//       nationalId: '',
//       phoneNumber: '',
//       emailAddress: '',
//       photo: null,
//       drivingLicense: null
//     });
//     handleClose();
//   };

//   // Dummy data for drivers
//   const driverProfiles = [
//     { image: driver1, name: 'John Doe', driverId: 'driver1', vehicleId: '133', dateOfJoin: new Date('2023-01-15') },
//     { image: driver2, name: 'Jane Smith', driverId: 'driver2', vehicleId: '244', dateOfJoin: new Date('2023-02-20') },
//     { image: driver3, name: 'Mike Johnson', driverId: 'driver3', vehicleId: '465', dateOfJoin: new Date('2023-03-25') },
//     { image: driver4, name: 'Emily Davis', driverId: 'driver4', vehicleId: '987', dateOfJoin: new Date('2023-04-30') },
//     { image: driver4, name: 'Emily Davis', driverId: 'driver4', vehicleId: '987', dateOfJoin: new Date('2023-04-30') },
//     { image: driver1, name: 'John Doe', driverId: 'driver1', vehicleId: '133', dateOfJoin: new Date('2023-01-15') },
//     { image: driver2, name: 'Jane Smith', driverId: 'driver2', vehicleId: '244', dateOfJoin: new Date('2023-02-20') },
//     { image: driver3, name: 'Mike Johnson', driverId: 'driver3', vehicleId: '465', dateOfJoin: new Date('2023-03-25') },
//     { image: driver4, name: 'Emily Davis', driverId: 'driver4', vehicleId: '987', dateOfJoin: new Date('2023-04-30') },
//     { image: driver1, name: 'John Doe', driverId: 'driver1', vehicleId: '133', dateOfJoin: new Date('2023-01-15') },
//     { image: driver2, name: 'Jane Smith', driverId: 'driver2', vehicleId: '244', dateOfJoin: new Date('2023-02-20') },
//     { image: driver3, name: 'Mike Johnson', driverId: 'driver3', vehicleId: '465', dateOfJoin: new Date('2023-03-25') },
//     { image: driver4, name: 'Emily Davis', driverId: 'driver4', vehicleId: '987', dateOfJoin: new Date('2023-04-30') },
//     { image: driver1, name: 'John Doe', driverId: 'driver1', vehicleId: '133', dateOfJoin: new Date('2023-01-15') },
//     { image: driver2, name: 'Jane Smith', driverId: 'driver2', vehicleId: '244', dateOfJoin: new Date('2023-02-20') },
//     { image: driver3, name: 'Mike Johnson', driverId: 'driver3', vehicleId: '465', dateOfJoin: new Date('2023-03-25') },
//     { image: driver4, name: 'Emily Davis', driverId: 'driver4', vehicleId: '987', dateOfJoin: new Date('2023-04-30') }
//   ];

//   return (
//     <div className="p-4">
//       <div className="flex items-center justify-between mb-10">
//         <Typography variant="h4">
//           Driver Profiles
//         </Typography>
//         <Button
//           style={{ backgroundColor: '#FD6F52', borderColor: '#FD6F52' }}
//           onClick={handleOpen}
//         >
//           + Add New Driver
//         </Button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
//         {driverProfiles.map((driver, index) => (
//           <Card key={index} className="w-full">
//             <CardHeader
//               color="blue"
//               className="relative flex items-center justify-center h-48"
//             >
//               <img
//                 src={driver.image}
//                 alt={driver.name}
//                 className="w-full h-full object-cover"
//               />
//             </CardHeader>
//             <CardBody>
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center">
//                   <UserIcon className="h-5 w-5 mr-2" />
//                   <Typography variant="body2" className="w-full">
//                     <span className="font-medium">{driver.driverId}</span>
//                   </Typography>
//                 </div>
//                 <div className="flex items-center">
//                   <TruckIcon className="h-5 w-5 mr-2" />
//                   <Typography variant="body2" className="w-full">
//                     <span className="font-medium">{driver.vehicleId}</span>
//                   </Typography>
//                 </div>
//                 <div className="flex items-center">
//                   <CalendarIcon className="h-5 w-5 mr-2" />
//                   <Typography variant="body2" className="w-full">
//                     <span className="font-medium">
//                       {driver.dateOfJoin.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
//                     </span>
//                   </Typography>
//                 </div>
//               </div>
//             </CardBody>
//           </Card>
//         ))}
//       </div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//           style: { backdropFilter: 'blur(10px)' } // Adjust blur intensity as needed
//         }}
//       >
//         <Fade in={open}>
//           <div className="flex items-center justify-center min-h-screen p-4">
//             <div className="bg-white p-6 border rounded-lg w-full max-w-4xl">
//               <form onSubmit={handleSubmit} className="flex flex-col">
//                 <div className="flex justify-between items-center mb-6">
//                   <Button
//                     onClick={handleClose}
//                     style={{ backgroundColor: '#FD6F52', borderColor: '#FD6F52' }}
//                   >
//                     Back
//                   </Button>
//                   <Typography variant="h5" className="text-center flex-grow">
//                     Add New Driver
//                   </Typography>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   <Input
//                     label="Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <Input
//                     label="Date of Birth"
//                     type="date"
//                     name="dateOfBirth"
//                     value={formData.dateOfBirth}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <Input
//                     label="Driver ID"
//                     name="driverId"
//                     value={formData.driverId}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <Input
//                     label="Aadhar Number"
//                     name="aadharNumber"
//                     value={formData.aadharNumber}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <Input
//                     label="National ID"
//                     name="nationalId"
//                     value={formData.nationalId}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <Input
//                     label="Phone Number"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <Input
//                     label="Email Address"
//                     type="email"
//                     name="emailAddress"
//                     value={formData.emailAddress}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <Input
//                     label="Photo"
//                     type="file"
//                     name="photo"
//                     onChange={handleFileChange}
//                   />
//                   <Input
//                     label="Driving License"
//                     type="file"
//                     name="drivingLicense"
//                     onChange={handleFileChange}
//                   />
//                 </div>

//                 <div className="flex justify-end">
//                   <Button type="submit" style={{ backgroundColor: '#FD6F52', borderColor: '#FD6F52' }}>
//                     Save
//                   </Button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }

// export default Drivers;



import React, { useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input
} from "@material-tailwind/react";
import { TruckIcon, UserIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { Modal, Backdrop, Fade } from '@mui/material';

// Images from public folder
const driver1 = "/img/team-1.jpeg";
const driver2 = "/img/team-2.jpeg";
const driver3 = "/img/team-3.jpeg";
const driver4 = "/img/team-4.jpeg";

function Drivers() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    driverId: '',
    aadharNumber: '',
    nationalId: '',
    phoneNumber: '',
    emailAddress: '', 
    photo: null,
    drivingLicense: null
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form and close the modal after submission
    setFormData({
      name: '',
      dateOfBirth: '',
      driverId: '',
      aadharNumber: '',
      nationalId: '',
      phoneNumber: '',
      emailAddress: '',
      photo: null,
      drivingLicense: null
    });
    handleClose();
  };

  // Dummy data for drivers
  const driverProfiles = [
    { image: driver1, name: 'John Doe', driverId: 'driver1', vehicleId: '133', dateOfJoin: new Date('2023-01-15') },
    { image: driver2, name: 'Jane Smith', driverId: 'driver2', vehicleId: '244', dateOfJoin: new Date('2023-02-20') },
    { image: driver3, name: 'Mike Johnson', driverId: 'driver3', vehicleId: '465', dateOfJoin: new Date('2023-03-25') },
    { image: driver4, name: 'Emily Davis', driverId: 'driver4', vehicleId: '987', dateOfJoin: new Date('2023-04-30') },
    { image: driver4, name: 'Emily Davis', driverId: 'driver4', vehicleId: '987', dateOfJoin: new Date('2023-04-30') },
    { image: driver1, name: 'John Doe', driverId: 'driver1', vehicleId: '133', dateOfJoin: new Date('2023-01-15') },
    { image: driver2, name: 'Jane Smith', driverId: 'driver2', vehicleId: '244', dateOfJoin: new Date('2023-02-20') },
    { image: driver3, name: 'Mike Johnson', driverId: 'driver3', vehicleId: '465', dateOfJoin: new Date('2023-03-25') },
    { image: driver4, name: 'Emily Davis', driverId: 'driver4', vehicleId: '987', dateOfJoin: new Date('2023-04-30') },
    { image: driver1, name: 'John Doe', driverId: 'driver1', vehicleId: '133', dateOfJoin: new Date('2023-01-15') },
    { image: driver2, name: 'Jane Smith', driverId: 'driver2', vehicleId: '244', dateOfJoin: new Date('2023-02-20') },
    { image: driver3, name: 'Mike Johnson', driverId: 'driver3', vehicleId: '465', dateOfJoin: new Date('2023-03-25') },
    { image: driver4, name: 'Emily Davis', driverId: 'driver4', vehicleId: '987', dateOfJoin: new Date('2023-04-30') },
    { image: driver1, name: 'John Doe', driverId: 'driver1', vehicleId: '133', dateOfJoin: new Date('2023-01-15') },
    { image: driver2, name: 'Jane Smith', driverId: 'driver2', vehicleId: '244', dateOfJoin: new Date('2023-02-20') },
    { image: driver3, name: 'Mike Johnson', driverId: 'driver3', vehicleId: '465', dateOfJoin: new Date('2023-03-25') },
    { image: driver4, name: 'Emily Davis', driverId: 'driver4', vehicleId: '987', dateOfJoin: new Date('2023-04-30') }
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-10">
        <Typography variant="h4">
          Driver Profiles
        </Typography>
        <Button
          style={{ backgroundColor: '#FD6F52', borderColor: '#FD6F52' }}
          onClick={handleOpen}
        >
          + Add New Driver
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {driverProfiles.map((driver, index) => (
          <Card key={index} className="w-full">
            <CardHeader
              color="blue"
              className="relative flex items-center justify-center h-48"
            >
              <img
                src={driver.image}
                alt={driver.name}
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  <Typography variant="body2" className="w-full">
                    <span className="font-medium">{driver.driverId}</span>
                  </Typography>
                </div>
                <div className="flex items-center">
                  <TruckIcon className="h-5 w-5 mr-2" />
                  <Typography variant="body2" className="w-full">
                    <span className="font-medium">{driver.vehicleId}</span>
                  </Typography>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <Typography variant="body2" className="w-full">
                    <span className="font-medium">
                      {driver.dateOfJoin.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                    </span>
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
          style: { backdropFilter: 'none' } // Remove background blur
        }}
      >
        <Fade in={open}>
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white p-6 border rounded-lg shadow-lg w-full max-w-4xl">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <Button
                    onClick={handleClose}
                    style={{ backgroundColor: '#FD6F52', borderColor: '#FD6F52' }}
                  >
                    Back
                  </Button>
                  <Typography variant="h5" className="text-center flex-grow">
                    Add New Driver
                  </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Date of Birth"
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Driver ID"
                    name="driverId"
                    value={formData.driverId}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Aadhar Number"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="National ID"
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Photo"
                    type="file"
                    name="photo"
                    onChange={handleFileChange}
                  />
                  <Input
                    label="Driving License"
                    type="file"
                    name="drivingLicense"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" style={{ backgroundColor: '#FD6F52', borderColor: '#FD6F52' }}>
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Drivers;
