// Module Replacement
if (module.hot) {
  module.hot.accept();
}
//              CONTROLLER
import * as model from "./model.js";
import * as dark from "./darkMode.js";
import * as navi from "./views/navView.js";
//
import Team from "./views/teamView.js";
import PieView from "./views/pieView.js";
import Players from "./views/playersView.js";
import Minute from "./views/minuteView.js"; // rename
import LeagueTable from "./views/leagueView.js";
import TeamName from "./views/teamNameView.js";
import Prediction from "./views/predictionView.js";
import Header from "./views/headerView.js";
import History from "./views/historyView.js";
// import predictionView from "./views/predictionView.js";
import Comparison from "./views/comparison.js";
import Fixtures from "./views/fixturesView.js";
import ErrorMessages from "./errorMsg.js";
//

const search = async function () {
  try{
    const query = Header.searchQuery();
    console.log(`Heres the search query: ${query}`);
    console.log("works");
    model.state.searchQuery = query;
    console.log(model.state);
  // const title = await model.fetchWiki(query)
  // const historyData = await model.fetchWikiIntro(title)
  const mainData = await model.fetchBasicTeamInfo(query);
  //
  console.log(mainData);
  dataDistribution(mainData,query)
  //
} catch(err){
  console.log(`Data Error: ${err.message}`);
  console.error(`MainData error happening: ${err}`);
  ErrorMessages.showErrorMsg();
}
};


const dataDistribution = function(mainData,query){
  pieChartSection(mainData.pieStats);
  predictionSection(mainData.nextPredictionData);
  fixturesSection(mainData.teamFixtures);
  teamStatsSection(mainData.teamStats);
  minuteStatsSection(mainData.minuteGoalsData);
  playersStatsSection(mainData.playerStats);
  teamNameSection(mainData.queryTeamInfo.teamName);
  leagueTableSection(mainData.leagueStanding)
  historySection(query, mainData.queryTeamInfo.stadiumImg);
};

const teamNameSection = function(name){
  TeamName.render(name)
};

const historySection = async function (query, venueImg) {
  try{
    const title = await model.fetchWiki(query);
    const historyData = await model.fetchWikiIntro(title);
    console.log(historyData);
    History.render(historyData);
    History._renderStadiumImage(venueImg);
    // console.log(data)
  } catch(err){
    console.log(`Wiki Error: ${err.message}`)
    console.error(`History error happening: ${err.message}`);
    ErrorMessages.showErrorMsg()
  }
};

const pieChartSection = function (pieStats) {
  // console.log(model.state);
  PieView.renderChart(pieStats);
};

const predictionSection = function (predictionData) {
  Prediction._renderTeamPredictionNames(predictionData.comparisonData);
  Prediction.renderChart(predictionData.predictionRadarData);
  Comparison.render(predictionData.comparisonData);
};

const fixturesSection = function (fixtures) {
  Fixtures.render(fixtures);
};

const teamStatsSection = function (teamStats) {
  Team.render(teamStats)
};

const minuteStatsSection = function (minuteData) {
  Minute.renderScoreMinuteData(minuteData.minsToScore);
  Minute.renderConcedeMinuteData(minuteData.minsToConcede);
};

const playersStatsSection = function (playerStats) {
Players.render(playerStats)
};

const leagueTableSection = function (tableData) {
  // LeagueTable.updateTable(tableData)
  LeagueTable.renderLeagueName(tableData)
  LeagueTable.render(tableData)
};


const init = function () {
  Header.headerHandler(search);
  Header.searchIconHandler(search);
  // History.historyHandler(historySection);
};

init();

//************************//

// const fixture = {
// id: 310556,
// referee: "Michael Oliver, England",
// timezone: "UTC",
// date: "2019-09-13T19:00:00+00:00",
// timestamp: 1628881200,
// periods: {
//   first: 1628881200,
//   second: 1628884800
//   },
// }
// const fixture1 = {
// id: 410556,
// referee: "Michael Oliver, England",
// timezone: "UTC",
// date: "2017-10-13T19:00:00+00:00",
// timestamp: 1628881200,
// periods: {
//   first: 1628881200,
//   second: 1628884800
//   },
// }
// const fixture2 = {
// id: 217556,
// referee: "Michael Oliver, England",
// timezone: "UTC",
// date: "2022-08-13T19:00:00+00:00",
// timestamp: 1628881200,
// periods: {
//   first: 1628881200,
//   second: 1628884800
//   },
// }
// const fixture3 = {
// id: 150556,
// referee: "Michael Oliver, England",
// timezone: "UTC",
// date: "2015-05-13T19:00:00+00:00",
// timestamp: 1628881200,
// periods: {
//   first: 1628881200,
//   second: 1628884800
//   },
// }

// const testObj = [fixture,fixture1,fixture2,fixture3]


// function sortObjByDate(obj){
//   obj.sort((a,b) => new Date(a.date).getTime() -
//     new Date(b.date).getTime()
//   );
//   console.log(obj)
// };

// sortObjByDate(testObj)

////////////////

