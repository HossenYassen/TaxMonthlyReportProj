'use strict'

const printBtn = document.getElementById("print-btn");

function printDivInNewWindow(divId, e) {
    var divContent = document.getElementById(divId).innerHTML;

    // Open a new window
    var printWindow = window.open('', '_blank', 'width=1000,height=800');

    // Get all the styles from the original page
    var styles = Array.from(document.styleSheets)
        .map(sheet => {
            if (sheet.cssRules) {
                return Array.from(sheet.cssRules)
                    .map(rule => rule.cssText)
                    .join('');
            }
            return '';
        })
        .join('');

    // Write the content and styles to the new window
    printWindow.document.write('<html lang="he" dir="rtl"><head><title>Print Content</title>');
    printWindow.document.write('<style>' + styles + '</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(divContent); // Insert the div content
    printWindow.document.write('</body></html>');

    // Wait for the new window to load before calling print
    printWindow.document.close(); // Close the document for further modifications
    printWindow.onload = function () {
         printWindow.print();
         printWindow.close();
    };
}

// Add event listener to button
printBtn.addEventListener("click", (e) => {
    e.preventDefault();
    printDivInNewWindow("report-wrapper");
});
