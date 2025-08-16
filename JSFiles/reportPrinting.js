'use strict';

const printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Validation
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

    // Format report info
    const choiceText = radioChoice.value === "1" ? "חודשי" : "דו חודשי";
    const [year, month] = dateInput.value.split("-");
    const formattedDate = `${month}/${year}`;

    const datePrintDiv = document.getElementById("date-print");
    datePrintDiv.innerHTML = `<strong>סוג דיווח:</strong> ${choiceText} | <strong>תאריך:</strong> ${formattedDate}`;
    datePrintDiv.style.display = "block";

    const elementsToHide = [
        document.getElementById("calulator-wrapper"),
        document.getElementById("calculator-data-sec"),
        document.getElementById("report-period"),
        document.getElementById("open-print"),
        printBtn
    ];

    // Hide all extra elements before printing
    elementsToHide.forEach(el => {
        if (el) el.style.display = "none";
    });

    // Trigger print
    window.print();

    // Restore UI after printing
    window.onafterprint = () => {
        datePrintDiv.style.display = "none";
        elementsToHide.forEach(el => {
            if (el && el.id === "report-period") {
                el.style.display = "flex";
            } else if (el) {
                el.style.display = "block";
            }
        });
    };
});
