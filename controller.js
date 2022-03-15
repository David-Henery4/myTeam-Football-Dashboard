import * as model from "./model.js";
import Chart from "chart.js/auto";

console.log("works");

// WILL MOVE TO SEPERATE MODULE (ALL CHARTS)
const data = {
  labels: ["Wins", "Draws", "Loses"],
  datasets: [
    {
      label: "My First Dataset",
      data: [22, 4, 7],
      backgroundColor: [
        "rgb(34, 169, 227)",
        "rgba(34, 169, 227, 0.25)",
        "rgb(200, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
};
const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, config);

// line chart
const dataLineChart = {
  labels: [
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
  ],
  // labels: ["hello", "gre"],
  datasets: [
    {
      label: "League Position over the season",
      data: [20, 5, 10, 15, 10, 1, 2, 6, 3],
      fill: false,
      borderColor: "#22A9E3",
      tension: 0.1,
    },
  ],
};

const configLineChart = {
  type: "line",
  data: dataLineChart,
  options: {
    scales: {
      y: {
        reverse: true,
        max: 20,
        min: 1,
      },
    },
  },
};

const lineElement = document.getElementById("line-chart");
const myLineChart = new Chart(lineElement, configLineChart);
