import Chart from "chart.js/auto";

/**
 * View class contains all method and properties that are inherited by the other views.
 */
export default class View {
  _data;

  constructor() {}
  //
  render(data) {
    this._data = data;
    this.clear();
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderChart(data) {
    this._defaultChartData = data;
    this.myChart.destroy();
    this._displayChart();
  }

  clear() {
    this._parentElement.innerHTML = "";
  }
}

