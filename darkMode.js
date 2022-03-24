import pieView from "./views/pieView.js";
import predictionView from "./views/predictionView.js";
import View from "./views/view.js";
console.log("Dark Mode Module")

// needs to be checked as soon as the page loads
let darkMode = localStorage.getItem("darkMode") 
const themeBtn = document.querySelector(".theme__toggle--btn");


const enableDarkMode = function(){
const body = document.getElementById("body--ele");
console.log(body);
body.classList.add("dark-theme");
//
localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = function(){
const body = document.getElementById("body--ele");
console.log(body);
body.classList.remove("dark-theme");
//
localStorage.setItem("darkMode", null);
}

const renderNewCharts = function(){
  predictionView.newRadar.destroy();
  predictionView._predictionChart();
  pieView.myChart.destroy();
  pieView._displayPieChart();
}

const darkModeChartTheme = function(){
const chartColors = ["rgb(198, 83, 0)", "#0C377A", "#00284A"];
const radarGridColor = "#F8F9FE";
predictionView.radarTheme = radarGridColor;
pieView.pieChartTheme = chartColors;
renderNewCharts()
}

const lightModeChartTheme = function(){
const chartColors = [
  "rgb(34, 169, 227)",
  "rgba(34, 169, 227, 0.25)",
  "rgb(200, 205, 86)",
];
const radarGridColor = "rgba(10,9,9, 0.05)";
predictionView.radarTheme = radarGridColor;
pieView.pieChartTheme = chartColors;
renderNewCharts()
}

if(darkMode === "enabled"){
    enableDarkMode()
    darkModeChartTheme()
}

themeBtn.addEventListener("click", function(){
    darkMode = localStorage.getItem("darkMode")
    // Change Chart colour Theme
    if(darkMode !== "enabled"){
        enableDarkMode()
        darkModeChartTheme()
      } else{
        disableDarkMode()
        lightModeChartTheme()
    }
})

