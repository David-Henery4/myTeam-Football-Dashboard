//              CONTROLLER
import * as model from "./model.js";
//
import TeamView from "./views/teamView.js";
import PieView from "./views/pieView.js";
import PlayersView from "./views/playersView.js";
import FormView from "./views/formView.js";
import LeagueView from "./views/leagueView.js";
//

const search = function(){
const query = TeamView.searchQuery();
console.log(`Heres the search query: ${query}`);
console.log("works");
}

const pieChartSection = function(){

};

const playersStatsVersion = function(){

};

const teamStatsSection = function(){

}

const leagueTableSection = function(){

}

const formStatsSection = function(){
  
}


const init = function(){
TeamView.generalHandler(search)
}


init()