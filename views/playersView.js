import View from "./view.js";

class Players extends View {
  _parentElement = document.querySelector(".player__stats--body");


  _formatRatings(avgRate){
    return avgRate
      .filter((e) => e !== null)
      .map((e) => +e.slice(0, 3))
      .reduce((aca, e, i, r) => (aca += e / r.length), 0)
      .toFixed(1);
  };


  _generateMarkup(){
    // will use map to loop over data when available
    return [...new Map(this._data.map(obj => [JSON.stringify(obj),obj])).values()]
      .sort((a, b) => b.totalGoals - a.totalGoals)
      .map((o, i, a) => {
        return `
        <tr>
            <td>${i + 1}</td>
            <td>${o.names.fullName}</td>
            <td>${o.totalGoals}</td>
            <td>${o.totalAssists}</td>
            <td>${this._formatRatings(o.avgRating)}</td>
        </tr>
            `;
      }).join("");
  }
}

export default new Players()