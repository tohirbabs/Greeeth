import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["583t", "59t"],
  datasets: [
    {
      label: "Total Emission/offsets",
      data: [583, 59],
      backgroundColor: ["#EC3939", "#059A03"],
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}
