import View from "./view";

/**
 * Contains all methods and properties relevent to the historyView UI.
 */
class History extends View {
  _parentElement = document.querySelector(".history__section--text");
  // _historyBtn = document.getElementById("history-btn");
  _stadiumImgWrap = document.querySelector(".history__section--img");

  constructor() {
    super();
  }

  // historyHandler(handler){
  //   this._historyBtn.addEventListener("click", handler)
  // }

  _renderStadiumImage(img){
    this._stadiumImgWrap.innerHTML = ""
    this._stadiumImgWrap.insertAdjacentHTML(
      "afterbegin",
      `<img src="${img}" alt="" />`
    );
  }

  _generateMarkup(){
    return `
        <article>
            ${this._data.history}
        </article>`;
  }

};

export default new History();