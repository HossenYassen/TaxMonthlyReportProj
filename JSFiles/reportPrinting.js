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

printBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name-input");
    const caseInput = document.getElementById("case-num-input");
    const dateInput = document.getElementById("date-picker-input");
    const radioChoice = document.querySelector('input[name="choice"]:checked');

    if (!nameInput || nameInput.value.trim() === "") {
        alert("יש להזין שם לקוח.");
        return;
    }

    if (!caseInput || caseInput.value.trim() === "") {
        alert("יש להזין מספר תיק.");
        return;
    }

    if (!radioChoice) {
        alert("יש לבחור סוג דיווח (חודשי או דו חודשי).");
        return;
    }

    if (!dateInput || dateInput.value.trim() === "") {
        alert("יש לבחור תאריך.");
        return;
    }

    // Proceed with printing logic
    const checkBox = document.getElementById("open-print");
    checkBox.style.display = "none";

    const reportPeriod = document.getElementById("report-period");
    reportPeriod.style.display = "none";

    const choiceText = radioChoice.value === "1" ? "חודשי" : "דו חודשי";

    const [year, month] = dateInput.value.split("-");
    const formattedDate = `${month}/${year}`;

    const datePrintDiv = document.getElementById("date-print");
    datePrintDiv.innerHTML = `<strong>סוג דיווח:</strong> ${choiceText} | <strong>תאריך:</strong> ${formattedDate}`;
    datePrintDiv.style.display = "block";

    setTimeout(() => {
        printDivInNewWindow("report-wrapper");

        datePrintDiv.style.display = "none";
        reportPeriod.style.display = "flex";
        checkBox.style.display = "flex";
    }, 100);
});
