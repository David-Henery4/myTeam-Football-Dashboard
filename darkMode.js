import pieView from "./views/pieView.js";
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

if(darkMode === "enabled"){
    enableDarkMode()
}

themeBtn.addEventListener("click", function(){
    darkMode = localStorage.getItem("darkMode")
    // Change Chart colour Theme
    if(darkMode !== "enabled"){
        enableDarkMode()
        const chartColors = ["rgb(198, 83, 0)", "#0C377A", "#00284A"];
        pieView.myChart.destroy();
        pieView._displayPieChart(chartColors);
    } else{
        disableDarkMode()
        const chartColors = [
          "rgb(34, 169, 227)",
          "rgba(34, 169, 227, 0.25)",
          "rgb(200, 205, 86)",
        ];
        pieView.myChart.destroy()
        pieView._displayPieChart(chartColors);
    }
})









// ideas that didnt work / might revisit

// console.log(View.themeCheck);

// View.themeCheck = true;
// console.log(View.themeCheck);
// View.chartThemeColor = '#C65300';
// pieView._displayPieChart();
// console.log(View.chartThemeColor);

// View.themeCheck = false;
// console.log(View.themeCheck);
// View.chartThemeColor = "#22A9E3";
// pieView._displayPieChart();
// console.log(View.chartThemeColor);
// pieView._displayPieChart("#22A9E3");