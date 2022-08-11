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

const labels = ["2020", "2021", "2022"];

export const data = {
  labels,
  datasets: [
    {
      label: "CO2 Offset",

      //   barPercentage: 0.5,

      data: [70, 46, 80],
      backgroundColor: "#FF9A23",
    },
    {
      label: "Net Cabon Footprint",

      data: [45, 72, 64],
      backgroundColor: "#3E7307",
    },
  ],
};

export function BarCharted() {
  return (
    <div className="bg-white shadow rounded sm:p-4">
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarCharted;
