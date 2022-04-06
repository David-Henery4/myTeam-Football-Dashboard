import View from "./view";


/**
 * Contains all methods and properties relevent to the headerView UI.
 */
class Header extends View {
  //Properties
  userQuery = document.querySelector(".search__input--query");
  _formInput = document.querySelector(".search__form");
  //
  burger = document.querySelector(".burger__btn");
  closeNavIcon = document.querySelector(".close__nav--icon");
  //
  _sideNav = document.querySelector(".nav__slide");
  _searchIcon = document.querySelector(".search__icon");
  //
  _desktopWidth = window.matchMedia("(min-width: 1020px)");
  // use for styling
  _tabs = document.querySelectorAll(".tab__btn");
  _sections = document.querySelectorAll(".section");
  //
  constructor() {
    super();
    this.submitEvent();
    this._switchingSectionsListener();
    this._activeSideNavListener();
    this._navCloseOnDesktopListener()
    this._navCloseOnDesktopAction(this._desktopWidth)
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
  searchIconHandler(handler) {
    this._searchIcon.addEventListener("click", handler);
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
    //
    this._removeNavSlide();
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
  // Remove navigation
  _removeNavSlide() {
    this._sideNav.classList.remove("active__slide--nav");
  }
  //
  _activeSideNavListener() {
    this.burger.addEventListener("click", this._activeSideNavEvent.bind(this));
    //
    this.closeNavIcon.addEventListener(
      "click",
      this._activeSideNavEvent.bind(this)
    );
    //
  }

  // NAV BAR CLOSE WHEN REACHES DESKTOP
  _navCloseOnDesktopAction(e){
    if (e.matches){
      this._removeNavSlide()
    }
  };

  _navCloseOnDesktopListener(){
    this._desktopWidth.addEventListener("change", this._navCloseOnDesktopAction.bind(this))
  }

}

export default new Header();