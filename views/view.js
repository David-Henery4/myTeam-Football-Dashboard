import Chart from "chart.js/auto";

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
    this._displayChart(); // will change to generic function for both charts!
  }

  clear() {
    this._parentElement.innerHTML = "";
  }
}

// export default new View()
