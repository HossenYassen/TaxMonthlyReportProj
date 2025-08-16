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

    const checkBox = document.getElementById("open-print");
    checkBox.style.display = "none";

    // Hide report-period
    const reportPeriod = document.getElementById("report-period");
    reportPeriod.style.display = "none";

    // Get selected radio button
    const radioChoice = document.querySelector('input[name="choice"]:checked');
    let choiceText = "";

    if (radioChoice) {
        choiceText = radioChoice.value === "1" ? "חודשי" : "דו חודשי";
    } else {
        choiceText = "לא נבחר סוג דיווח";
    }

    // Get and format date
    const dateInput = document.getElementById("date-picker-input").value;
    let formattedDate = "";

    if (dateInput) {
        const [year, month] = dateInput.split("-");
        formattedDate = `${month}/${year}`;
    } else {
        formattedDate = "תאריך לא נבחר";
    }

    // Set and show date-print
    const datePrintDiv = document.getElementById("date-print");
    datePrintDiv.innerHTML = `<strong>סוג דיווח:</strong> ${choiceText} | <strong>תאריך:</strong> ${formattedDate}`;
    datePrintDiv.style.display = "block";

    // Trigger print and restore after short delay
    setTimeout(() => {
        printDivInNewWindow("report-wrapper");

        // After print
        datePrintDiv.style.display = "none";
        reportPeriod.style.display = "flex";
        checkBox.style.display = "flex";
    }, 100); // Slight delay to allow UI update
});


