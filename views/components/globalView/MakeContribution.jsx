import React, { useState } from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaDollarSign,
  FaMoneyBillWave,
} from "react-icons/fa";
import { MdOutlineCardTravel } from "react-icons/md";
import portrait from "../../../assets/images/portrait.jpg";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import profile from "../../../assets/images/profile.png";
import Dropdown from "../../../utils/components/other components/Dropdown";
import applog from "../../../assets/images/applog.png";
import notif from "../../../assets/images/notif.jpg";
import wallet from "../../../assets/images/wall.jpg";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// list of payouts
const transactions = [
  {
    id: 1,
    type: "send",
    recipient: "Madame Ndonlap",
    amount: "-2100.00 CFA",
    status: "Sent",
    icon: FaArrowUp,
    date: "Today, Aug 28",
  },
  {
    id: 2,
    type: "send",
    recipient: "Femme bebe",
    amount: "-2100.00 CFA",
    status: "Sent",
    icon: FaArrowUp,
    date: "Today, Aug 28",
    note: "20USD",
  },
  {
    id: 3,
    type: "send",
    recipient: "Femme fabien",
    amount: "-2100.00 CFA",
    status: "Sent",
    icon: FaArrowUp,
    date: "Aug 27, 2023",
  },
  {
    id: 4,
    type: "send",
    recipient: "Femme robert",
    amount: "-2100.00 CFA",
    status: "Sent",
    icon: FaArrowUp,
    date: "Aug 27, 2023",
  },

  {
    id: 5,
    type: "convert",
    from: "USD",
    to: "CFA",
    status: "Completed",
    icon: FaDollarSign,
    date: "Aug 27, 2023",
  },
];

const MakeContribution = () => {
  const data = {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Revenue Flow",
        data: [1200, 950, 1050, 1300, 2240, 850],
        backgroundColor: function (context) {
          const index = context.dataIndex;
          return index === 4 ? "#A88FEF" : "#6A6B9D"; // Highlight July
        },
        borderRadius: 10,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 2500,
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "#404040",
        },
      },
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw.toLocaleString()}`;
          },
        },
        backgroundColor: "#1e1e2e",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
  };
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex flex-row justify-between items-center">
        <div className="p-6 bg-gray-100 h-full w-full">
          <div className="flex flex-row justify-between items-center mb-6 ">
            <h1 className="text-2xl font-semibold">Contributions</h1>
            <div className="min-w-max">
              <input
                type="text"
                placeholder="Search by Name "
                className=" py-2 px-4 bg-gray-100 border rounded-full focus:outline-none focus:ring focus:ring-gray-200"
              />
            </div>{" "}
          </div>
          {/* Total Balances */}
          <div className="">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#f1d6e6] p-4 shadow rounded-lg flex justify-between items-center">
                <div>
                  <p className=" text-sm text-gray-500">Total balances</p>
                  <h2 className="text-2xl font-bold">CFA 30.000</h2>
                </div>
                <MdOutlineCardTravel className="text-green-500 text-3xl" />
              </div>
              <div className="bg-[#cae7f2] p-4 shadow rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Amount contributed</p>
                  <h2 className="text-2xl font-bold">CFA 00</h2>
                </div>
                <MdOutlineCardTravel className="text-green-500 text-3xl" />
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">
                Recent Transactions
              </h3>
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="p-4 bg-white shadow rounded-lg mb-2 flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <transaction.icon
                      className={`text-2xl ${
                        transaction.type === "send"
                          ? "text-red-500"
                          : "text-green-500"
                      } mr-3`}
                    />
                    <div>
                      {transaction.type === "convert" ? (
                        <p>{`Convert money from ${transaction.from} to ${transaction.to}`}</p>
                      ) : (
                        <p>
                          {transaction.type === "send"
                            ? "Sending money to"
                            : "Received money from"}{" "}
                          <span className="font-semibold">
                            {transaction.recipient}
                          </span>
                        </p>
                      )}
                      <p className="text-xs text-gray-400">
                        {transaction.status}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{transaction.amount}</p>
                    <p className="text-xs text-gray-400">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* You can use chart.js or other graph libraries to plot the exchange rate graph here */}
          </div>
        </div>
        {/* Exchange Rate */}
        <div className="flex flex-col  w-[75%] h-[700px]">
          <div className="mt-10  w-[96%] h-[250px] p-4 bg-white shadow rounded-lg">
            <h3 className="text-3xl font-semibold text-blue-300 p-5">
              Exchange Rate
            </h3>
            <p className="text-sm text-gray-500 m-4">
              1 USD = 593.50 CFA, As of today
            </p>
            <div className="flex justify-between items-center p-4">
              <p className="text-lg font-bold">1.00 USD</p>
              <p className="text-lg font-bold">593.50 CFA</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-[96%]  bg-gray-700 rounded-lg mr-[30px] mt-5 ">
            <div className="h-[350px] w-[90%] max-w-md">
              <h2 className="text-xl text-center text-white mb-10">
               <p className="mt-4">Revenue Flow</p> 
              </h2>
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
      {/* <div style={imageStyle} className={` flex flex-row w-[80%] h-[80%]`}></div> */}
    </div>
  );
};

export default MakeContribution;
