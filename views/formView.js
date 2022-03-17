import View from "./view.js";
import Chart from "chart.js/auto";

class FormView extends View {
  _lineChartElement = document.getElementById("line-chart");

  constructor() {
    super();
    this._displayFormChart()
  }

  _displayFormChart(formData) {
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
    const myLineChart = new Chart(this._lineChartElement, configLineChart);
  }

}

export default new FormView();