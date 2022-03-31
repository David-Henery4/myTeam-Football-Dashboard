import View from "./view";

class Comparison extends View {
  _parentElement = document.querySelector(".prediction__section--content");
  constructor() {
    super();
  }

  _generateMarkup(){
    return `
        <table>
            <tbody>
                <tr>
                    <th></th>
                    <th>Comparison</th>
                    <th></th>
                </tr>
                <tr>
                    <th>${this._data.homeName}</th>
                    <th>vs</th>
                    <th>${this._data.awayName}</th>
                </tr>

                <tr>
                    <td>${this._data.homeWins}</td>
                    <td>Wins</td>
                    <td>${this._data.awayWins}</td>
                </tr>
                <tr>
                    <td>${this._data.homeDraws}</td>
                    <td>Draws</td>
                    <td>${this._data.awayDraws}</td>
                </tr>
                <tr>
                    <td>${this._data.homeLoses}</td>
                    <td>loses</td>
                    <td>${this._data.awayLoses}</td>
                </tr>
                <tr>
                    <td>${this._data.overUnderGoalsData.home}</td>
                    <td>Goals over/under</td>
                    <td>${this._data.overUnderGoalsData.away}</td>
                </tr>
                <tr>
                    <td></td>
                    <th>Chance of win</th>
                    <td></td>
                </tr>
                <tr>
                    <td>Home: ${this._data.outcomePercentage.home}</td>
                    <td>Draw: ${this._data.outcomePercentage.draw}</td>
                    <td>Away: ${this._data.outcomePercentage.away}</td>
                </tr>
            </tbody>
        </table>
        <div class="prediction__section--winner">
            <p class="result">Winner</p>
            <p class="team">${this._data.outcomePrediction.name}</p>
            <p class="outcomes">${this._data.outcomePrediction.comment}</p>
        </div>`;
  }
};

export default new Comparison()