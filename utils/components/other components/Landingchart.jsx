// src/components/YieldChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Landingchart = () => {
  // Data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Contributions',
        backgroundColor: 'rgb(34, 197, 94)', // Green for Yield Energy
        borderColor: 'rgb(34, 197, 94)',
        data: [3.5, 2.8, 3.2, 4.0, 3.1, 3.6, 4.2, 3.8, 3.9, 4.1, 3.4, 3.7],
      },
      {
        label: 'Payouts',
        backgroundColor: 'rgb(59, 130, 246)', // Blue for Exported Energy
        borderColor: 'rgb(59, 130, 246)',
        data: [1.2, 0.9, 1.5, 1.0, 1.6, 1.7, 1.9, 2.0, 1.5, 1.6, 1.4, 1.3],
      },
      {
        label: 'Sanctions',
        backgroundColor: 'rgb(234, 179, 8)', // Yellow for Selfuse Energy
        borderColor: 'rgb(234, 179, 8)',
        data: [1.5, 1.9, 1.4, 1.6, 1.8, 1.2, 2.0, 1.7, 1.3, 1.5, 1.9, 1.6],
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Contributions, payouts and sanctions(Monthly)',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Price (CFA)',
        },
        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-[1000px]">
      <h2 className="text-2xl font-semibold mb-4">Current actions</h2>
      <Bar data={data} options={options} />
      {/* <div className="mt-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-semibold">18.4 kWh</p>
            <p className="text-gray-500">Yield Energy</p>
          </div>
          <div>
            <p className="text-lg font-semibold">7.9 kWh</p>
            <p className="text-gray-500">Exported Energy</p>
          </div>
          <div>
            <p className="text-lg font-semibold">7.3 kWh</p>
            <p className="text-gray-500">Selfuse Energy</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-600">
            <strong>Battery Status:</strong> Load: 24%, Charge: 100%, Power: 14.8 V
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Landingchart;
