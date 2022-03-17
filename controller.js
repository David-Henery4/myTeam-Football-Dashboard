import * as model from "./model.js";
//
import TeamView from "./views/teamView.js";
import PieView from "./views/pieView.js";
import PlayersView from "./views/playersView.js";
import FormView from "./views/formView.js";
import LeagueView from "./views/leagueView.js";
//
import Chart from "chart.js/auto";
const soccer = require("soccer.js").soccer;

console.log("works");
// console.log(TeamView);

// WILL MOVE TO SEPERATE MODULE (ALL CHARTS)
// const data = {
//   labels: ["Wins", "Draws", "Loses"],
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [22, 4, 7],
//       backgroundColor: [
//         "rgb(34, 169, 227)",
//         "rgba(34, 169, 227, 0.25)",
//         "rgb(200, 205, 86)",
//       ],
//       hoverOffset: 4,
//     },
//   ],
// };

// const config = {
//   type: "doughnut",
//   data: data,
// };
// const ctx = document.getElementById("myChart");
// const myChart = new Chart(ctx, config);

// line chart
const dataLineChart = {
  labels: [
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
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

// WILL ALSO MOVE TO OTHER MODULE!
const on = soccer.addTeam(["Arsenal", "Aston Villa","Burnley","Brentford","Brighton", "Cystal Palace", "Chelsea", "Everton","Leicester","Leeds", "Liverpool", "Man United", "Man City", "Norwich", "Newcastle","Southampton", "Tottenham","Watford", "Wolves", "West Ham",])



 soccer.renderLeague({
   leagueName: "Premier League", // name of your league
  //  dropdown: 3, // collapse table from 3rd place and render toggle to table
   zones: [18, 20] // set a promotion and relegation zone
 });


