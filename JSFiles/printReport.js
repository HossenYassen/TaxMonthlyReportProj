'use strict'

const printBtn = document.getElementById("print-btn");
const createPrintableReport = function () {
    var reportWrapper = document.getElementById("report-wrapper");
    let printableReport = window.open("", "_blank");
    printableReport.document.writeln(`
        <!DOCTYPE html>
        <html lang="he" dir="rtl">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./Stylesheets/index.css">
            <link rel="stylesheet" href="./Stylesheets/calculator.css">
            <title>Tax Report Generator</title>
        </head>

        <body>
            <div id="report-wrapper">
        `);
    printableReport.document.writeln(reportWrapper.innerHTML + "</body></html>");
}

// Add event listener to button
printBtn.addEventListener("click", (e) => {
    e.preventDefault();
    print(document.getElementById("report-wrapper"));
});
