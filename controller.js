import "core-js/stable";
import "regenerator-runtime/runtime";

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

/**
 * Takes the users search query and uses the query to fetch back the data we need for the application.
 * It then sends the data to the 'dataDistribution' function to be distributed to the different UI sections. 
 */
const search = async function () {
  try {
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
    dataDistribution(mainData, query);
    //
  } catch (err) {
    console.log(`Data Error: ${err.message}`);
    console.error(`MainData error happening: ${err}`);
    ErrorMessages.showErrorMsg();
  }
};

/**
 * Takes the whole state object data and splits it up into the their relevent functions in order for the data to be rendered to their correct UIs. 
 * @param {object} mainData Takes in whole state object data.
 * @param {string} query Users search query string. 
 */
const dataDistribution = function (mainData, query) {
  pieChartSection(mainData.pieStats);
  predictionSection(mainData.nextPredictionData);
  fixturesSection(mainData.teamFixtures);
  teamStatsSection(mainData.teamStats);
  minuteStatsSection(mainData.minuteGoalsData);
  playersStatsSection(mainData.playerStats);
  teamNameSection(mainData.queryTeamInfo.teamName);
  leagueTableSection(mainData.leagueStanding);
  historySection(query, mainData.queryTeamInfo.stadiumImg);
};

/**
 * Takes teams name and sends it to the teamNameView to be rendered.
 * @param {string} name Teams name
 */
const teamNameSection = function (name) {
  TeamName.render(name);
};

/**
 * Takes query and url and sends it to the fetch function and retieves the data back to be rendered in the historyView.
 * @param {string} query Users search query.
 * @param {URL} venueImg Teams stadium image URL.
 */
const historySection = async function (query, venueImg) {
  try {
    const title = await model.fetchWiki(query);
    const historyData = await model.fetchWikiIntro(title);
    console.log(historyData);
    History.render(historyData);
    History._renderStadiumImage(venueImg);
    // console.log(data)
  } catch (err) {
    console.log(`Wiki Error: ${err.message}`);
    console.error(`History error happening: ${err.message}`);
    ErrorMessages.showErrorMsg();
  }
};

/**
 * Takes teams record data for the pie chart and sends it to the pieView to be rendered.
 * @param {object} pieStats Object containing data for the pieChart
 */
const pieChartSection = function (pieStats) {
  // console.log(model.state);
  PieView.renderChart(pieStats);
};

/**
 * Takes prediction data and sends it to the predictionView & the comparisonView to be rendered.
 * @param {object} predictionData Object containing teams prediction data
 */
const predictionSection = function (predictionData) {
  Prediction._renderTeamPredictionNames(predictionData.comparisonData);
  Prediction.renderChart(predictionData.predictionRadarData);
  Comparison.render(predictionData.comparisonData);
};

/**
 * Takes fixtures data and sends it to the fixturesView to be rendered.
 * @param {Array} fixtures Takes in array of objects contain data about the teams fixtures.
 */
const fixturesSection = function (fixtures) {
  Fixtures.render(fixtures);
};

/**
 * Takes teams stats and sends it to the teamView to be rendered.
 * @param {object} teamStats Contains all team stats needed for the team stats UI section.
 */
const teamStatsSection = function (teamStats) {
  Team.render(teamStats);
};

/**
 * Takes teams minute goals data and sends it to the minuteView to be rendered
 * @param {object} minuteData Takes in object containing teams goal minute stats
 */
const minuteStatsSection = function (minuteData) {
  Minute.renderScoreMinuteData(minuteData.minsToScore);
  Minute.renderConcedeMinuteData(minuteData.minsToConcede);
};

/**
 * Takes Player stats and sends it to the playersView to be rendered.
 * @param {Array} playerStats array of objects containing player stats.
 */
const playersStatsSection = function (playerStats) {
  Players.render(playerStats);
};

/**
 * Takes table data and send it to the leagueView to be rendered
 * @param {Array} tableData Array of objects containing table data
 */
const leagueTableSection = function (tableData) {
  // LeagueTable.updateTable(tableData)
  LeagueTable.renderLeagueName(tableData);
  LeagueTable.render(tableData);
};

/**
 * initalizes the 'search' function once the user searches for a team.
 * The Header handlers listen for the search events on the submit & click events.
 */
const init = function () {
  Header.headerHandler(search);
  Header.searchIconHandler(search);
  // History.historyHandler(historySection);
};

init();

//************************//
