import View from "./view";

 
/**
 * Contains all methods and properties relevent to the minuteView UI.
 */
class Minute extends View {
  _minuteScoreElement = document.querySelector(".minute__stat--score");
  _minuteConcedeElement = document.querySelector(".minute__stat--concede");
  _scoredData;
  _concedeData;

  renderScoreMinuteData(data) {
    this._scoredData = data;
    const markupScore = this._minuteScoreMarkup();
    this._minuteScoreElement.innerHTML = "";
    this._minuteScoreElement.insertAdjacentHTML("afterbegin", markupScore);
  }

  renderConcedeMinuteData(data){
    this._concedeData = data
    const markupConcede = this._minuteConcedeMarkup();
    this._minuteConcedeElement.innerHTML = "";
    this._minuteConcedeElement.insertAdjacentHTML("afterbegin", markupConcede);
  }

  _sortScoreData(min){
    const timesAndDetails = Object.entries(min)
    const sorted = timesAndDetails.sort((a, b) => b[1].total - a[1].total);
    const commonMinsData = sorted[0];
    const minsRange = commonMinsData[0];
    const percent = commonMinsData[1].percentage;
    return [minsRange,percent]
  }

  _minuteScoreMarkup() {
    return `
        <p class="minute">${this._sortScoreData(this._scoredData)[0]}</p>
        <p class="percentage">${this._sortScoreData(this._scoredData)[1]}</p>`;
  }

  _minuteConcedeMarkup() {
    return `
        <p class="minute">${this._sortScoreData(this._concedeData)[0]}</p>
        <p class="percentage">${this._sortScoreData(this._concedeData)[1]}</p>`;
  }
};

export default new Minute()