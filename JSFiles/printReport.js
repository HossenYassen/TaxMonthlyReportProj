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


// function printDivInNewWindow(divId, e) {
//     var divContent = document.getElementById(divId).innerHTML;

//     // Open a new window
//     var printWindow = window.open('', '_blank');

//     // Get all the styles from the original page
//     var styles = Array.from(document.styleSheets)
//         .map(sheet => {
//             if (sheet.cssRules) {
//                 return Array.from(sheet.cssRules)
//                     .map(rule => rule.cssText)
//                     .join('');
//             }
//             return '';
//         })
//         .join('');

//     // Write the content and styles to the new window
//     printWindow.document.write('<html lang="he" dir="rtl"><head><title>Print Content</title>');
//     printWindow.document.write('<style>' + styles + '</style>');
//     printWindow.document.write('</head><body>');
//     printWindow.document.write(divContent); // Insert the div content
//     printWindow.document.write('</body></html>');

//     // Wait for the new window to load before calling print
//     printWindow.document.close(); // Close the document for further modifications
//     printWindow.onload = function () {
//         printWindow.print();
//         printWindow.close();
//     };
// }

// Add event listener to button
printBtn.addEventListener("click", (e) => {
    e.preventDefault();
    print(document.getElementById("report-wrapper"));
});
