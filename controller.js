import * as model from "./model.js";
import Chart from "chart.js/auto";

console.log("works")

// WILL MOVE TO SEPERATE MODULE
const data = {
  labels: ["Wins", "Loses", "Draws"],
  datasets: [
    {
      label: "My First Dataset",
      data: [22, 4,7],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
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