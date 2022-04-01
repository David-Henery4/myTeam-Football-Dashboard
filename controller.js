// Module Replacement
if (module.hot) {
  module.hot.accept();
}
//              CONTROLLER
import * as model from "./model.js";
import * as dark from "./darkMode.js";
import * as navi from "./views/navView.js";
//
import TeamView from "./views/teamView.js";
import PieView from "./views/pieView.js";
import PlayersView from "./views/playersView.js";
// import FormView from "./views/formView.js"; // rename
import LeagueView from "./views/leagueView.js";
import teamNameView from "./views/teamNameView.js";
import Prediction from "./views/predictionView.js";
import Header from "./views/headerView.js";
import History from "./views/historyView.js";
// import predictionView from "./views/predictionView.js";
import Comparison from "./views/comparison.js";
import Fixtures from "./views/fixturesView.js";
//

const search = async function () {
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
  //
  pieChartSection(mainData.pieStats);
  predictionSection(mainData.nextPredictionData);
  fixturesSection(mainData.teamFixtures);
  historySection(query, model.state.queryTeamInfo.stadiumImg);
};

const historySection = async function (query, venueImg) {
  // on history tab click works but not right because user can search while on history page.
  // const query = model.state.searchQuery
  const title = await model.fetchWiki(query);
  const historyData = await model.fetchWikiIntro(title);
  console.log(historyData);
  History.render(historyData);
  History._renderStadiumImage(venueImg);
  // console.log(data)
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

const playersStatsVersion = function () {};

const teamStatsSection = function () {};

const leagueTableSection = function () {};

const formStatsSection = function () {};

const init = function () {
  Header.headerHandler(search);
  // History.historyHandler(historySection);
};

init();

//************************//

