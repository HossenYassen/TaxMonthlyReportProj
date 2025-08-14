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
    reportSec.scrollIntoView({ behavior: "smooth" });
});


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
})


const printDataBtn = document.getElementById("print-calc-data");
printDataBtn.addEventListener("click", function () {
    window.open("../htmlPages/calcData.html", "_blank");
    
});
