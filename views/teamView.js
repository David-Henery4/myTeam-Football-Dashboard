import View from "./view.js";

/**
 * Contains all methods and properties relevent to the team stats UI
 */
class Team extends View {
  _parentElement = document.querySelector(".team__stats--content");

   
//   teamHandler(handler){
//     this.userQuery.addEventListener("keypress", handler)
//   }

  _formatMostGoals(goals){
    return goals.home > goals.away? goals.home : goals.away
  };

  _generateMarkup(){
    return `
        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Avg Goals Scored</h6>
            </div>
            <div class="team__stat--num">
                <p>${this._data.avgGoalsScored}</p>
            </div>
        </div>

        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Avg Goals Against</h6>
            </div>
            <div class="team__stat--num">
                <p>${this._data.avgGoalsAgainst}</p>
            </div>
        </div>

        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Total Goals Scored</h6>
            </div>
            <div class="team__stat--num">
                <p>${this._data.totalGoalScored}</p>
            </div>
        </div>

        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Total Goals Against</h6>
            </div>
            <div class="team__stat--num">
                <p>${this._data.totalGoalsAgainst}</p>
            </div>
        </div>

        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Longest Win Streak</h6>
            </div>
            <div class="team__stat--num">
                <p>${this._data.longestWinStreak}</p>
            </div>
        </div>

        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Most Goals in One Game</h6>
            </div>
            <div class="team__stat--num">
                <p>${this._formatMostGoals(this._data.mostGoalsOneGame)}</p>
            </div>
        </div>
        `;
    };
}

export default new Team();