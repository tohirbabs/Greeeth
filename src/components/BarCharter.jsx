import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr"];

export const data = {
  labels,
  datasets: [
    {
      label: "Amount Purchased",

      //   barPercentage: 0.5,

      data: [70, 99, 55, 46],
      backgroundColor: "#008000",
    },
  ],
};

export function BarCharter() {
  return (
    <div className="bg-white shadow rounded sm:p-4">
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarCharter;
