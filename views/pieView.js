import View from "./view.js";
import Chart from "chart.js/auto";

class PieView extends View {
  _chartElement = document.getElementById("myChart");
  myChart;
  pieChartTheme = [
    "rgb(34, 169, 227)",
    "rgba(34, 169, 227, 0.25)",
    "rgb(200, 205, 86)",
  ];
  pieChartFontColor = "#0E0D0D";
  constructor() {
    super();
    this._displayPieChart();
  }

  _displayPieChart() {
    const data = {
      labels: ["Wins", "Draws", "Loses"],
      datasets: [
        {
          label: "My First Dataset",
          data: [22, 4, 7],
          backgroundColor: this.pieChartTheme,
          hoverOffset: 4,
        },
      ],
    };

    const config = {
      type: "doughnut",
      data: data,
      options: {
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Wins/Draws/Loses",
            font: {
              size: "20px",
            },
            color: this.pieChartFontColor,
          },
          legend: {
            labels: {
              color: this.pieChartFontColor,
            },
          },
        },
      },
    };
    this.myChart = new Chart(this._chartElement, config);
  }
}

export default new PieView();
