import pieView from "./views/pieView.js";
import predictionView from "./views/predictionView.js";
import View from "./views/view.js";



/**
 * Needs to be checked as soon as the page loads, to see if its dark mode already.
 */
let darkMode = localStorage.getItem("darkMode") 
const themeBtn = document.querySelector(".theme__toggle--btn");
const darkIcon = document.querySelector(".dark__icon");
const lightIcon = document.querySelector(".light__icon");


/**
 * Fucntion enables darkmode by addeding the theme and setting the dark mode to the local storage and marking it as enabled.
 */
const enableDarkMode = function(){
const body = document.body;
body.classList.add("dark-theme");
//
localStorage.setItem("darkMode", "enabled");
}

/**
 * Removes darkmode class and sets the darkmode in the local storage to Null.
 */
const disableDarkMode = function(){
const body = document.body;
body.classList.remove("dark-theme");
//
localStorage.setItem("darkMode", null);
}

/**
 * When called, changes the colours of the chart.
 */
const renderNewCharts = function(){
  predictionView.myChart.destroy();
  predictionView._displayChart();
  pieView.myChart.destroy();
  pieView._displayChart();
}

/**
 * Chooses the colours of the chart by changing the colour properties in the views.
 * Then renders the new chart with the updated colours.
 */
const darkModeChartTheme = function(){
const chartColors = ["rgb(198, 83, 0)", "#0C377A", "#00284A"];
const radarGridColor = "#F8F9FE";
const darkChartsFontColor = "#F8F9FE";
predictionView.radarFontColor = darkChartsFontColor
predictionView.radarTheme = radarGridColor;
pieView.pieChartFontColor = darkChartsFontColor;
pieView.pieChartTheme = chartColors;
renderNewCharts()
}

/**
 * Chooses the colours of the chart by changing the colour properties in the views.
 * Then renders the new chart with the updated colours.
 */
const lightModeChartTheme = function(){
const chartColors = [
  "rgb(34, 169, 227)",
  "rgba(34, 169, 227, 0.25)",
  "rgb(200, 205, 86)",
];
const radarGridColor = "rgba(10,9,9, 0.05)";
const lightChartsFontColor = "#0E0D0D";
predictionView.radarFontColor = lightChartsFontColor
predictionView.radarTheme = radarGridColor;
pieView.pieChartFontColor = lightChartsFontColor
pieView.pieChartTheme = chartColors;
renderNewCharts()
}


/**
 * Checks to see if users has had dark mode enabled before on their previous visit.
 */
if(darkMode === "enabled"){
    enableDarkMode()
    darkModeChartTheme()
    darkIcon.classList.remove("active__theme--icon");
    lightIcon.classList.add("active__theme--icon");
}

/**
 * Listens for the click event on the theme toggle.
 */
themeBtn.addEventListener("click", function(e){
    darkMode = localStorage.getItem("darkMode")
    // Change Chart colour Theme
    if(darkMode !== "enabled"){
        darkIcon.classList.remove("active__theme--icon")
        lightIcon.classList.add("active__theme--icon")
        enableDarkMode()
        darkModeChartTheme()
      } else{
        darkIcon.classList.add("active__theme--icon");
        lightIcon.classList.remove("active__theme--icon");
        disableDarkMode()
        lightModeChartTheme()
    }
})

