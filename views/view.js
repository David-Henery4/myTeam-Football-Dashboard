
export default class View {
  _data;
  userQuery = document.querySelector(".search__input--query")
  _formInput = document.querySelector(".search__form")

  constructor(){
    // super()
    this.submitEvent()
  }
  _submitAction(e){
    e.preventDefault()
  }

  submitEvent(){
  this._formInput.addEventListener("submit", this._submitAction.bind(this))
  };

  generalHandler(handler){
  this._formInput.addEventListener("submit", handler)
  };


  searchQuery(){
  const query = this.userQuery.value
  this.userQuery.value = ""
  this.userQuery.blur()
  return query
  }

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