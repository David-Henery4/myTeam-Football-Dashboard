import View from "./view.js";

class TeamName extends View {
  _parentElement = document.querySelector(".team__name--wrap");

  _generateMarkup() {
    return `<h4>${this._data}</h4>`;
  }
};

export default new TeamName()