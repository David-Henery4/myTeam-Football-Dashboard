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
//

const search = async function () {
  const query = Header.searchQuery();
  console.log(`Heres the search query: ${query}`);
  console.log("works");
  model.state.searchQuery = query;
  console.log(model.state);
  // const title = await model.fetchWiki(query)
  // const historyData = await model.fetchWikiIntro(title)
  // historySection(historyData)
  // historySection(data)
  // model.fetchBasicTeamInfo(query);
  // pieChartSection();
  historySection(query);
};

const historySection = async function (query) {
  // on history tab click works but not right because user can search while on history page.
  // const query = model.state.searchQuery
  const title = await model.fetchWiki(query);
  const historyData = await model.fetchWikiIntro(title);
  console.log(historyData);
  History.render(historyData);
  // console.log(data)
};

const pieChartSection = function () {
  // console.log(model.state);
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
