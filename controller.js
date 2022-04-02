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
import LeagueView from "./views/leagueView.js";
import TeamName from "./views/teamNameView.js";
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
  teamStatsSection(mainData.teamStats);
  minuteStatsSection(mainData.minuteGoalsData);
  playersStatsSection(mainData.playerStats);
  teamNameSection(mainData.queryTeamInfo.teamName);
  historySection(query, model.state.queryTeamInfo.stadiumImg);
};

const teamNameSection = function(name){
  TeamName.render(name)
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

const leagueTableSection = function () {};


const init = function () {
  Header.headerHandler(search);
  // History.historyHandler(historySection);
};

init();

//************************//


// TESTING SECTION!

// const testy = function(){
//   const testArray = [
//     ["10-40", { total: 14, percent: "40%" }],
//     ["20-40", { total: 24, percent: "40%" }],
//     ["30-40", { total: 12, percent: "40%" }],
//     ["40-40", { total: 6, percent: "40%" }],
//     ["50-40", { total: 8, percent: "40%" }],
//     ["60-40", { total: 10, percent: "40%" }],
//     ["70-40", { total: 16, percent: "40%" }],
//     ["85-40", { total: 56, percent: "40%" }],
//     ["90-40", { total: 24, percent: "40%" }],
//     ["95-40", { total: 16, percent: "40%" }],
//   ];  
//   const outcome = testArray.filter((a,i,ray) => 
//   a[1].total > ray[0][1].total
//   );
//   console.log(outcome)
//   const sorted = testArray.sort((a,b) => b[1].total - a[1].total)
//   const highest = sorted[0]
//   const minsCommon = highest[0];
//   const percentage = highest[1].percent
//   console.log(highest)
//   console.log(percentage)
//   console.log(minsCommon)
//   // console.log(outcome[0])
//   // console.log(outcome[0][0])
//   // console.log(outcome[0][1].percent)
//   const mins = outcome[0][0]
//   const percent = outcome[0][1].percent
//   // console.log(outcome)
//   // return [mins,percent]
//   // const reducedOutCome = testArray.reduce((aca,e,i,ray) => {
//   //   if (ray[0][1].total < e[1].total) return e
//   //   // console.log(ray[0][1].total);
//   //   // console.log(e[1].total)
//   // })
//   // // console.log(reducedOutCome)
// }

// console.log(testy())


////////////////////////////////////////

// TEST 2

// const testNull = ["9.99999","7.5433", "4.55444", "8.55643", "9.23454", "9.23458", null];
// function testRating(a){
//   const noNull = a.filter((e,i,a)=> e !== null)
//   // const rating = noNull.reduce((aca,e,i,a) => {
//   //   const toFixed = e.slice(0,4)
//   //   if(+a[0] <= +e) return +toFixed
//   // });   // DOESN'T WORK!
//   // console.log(rating)
// };
// testRating(testNull)


// // Reduce player Average rating
// const player0 = {
//   totalAppearences: 0,
//   totalGoal: 13,
//   totalAssits: 0,
//   avgRating: ["4.63643","7.88765", '6.8462', "6.55543", null],
//   names: {
//     fullNames: "swjdidi",
//     firstName: "swj",
//     lastName: "didi"
//   }
// }
// const player1 = {
//   totalAppearences: 0,
//   totalGoal: 12,
//   totalAssits: 0,
//   avgRating: ["7.88765", '6.8462', "6.55543", null],
//   names: {
//     fullNames: "swjdidi",
//     firstName: "swj",
//     lastName: "didi"
//   }
// }
// const player2 = {
//   totalAppearences: 0,
//   totalGoal: 17,
//   totalAssits: 0,
//   avgRating: ["5.63846","7.88765", '6.8462', "6.55543", null],
//   names: {
//     fullNames: "swjdidi",
//     firstName: "swj",
//     lastName: "didi"
//   }
// }
// const playerObjs = [player0, player1, player2];
// //
// function reduceAverageRatings(avgRate){
// return avgRate
//   .filter((e) => e !== null)
//   .map((e) => +e.slice(0, 3))
//   .reduce((aca, e, i, r) => (aca += e / r.length), 0)
//   .toFixed(1);
// }
// //
// const sortedRay = playerObjs
//   .sort((a, b) => b.totalGoal - a.totalGoal)
//   .map((e, i, a) => {
//     console.log(reduceAverageRatings(e.avgRating));
//     return e;
//   });

// console.log(sortedRay)



