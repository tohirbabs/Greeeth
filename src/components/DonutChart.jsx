import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "January 30%",
    "February 5%",
    "March 2%",
    "April 10%",
    "May 9%",
    "June 7%",
  ],
  datasets: [
    {
      label: "Total Earned",
      data: [30, 5, 2, 10, 9, 7],
      backgroundColor: [
        "#C85D3C",
        "#595959",
        "#00DE9B",
        "#3E7307",
        "#FFBD69",
        "#0034EB",
      ],
    },
  ],
};

export function DonutChart() {
  return (
    <div className="bg-white shadow rounded sm:p-4">
      <Doughnut data={data} />
    </div>
  );
}
