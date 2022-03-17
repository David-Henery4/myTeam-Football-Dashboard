
export default class View {
  _data;

  render(data) {
    this._data = data;
    this.clear()
    const markup = this._generateMarkup;
    this._parentElement.insertAdjacentHTML("afterbegin", markup)
  }

  clear(){
      this._parentElement.innerHTML = ""
  }
}

// export default new View()