'use strict'

// Move to the calculator section when pressing on to calculator button
const calcBtn = document.getElementById("calculator");
const calcSec = document.getElementById("calulator-wrapper");
calcSec.style.display = "none";
calcBtn.addEventListener("click", () => {
    calcSec.style.display = "flex";
    calcSec.scrollIntoView({ behavior: "smooth" });
});

// Move to the report section when pressing on to report button
const toReportBtn = document.getElementById("to-report");
const reportSec = document.getElementById("report-wrapper");
toReportBtn.addEventListener("click", () => {
    reportSec.scrollIntoView({ behavior: "smooth" });
    setTimeout(()=>{
        calcSec.style.display = "none";
    },500)
});

// Showind and hiding suppliers details sections in report
const checkBox = document.getElementById("open-print");
const suppliersTbl = document.getElementById("suppliers-table");
suppliersTbl.style.display = "none";
checkBox.addEventListener("change", () => {
    if(checkBox.checked){
        suppliersTbl.style.display = "block";
    }
    else{
        suppliersTbl.style.display = "none";
    }
});


