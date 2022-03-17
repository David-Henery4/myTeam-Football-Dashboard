//              CONTROLLER
import * as model from "./model.js";
//
import TeamView from "./views/teamView.js";
import PieView from "./views/pieView.js";
import PlayersView from "./views/playersView.js";
import FormView from "./views/formView.js";
import LeagueView from "./views/leagueView.js";
import teamView from "./views/teamView.js";
//

// document.querySelector(".search__input--query").addEventListener("keypress", function(e){
// if(e.key === "Enter"){
//     console.log(e.key)
//     console.log(this.value)
//     this.value = ""
//     this.blur()
// }
// });




const pieChartSection = function(){

};

const playersStatsVersion = function(){

};

const teamStatsSection = function(){
// console.log(e.key)
// if (e.key === "Enter"){
//     const query = TeamView.searchQuery()
//     console.log(query)
// }
const query = TeamView.searchQuery()
console.log(`Heres the search query: ${query}`)
console.log("works")
}

const leagueTableSection = function(){

}

const formStatsSection = function(){
  
}


const init = function(){
teamView.generalHandler(teamStatsSection)
}

init()