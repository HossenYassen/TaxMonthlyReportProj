'use strict'

// Move to the calculator section when pressing on calculator button
const calcBtn = document.getElementById("calculator");
const calcSec = document.getElementById("calulator-wrapper");
calcBtn.addEventListener("click", () => {
    calcSec.scrollIntoView({ behavior: "smooth" });
});

const toReportBtn = document.getElementById("to-report");
const reportSec = document.getElementById("report-wrapper");
toReportBtn.addEventListener("click", () => {
    reportSec.scrollIntoView({behavior:"smooth"});
});

