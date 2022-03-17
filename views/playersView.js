import View from "./view.js";

class PlayersView extends View {
  _parentElement = document.querySelector(".player__stats--body");

  _generateMarkup(){
    // will use map to loop over data when available
    return `
        <tr>
            <td>1st</td>
            <td>player1</td>
            <td>12</td>
            <td>5</td>
            <td>6</td>
            <td>1</td>
        </tr>
            `;
  }
}

export default new PlayersView()