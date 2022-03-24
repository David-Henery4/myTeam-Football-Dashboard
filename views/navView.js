console.log("nav")

class Navigation {

constructor(){
this._displayDateandTime()
}

_displayDateandTime(){
    console.log("hello")
    const time = +new Date()
    console.log(time)
}

};

export default new Navigation();
