import View from "./view.js";



class LeagueTable extends View {
  _parentElement = document.querySelector(".league__table--body");
  _leagueNameElement = document.querySelector(".league__table--name");


  renderLeagueName(data){
    const name = data[0].leagueName
    this._leagueNameElement.innerHTML = ""
    this._leagueNameElement.insertAdjacentHTML(
      "afterbegin",
      `<h4>${name}</h4>`
    );
  }

  _generateMarkup() {
    return this._data.map((e,i,a) => {
        return `
        <tr>
          <td>${e.rank}</td>
          <td>${e.teamName}</td>
          <td>${e.tableData.played}</td>
          <td>${e.tableData.win}</td>
          <td>${e.tableData.draw}</td>
          <td>${e.tableData.lose}</td>
          <td>${e.tableData.goals.for}</td>
          <td>${e.tableData.goals.against}</td>
          <td>${e.goalDiff}</td>
          <td>${e.points}</td>
        </tr>`;
    }).join("")
  }
}

export default new LeagueTable();