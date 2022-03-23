import View from "./view.js";
import Chart from "chart.js/auto";

class PieView extends View {
  _chartElement = document.getElementById("myChart");
  myChart;

  constructor() {
    super();
    this._displayPieChart();
  }

  _displayPieChart(pieTheme = this.defaultChartTheme) {
    const data = {
      labels: ["Wins", "Draws", "Loses"],
      datasets: [
        {
          label: "My First Dataset",
          data: [22, 4, 7],
          backgroundColor: pieTheme,
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
          },
        },
      },
    };
    this.myChart = new Chart(this._chartElement, config);
  }
}

export default new PieView();
