//              CONTROLLER
import * as model from "./model.js";
import * as dark from "./darkMode.js";
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

const search = function () {
  const query = Header.searchQuery();
  console.log(`Heres the search query: ${query}`);
  console.log("works");
};

const pieChartSection = function () {};

const playersStatsVersion = function () {};

const teamStatsSection = function () {};

const leagueTableSection = function () {};

const formStatsSection = function () {};

const init = function () {
  Header.headerHandler(search)
};

init();



