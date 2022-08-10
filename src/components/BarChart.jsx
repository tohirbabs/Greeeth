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

const labels = ["2018", "2019", "2020", "2021", "2022"];

export const data = {
  labels,
  datasets: [
    {
      label: "CO2 Footprint (Tons of CO2)",

      //   barPercentage: 0.5,

      data: [70, 99, 55, 46, 80],
      backgroundColor: "#008000",
    },
    {
      label: "CO2 Offset (Tons of CO2)",

      data: [45, 69, 50, 76, 72, 64],
      backgroundColor: "rgba(0, 128, 0, 0.5)",
    },
  ],
};

export function BarChart() {
  return (
    <div className="bg-white shadow rounded sm:p-4">
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;
