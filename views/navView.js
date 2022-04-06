

/**
 * Contains all methods and properties relevent to the navView UI.
 */
class Navigation {
  dateTimeWrap = document.querySelector(".dateTime")
  constructor() {
    this._formatDateAndTime()
  }

  _formatDateAndTime(){
    setInterval( () =>{
    const currentDate = new Date()
    const local = navigator.language;
    const options = {
      year: "numeric",
      day: "numeric",
      month: "numeric",
      hourCycle: 'h12',
      hour: "numeric",
      minute: "numeric",
    };
    const formattedTime = new Intl.DateTimeFormat(local,options).format(currentDate)
    const dateTimeArray = formattedTime.split(" ")
    const dateForm = dateTimeArray[0].replace(",", "")
    const dateFormStart = dateForm.slice(0,6)
    const dateFormEnd = dateForm.slice(-2)
    //
    // Fully Formatted Values
    const timeForm = dateTimeArray.slice(-2).join("")
    const formattedDate = `${dateFormStart}${dateFormEnd}`
    this._displayDateAndTime(formattedDate,timeForm)
  },1000);
  }

  _displayDateAndTime(date,time) {
    this.dateTimeWrap.innerHTML =" ";
    this.dateTimeWrap.insertAdjacentHTML(
      "afterbegin",
      `<p>${time}</p>
      <p>${date}</p>`
    );
  }
}

export default new Navigation();
