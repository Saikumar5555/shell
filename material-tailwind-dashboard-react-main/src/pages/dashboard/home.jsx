import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";
import {
  ArrowUpIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsChartsData,
  ordersOverviewData,
} from "@/data";
import { ClockIcon } from "@heroicons/react/24/solid";
import AsdImage from "/home/sai/Downloads/material-tailwind-dashboard-react-main (1)/material-tailwind-dashboard-react-main/src/pages/dashboard/thor.jpeg";

// Sample data for comments
const recentCommentsData = [
  { id: 1, name: "John Doe", profilePic: AsdImage, comment: "Great job on the recent project! The new update is fantastic. Looking forward to the next release.", timestamp: "2 hours ago" },
  { id: 2, name: "Jane Smith", profilePic:AsdImage, comment: "The new update is fantastic. Looking forward to the next release.", timestamp: "1 day ago" },
  { id: 3, name: "Alice Johnson", profilePic: AsdImage, comment: "Looking forward to the next release.", timestamp: "3 days ago" },
];

export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <StatisticsCard
          title={<h1 style={{ fontSize: '1.5rem' }}>Vehicle Status</h1>}
          icon={<FlagIcon className="w-6 h-6 text-white" />}
          color="#FD6F52"
          footer={
            <div className="flex justify-between">
              <div className="flex flex-col space-y-2">
                <div className="text-sm"><span>Out of Service:</span> <span className="text-red-500">10</span></div>
                <div className="text-sm"><span>Active:</span> <span className="text-blue-500">50</span></div>
              </div>
              <div className="flex flex-col space-y-2 text-right">
                <div className="text-sm"><span>Available:</span> <span className="text-green-500">25</span></div>
              </div>
            </div>
          }
        />
        <StatisticsCard
          title={<h1 style={{ fontSize: '1.5rem' }}>Equipment Status</h1>}
          icon={<FlagIcon className="w-6 h-6 text-white" />}
          color="#FD6F52"
          footer={
            <div className="flex justify-between">
              <div className="flex flex-col space-y-2">
                <div className="text-sm"><span>In Service:</span> <span className="text-red-500">15</span></div>
                <div className="text-sm"><span>In-Service:</span> <span className="text-blue-500">20</span></div>
              </div>
              <div className="flex flex-col space-y-2 text-right">
                <div className="text-sm"><span>Active:</span> <span className="text-green-500">30</span></div>
              </div>
            </div>
          }
        />
        <StatisticsCard
          title={<h1 style={{ fontSize: '1.5rem' }}>Service Reminders</h1>}
          icon={<FlagIcon className="w-6 h-6 text-white" />}
          color="#FD6F52"
          footer={
            <div className="flex flex-col space-y-2">
              <div className="text-sm"><span>Vehicles Overdue:</span> <span className="text-red-500">5</span></div>
              <div className="text-sm"><span>Vehicle Due Soon:</span> <span className="text-blue-500">10</span></div>
            </div>
          }
        />
        <StatisticsCard
          title={<h1 style={{ fontSize: '1.5rem' }}>Open Issue</h1>}
          icon={<FlagIcon className="w-6 h-6 text-white" />}
          color="#FD6F52"
          footer={
            <div className="flex flex-col space-y-2">
              <div className="text-sm"><span>Open:</span> <span className="text-red-500">8</span></div>
              <div className="text-sm"><span>Overdue:</span> <span className="text-blue-500">3</span></div>
            </div>
          }
        />
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6">
      <Card className="border border-blue-gray-100 shadow-sm w-full">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Recent Comments
            </Typography>
            {/* <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>24%</strong> this month
            </Typography> */}
          </CardHeader>
          <CardBody className="pt-0">
            {recentCommentsData.map(({ id, name, profilePic, comment, timestamp }) => (
              <div key={id} className="flex items-start gap-4 py-3">
                <Avatar src={profilePic} alt={name} className="w-12 h-12" />
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium"
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-xs font-medium text-blue-gray-500"
                  >
                    {comment}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-xs text-blue-gray-400"
                  >
                    {timestamp}
                  </Typography>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
