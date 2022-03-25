import View from "./view";

class History extends View {
  _parentElement = document.querySelector(".history__section--text");
  _historyBtn = document.getElementById("history-btn");

  constructor() {
    super();
  }

  historyHandler(handler){
    this._historyBtn.addEventListener("click", handler)
  }

  _generateMarkup(){
    return `
        <article>
            ${this._data.history}
        </article>`;
  }

};

export default new History();