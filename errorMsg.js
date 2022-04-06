
/**
 * Class that has the methods that controll the error messages
 */
class ErrorMessages {
  _errorMsgElement = document.querySelector(".error__msg--wrap");
  _closeIcon = document.querySelector(".error__close--icon");
  _overlay = document.querySelector(".overlay");

  constructor(){
    this._removeErrorMsgEvent()
  }

  overlay(){
    this._overlay.classList.toggle("overlay__active")
  };

  showErrorMsg() {
    this._errorMsgElement.classList.add("error__msg--active");
    this.overlay()
  }

  _removeErrorMsgAction(e){
    this._errorMsgElement.classList.remove("error__msg--active");
    this.overlay()
  }
  
  _removeErrorMsgEvent(){
    this._closeIcon.addEventListener("click", this._removeErrorMsgAction.bind(this))
  }

};

export default new ErrorMessages()