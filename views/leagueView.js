import View from "./view.js";
const soccer = require("soccer.js").soccer;


class LeagueView extends View{
    constructor(){
        super()
        this._displayLeagueTable()
    };

_displayLeagueTable(tableData){
    const on = soccer.addTeam([
        "Arsenal",
        "Aston Villa",
        "Burnley",
        "Brentford",
        "Brighton",
        "Cystal Palace",
        "Chelsea",
        "Everton",
        "Leicester",
        "Leeds",
        "Liverpool",
        "Man United",
        "Man City",
        "Norwich",
        "Newcastle",
        "Southampton",
        "Tottenham",
        "Watford",
        "Wolves",
        "West Ham",
        ]);

        soccer.renderLeague({
          leagueName: "Premier League", // name of league
          //  dropdown: 3, // collapse table from 3rd place and render toggle to table
          zones: [18, 20], // set a promotion and relegation zone
        });
    }

}

export default new LeagueView();