//              CONTROLLER
import * as model from "./model.js";
//
import TeamView from "./views/teamView.js";
import PieView from "./views/pieView.js";
import PlayersView from "./views/playersView.js";
// import FormView from "./views/formView.js";
import LeagueView from "./views/leagueView.js";
import teamNameView from "./views/teamNameView.js";
import Prediction from "./views/predictionView.js"
//

const search = function () {
  const query = TeamView.searchQuery();
  console.log(`Heres the search query: ${query}`);
  console.log("works");
};

const pieChartSection = function () {};

const playersStatsVersion = function () {};

const teamStatsSection = function () {};

const leagueTableSection = function () {};

const formStatsSection = function () {};

const init = function () {
  TeamView.generalHandler(search);
};

init();

// Content Tab Component

const sideNav = document.querySelector(".nav__slide");
const tabBtn = document.querySelectorAll(".tab__btn");
const sections = document.querySelectorAll(".section");
sideNav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab__btn");
  if (!clicked) return;
  console.log(clicked);
  // for styling tab
  // tabBtn.forEach(t => {
  //     t.classList.remove("active__tab")
  // })
  //
  sections.forEach((s) => {
    s.classList.remove("active__tab");
  });
  const currentSectionTab = document.querySelector(
    `.section--${clicked.dataset.tab}`
  );
  console.log(currentSectionTab);
  currentSectionTab.classList.add("active__tab");
});
