import React from "react";
import { useNavigate } from 'react-router-dom';
import applog from "../../../assets/images/applog.png";
import notif from "../../../assets/images/notif.jpg";
import profile from "../../../assets/images/profile.png";
import Dropdown from "../../../utils/components/other components/Dropdown";
import NotificationList from "../../../views/components/globalView/NotificationList";
import { Progress } from "flowbite-react";
// import PerformanceSummaryChart from '../../components/PerformanceSummaryChart';
// import { FaArrowUpRight } from 'react-icons/fa';

import { Line, Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import Landingchart from "../../../utils/components/other components/Landingchart";
import OnlineaccountCon from "../../../utils/components/other components/OnlineaccountCon";
import OnlineaccToOm from "../../../utils/components/other components/OnlineaccToOm";
import useLoaderData from "../../../hooks/useLoaderData";


ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Sample component structure
const UserLanding = () => {
  const loaderData = useLoaderData();
  console.log("loaderData",loaderData);
  const lineChartData = {
    labels: ["05/05", "13/05", "20/05", "28/05", "05/06"], // Dates
    datasets: [
      {
        label: "Wallet Balance",
        data: [1500, 3200, 4333.35, 5000, 3400], // Wallet balance values
        fill: true,
        backgroundColor: "rgba(255, 165, 0, 0.2)", // Light orange fill for the area
        borderColor: "rgba(255, 165, 0, 1)", // Orange line
        borderWidth: 2,
        pointBackgroundColor: "rgba(255, 165, 0, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 165, 0, 1)",
      },
    ],
  };

  const pieChartData = {
    labels: [],
    datasets: [
      {
        data: [24, 18, 32, 22], // Percentage of each asset
        backgroundColor: ["#ff6384", "#36a2eb", "#9966ff", "#ffce56"], // Colors for each slice
        hoverBackgroundColor: ["#ff6384", "#36a2eb", "#9966ff", "#ffce56"],
        style: [{ height: 48, width: 48 }],
      },
    ],
  };

  // array for 4colors in userlanding
  const cards = [
    {
      title: "Balance",
      amount: `CFA ${loaderData?.balance} `,
      percentage: "7.4%",
      changeText: "then last month",
      bgColor: "bg-amber-50",
      arrowColor: "text-amber-400",
    },
    {
      title: "Tontine Groups",
      amount:  `CFA ${loaderData?.tontineNumber} `,
      percentage: "3.4%",
      changeText: "then last month",
      bgColor: "bg-green-50",
      arrowColor: "text-green-400",
    },
    {
      title: "Contributions",
      amount:  `CFA ${loaderData?.contribution} `,
      percentage: "3.1%",
      changeText: "then last month",
      bgColor: "bg-blue-50",
      arrowColor: "text-blue-400",
    },
    {
      title: "Payouts",
      amount:  `CFA ${loaderData?.balance} `,
      percentage: "11.4%",
      changeText: "then last month",
      bgColor: "bg-teal-50",
      arrowColor: "text-teal-400",
    },
    {
      title: "Sanctions",
      amount: `CFA ${loaderData?.balance} `,
      percentage: "7.4%",
      changeText: "then last month",
      bgColor: "bg-amber-50",
      arrowColor: "text-amber-400",
    },
  ];
  // array for pie chart
  const assets = [
    {
      name: "Savings",
      percentage: 24,
      bgColor: "bg-pink-500", // Custom color for each bar
    },
    {
      name: "Payouts",
      percentage: 18,
      bgColor: "bg-blue-500",
    },
    {
      name: "Contributions",
      percentage: 32,
      bgColor: "bg-purple-500",
    },
    {
      name: "Balance",
      percentage: 22,
      bgColor: "bg-yellow-500",
    },
  ];

  // Chart bar data and configurations
  // const data = {
  //   labels: ['01', '02', '03', '04', '05', '06', '07'],
  //   datasets: [
  //     {
  //       label: 'Contributions',
  //       data: [400, 300, 500, 200, 350, 400, 450],
  //       backgroundColor: '#32D74B',
  //     },
  //     {
  //       label: 'Balance',
  //       data: [300, 200, 400, 150, 250, 300, 350],
  //       backgroundColor: '#5856D6',
  //     },
  //     {
  //       label: 'Sanctions',
  //       data: [200, 100, 200, 100, 150, 200, 250],
  //       backgroundColor: '#FF2D55',
  //     },
  //     {
  //       label: 'Payouts',
  //       data: [100, 50, 100, 50, 100, 150, 200],
  //       backgroundColor: '#FF9500',
  //     }
  //   ]
  // };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: '#333',
        },
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: '#333',
        },
        grid: {
          color: '#e2e8f0',
        }
      }
    }
  };

  const navigate = useNavigate(); // Initialize navigate
  // Handle click function specifically for Tontine Groups
  const handleTontineClick = () => {
    // alert('You clicked on Tontine Groups');
    navigate('/TontineGroups');
  };
  return (
    <div className="min-h-screen bg-gray-100 ">
      <nav className="w-[100%] h-[70px] flex justify-between flex-row items-center px-5  bg-white ">
      {/* logo */}
       <img
          src={applog}
          style={{ height: 48, width: 48 }}
          className="rounded-full"
          alt=""
        /> 
      {/* text */}
       <ul className="flex flex-row gap-[90px] text-[#6c6a6a] w-[1100px] ">
          <li>
            <a
              className="hover:underline  hover:decoration-green-500"
              href="/UserLanding"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:decoration-green-500"
              href="/TontineGroups"
            >
              List of tontine
            </a>
          </li>
          {/* <li>
            <a className="hover:underline hover:decoration-green-500" href="Payouts">
              Payouts
            </a>
          </li> */}
        </ul> 
        <OnlineaccountCon/>
        <OnlineaccToOm/>
      {/* notif button */}
       <div className="  flex flex-row items-center justify-between w-[100px] ">
          <button type="button">
            {" "}
            <a href="/NotificationList">
              <img
                title="Notifications"
                src={notif}
                style={{ height: 30, width: 30 }}
                className="rounded-full"
                alt=""
              />
            </a>
          </button>
        </div> 
      </nav>
      {/* Header */}
      <div className="flex flex-row justify-between items-center  px-4 py-3 ">
        <h1 className="text-2xl font-semibold">Current Information</h1>

        <div className="min-w-max">
          <input
            type="text"
            placeholder="Search by Name "
            className=" py-2 px-4 bg-gray-100 border rounded-full focus:outline-none focus:ring focus:ring-gray-200"
          />
        </div> </div>

      <div className="h-[20%] bg-gray-100 p-6 flex flex-row gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            // Attach the onClick only if the card is "Tontine Groups"
            onClick={card.title === "Tontine Groups" ? handleTontineClick : null} // Add navigation only to Tontine Groups card
            className={`sm:w-1/2 lg:w-1/4 p-4 rounded-lg shadow-md flex flex-col justify-between ${card.bgColor}`}

          >
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">{card.title}</h2>
              <div
              // className={`flex items-center justify-center w-6 h-8 rounded-full bg-white ${card.arrowColor}`}
              ></div>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-bold">{card.amount}</h3>
              <p className="text-sm text-gray-500 mt-2">
                <span className={`font-semibold ${card.arrowColor}`}>
                  {card.percentage}
                </span>{" "}
                {card.changeText}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-row justify-between w-[100%]">
        <Landingchart/>
        {/* Wallet Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
          <h2 className="text-xl font-bold">Transactions</h2>
          <h3 className="text-orange-500 text-3xl font-bold my-4">
            CFA 12,433.35
          </h3>
          <p className="text-gray-500 mb-4">12 Assets</p>
          {/* Pie Chart
      <div className="relative h-40 w-40 mx-auto">
           
          </div> */}
          {/* Circular chart placeholder */}
          <div className="relative h-40 w-40 mx-auto">
            <Pie data={pieChartData} />
          </div>
          <div className="w-full p-4">
            {assets.map((asset, index) => (
              <div key={index} className="mb-4">
                {/* Asset name */}
                <div className="flex justify-between mb-1">
                  <span>{asset.name}</span>
                  <span>{asset.percentage}%</span>
                </div>

                {/* Percentage bar */}
                <div className="w-full bg-gray-200 h-3 rounded-md">
                  <div
                    className={`${asset.bgColor} h-3 rounded-md`}
                    style={{ width: `${asset.percentage}%` }} // Dynamic width based on percentage
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserLanding;


