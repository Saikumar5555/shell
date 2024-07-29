import { ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: CheckCircleIcon,
    title: "Vehicles",
    value: "",
    footer: {
      color: "orange",
      value: "4",
      label: "Out of service",
   
    },
    footer1: {
      color: "orange",
      value: "5",
      label: "Out of service",
   
    },
  },
  {
    color: "gray",
    icon: CheckCircleIcon,
    title: "Drivers",
    value: "",
    footer: {
      color: "",
      value: "",
      label: "",
    },
  },
  {
    color: "gray",
    icon: ExclamationCircleIcon,
    title: "Service Reminders",
    value: "",
    footer: {
      color: "",
      value: "",
      label: "",
      details: [
        {
          subheading: "Vehicles Overdue",
          value: "7",
          color: "text-red-500",
        },
        {
          subheading: "Vehicles Due Soon",
          value: "1",
          color: "text-yellow-500",
        },
      ],
    },
  },
  {
    color: "gray",
    icon: ExclamationCircleIcon,
    title: "Total emissions",
    value: "",
    footer: {
      color: "",
      value: "",
      label: "",
      details: [
        {
          subheading: "Open",
          value: "5",
          color: "text-red-500",
        },
        {
          subheading: "Overdue",
          value: "0",
          color: "text-gray-500",
        },
      ],
    },
  },
];

export default statisticsCardsData;
