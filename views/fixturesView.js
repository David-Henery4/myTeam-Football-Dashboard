import View from "./view";

class Fixtures extends View {
    _parentElement = document.querySelector(".fixtures__section--content");

    constructor() {
    super();
    }

    _formatDateKickOffTime(time,date){
        const fixtureDate = new Date(time);
        const local = navigator.language;
        const options = {
            year: "numeric",
            day: "numeric",
            month: "numeric",
            hour12: true,
            hour: "numeric",
            minute: "numeric",
            };
        const formattedTime = new Intl.DateTimeFormat(local, options).format(
          fixtureDate
        );
        console.log(formattedTime);
    }
    
    _generateScoreString(score){
        if (score.home === null) {
            return `${"-"}`
        } else{
            return `${score.home}-${score.away}`
        }
    }

    _generateMarkup(){
        return this._data.map((o,i,a) => {
            `<div class="fixture">
                <p class="fixture__competition">${o.compitition}</p>
                <p class="fixture__time">3:00pm / 12th mar 22</p>
                <p class="fixture__teams">${o.homeTeam} ${this._generateScoreString(o.score)} ${o.awayTeam}</p>
            </div>`;
        }).join("")
    }
}

export default new Fixtures();