import View from "./view.js";
const soccer = require("soccer.js").soccer;


class LeagueTable extends View {
  _parentElement = document.querySelector(".league__table--body");

  _generateMarkp(){
      return 
  }

  // constructor(){
  //     super()
  //     // this._displayLeagueTable()
  // };

  // _displayLeagueTable(tableData){
  //     const on = soccer.addTeam([
  //         "Arsenal",
  //         "Aston Villa",
  //         "Burnley",
  //         "Brentford",
  //         "Brighton",
  //         "Cystal Palace",
  //         "Chelsea",
  //         "Everton",
  //         "Leicester",
  //         "Leeds",
  //         "Liverpool",
  //         "Man United",
  //         "Man City",
  //         "Norwich",
  //         "Newcastle",
  //         "Southampton",
  //         "Tottenham",
  //         "Watford",
  //         "Wolves",
  //         "West Ham",
  //         ]);

  //     soccer.renderLeague({
  //       leagueName: "Premier League", // name of league
  //       //  dropdown: 3, // collapse table from 3rd place and render toggle to table
  //       zones: [18, 20], // set a promotion and relegation zone
  //     });
  // }

  // updateTable(leagueTableData){
  //     leagueTableData.forEach((e,i,a) => {
  //         soccer.updateTeam([{
  //             name: e.teamName,
  //             played: e.tableData.played,
  //             won: e.tableData.win,
  //             drawn: e.tableData.draw,
  //             lost: e.tableData.lose,
  //             scored: e.tableData.goals.for,
  //             conceded: e.tableData.goals.against,
  //             points: e.points,
  //             position: e.rank,
  //         }])
  //     })
  //     soccer.renderLeague({
  //       leagueName: "Premier League", // name of league
  //       //  dropdown: 3, // collapse table from 3rd place and render toggle to table
  //       zones: [18, 20], // set a promotion and relegation zone
  //     });
  // }
}

export default new LeagueTable();