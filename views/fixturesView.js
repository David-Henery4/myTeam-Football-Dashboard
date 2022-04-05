import View from "./view";

class Fixtures extends View {
    _parentElement = document.querySelector(".fixtures__section--content");

    constructor() {
    super();
    }

    _getDateKickOffTime(time){
        const fixtureDate = new Date(time * 1000);
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
        return this._formatKoDateTime(formattedTime)
    }

    _formatKoDateTime(timeDate){
        const timeArr = timeDate.split(" ")
        const koTime = timeArr.slice(-2).join("")
        const koDate = timeArr[0].slice(-5)
        return `${koTime} / ${koDate}`
    }
    
    _generateScoreString(score){
        if (score.home === null) {
            return `${"-"}`
        } else{
            return `${score.home}-${score.away}`
        }
    }

    _generateMarkup(){
        return this._data.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .map((o,i,a) => {
            return `<div class="fixture">
                <p class="fixture__competition">${o.compitition}</p>
                <p class="fixture__time">${this._getDateKickOffTime(o.kickOffTime)}</p>
                <p class="fixture__teams">${
                o.homeTeam
                } ${this._generateScoreString(o.score)} ${o.awayTeam}</p>
            </div>`;
        }).join("")
    }
}

export default new Fixtures();