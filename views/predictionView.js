import Chart from "chart.js/auto";
import View from "./view";

class Prediction extends View {
  radarChart = document.getElementById("radar__chart");
  newRadar;
  radarTheme = "rgba(10,9,9, 0.05)";

  constructor() {
    super();
    this._predictionChart();
  }

  _predictionChart() {
    const data = {
      labels: [
        "Strength",
        "Attacking",
        "Goals for",
        "Goals Against",
        "Losses",
        "Draws",
        "Wins",
        "Defensive",
      ],
      datasets: [
        {
          label: "Arsenal",
          data: [65, 59, 90, 81, 56, 55, 40, 88],
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
        {
          label: "Tottenham",
          data: [28, 48, 40, 19, 96, 27, 100, 10],
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBackgroundColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(54, 162, 235)",
        },
      ],
    };
    const config = {
      type: "radar",
      data: data,
      options: {
        maintainAspectRatio: false,
        scales: {
          r: {
            grid: {
              color: this.radarTheme,
            },
          },
        },
        // plugins:{
        //     title: {
        //         display:true,
        //         text: "Next Fixture"
        //     }
        // },
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      },
    };
    this.newRadar = new Chart(this.radarChart, config);
  }
}

export default new Prediction()
