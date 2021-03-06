import Chart from "chart.js/auto";
import View from "./view";


/**
 * Contains all methods and properties relevent to the predictionView UI.
 */
class Prediction extends View {
  radarChart = document.getElementById("radar__chart");
  myChart
  radarTheme = "rgba(10,9,9, 0.05)";
  radarFontColor = "#0E0D0D";
  _homeTeamName = "Team 1"
  _awayTeamName = "Team 2"

  constructor() {
    super();
    this._displayChart();
  }

  _renderTeamPredictionNames(names){
  this._homeTeamName = names.homeName
  this._awayTeamName = names.awayName
  }

  _defaultChartData = {
    attack: {
      home: "60%",
      away: "40%",
    },
    defence: {
      home: "75%",
      away: "45%",
    },
    possessionDist: {
      home: "80%",
      away: "76%",
    },
    h2h: {
      home: "90%",
      away: "55%",
    },
    form: {
      home: "40%",
      away: "60%",
    },
    goals: {
      home: "85%",
      away: "60%",
    },
  };

  _formatChartData(chartData){
    const homeData = []
    const awayData = []
    Object.values(chartData).forEach(od => {
      homeData.push(+od.home.slice(0,-1))
      awayData.push(+od.away.slice(0,-1))
    })
    return [homeData,awayData]
  }

  _displayChart() {
    const data = {
      labels: [
        "Attack",
        "Defense",
        "Possession",
        "H2H",
        "Form",
        "Goals",
      ],
      datasets: [
        {
          label: this._homeTeamName,
          data: this._formatChartData(this._defaultChartData)[0],
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
        {
          label: this._awayTeamName,
          data: this._formatChartData(this._defaultChartData)[1],
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
            pointLabels: {
              color: this.radarFontColor,
            },
            min: 0,
            max: 100,
          },
        },
        plugins: {
          legend: {
            labels: {
              color: this.radarFontColor,
            },
          },
        },
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      },
    };
    this.myChart = new Chart(this.radarChart, config);
  }
}

export default new Prediction()
