import View from "./view.js";


class TeamView extends View {
  _parentElement = document.querySelector(".team__stats--content");

   
//   teamHandler(handler){
//     this.userQuery.addEventListener("keypress", handler)
//   }

  _generateMarkup(){
    return `
        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Avg Goals Scored</h6>
            </div>
            <div class="team__stat--num">
                <p>1.8</p>
            </div>
        </div>

        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Avg Goals Against</h6>
            </div>
            <div class="team__stat--num">
                <p>1.8</p>
            </div>
        </div>

        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Total Goals Scored</h6>
            </div>
            <div class="team__stat--num">
                <p>1</p>
            </div>
        </div>

        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Total Goals Against</h6>
            </div>
            <div class="team__stat--num">
                <p>1</p>
            </div>
        </div>

        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Longest Win Streak</h6>
            </div>
            <div class="team__stat--num">
                <p>1</p>
            </div>
        </div>

        <div class="team__stats--box">
            <div class="team__stat--discription">
                <h6>Largest Win</h6>
            </div>
            <div class="team__stat--num">
                <p>1</p>
            </div>
        </div>
        `;
    };
}

export default new TeamView();