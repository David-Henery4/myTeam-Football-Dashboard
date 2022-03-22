import View from "./view";


class Header extends View {
  //Properties
  userQuery = document.querySelector(".search__input--query");
  _formInput = document.querySelector(".search__form");
  //
  burger = document.querySelector(".burger__btn");
  closeNavIcon = document.querySelector(".close__nav--icon");
  //
  _sideNav = document.querySelector(".nav__slide");
  _tabs = document.querySelectorAll(".tab__btn"); // use for styling
  _sections = document.querySelectorAll(".section");
  //
  constructor() {
    super();
    this.submitEvent();
    this._switchingSectionsListener();
    this._activeSideNavListener();
  }
  // Search Query Methods
  _submitAction(e) {
    e.preventDefault();
  }
  //
  submitEvent() {
    this._formInput.addEventListener("submit", this._submitAction.bind(this));
  }
  //
  headerHandler(handler) {
    this._formInput.addEventListener("submit", handler);
  }
  //
  searchQuery() {
    const query = this.userQuery.value;
    this.userQuery.value = "";
    this.userQuery.blur();
    return query;
  }

  // Switching Content Methods (NAV)
  _switchingSectionsEvent(e) {
    const clicked = e.target.closest(".tab__btn");
    if (!clicked) return;
    //
    this._sections.forEach((s) => {
      s.classList.remove("active__tab");
    });
    //
    const currentSectionTab = document.querySelector(
      `.section--${clicked.dataset.tab}`
    );
    currentSectionTab.classList.add("active__tab");
  }

  _switchingSectionsListener() {
    this._sideNav.addEventListener(
      "click",
      this._switchingSectionsEvent.bind(this)
    );
  }

  // Activate navigation methods

  _activeSideNavEvent() {
    this._sideNav.classList.toggle("active__slide--nav");
  }

  _activeSideNavListener() {
    this.burger.addEventListener("click", this._activeSideNavEvent.bind(this));
    this.closeNavIcon.addEventListener("click", this._activeSideNavEvent.bind(this));
  }
}

export default new Header();