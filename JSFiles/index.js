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


document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#suppliers-table tbody');

    function createNewRow() {
        const newRow = document.createElement('tr');
        newRow.classList.add('table-row', 'new-row');

        for (let i = 0; i < 5; i++) {
            const td = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            input.classList.add('table-inputs');

            input.addEventListener('input', onInputChange);
            input.addEventListener('keydown', onKeyDown);

            td.appendChild(input);
            newRow.appendChild(td);
        }

        tableBody.appendChild(newRow);

        newRow.querySelector('input').focus();
    }

    function isRowFull(row) {
        const inputs = row.querySelectorAll('input');
        return Array.from(inputs).every(input => input.value.trim() !== '');
    }

    function onInputChange(event) {
        const currentRow = event.target.closest('tr');
        if (isRowFull(currentRow)) {
            const allRows = Array.from(tableBody.querySelectorAll('tr'));
            const isLastRow = currentRow === allRows[allRows.length - 1];
            if (isLastRow) {
                createNewRow();
            }
        }
    }

    function onKeyDown(event) {
        const input = event.target;
        const currentCell = input.closest('td');
        const currentRow = input.closest('tr');
        const inputs = Array.from(currentRow.querySelectorAll('input'));
        const currentIndex = inputs.indexOf(input);

        if (event.key === 'Enter') {
            event.preventDefault();

            if (currentIndex < inputs.length - 1) {
                inputs[currentIndex + 1].focus();
            } else {
                const allRows = Array.from(tableBody.querySelectorAll('tr'));
                const isLastRow = currentRow === allRows[allRows.length - 1];

                if (isLastRow) {
                    createNewRow();
                } else {
                    const nextRow = allRows[allRows.indexOf(currentRow) + 1];
                    if (nextRow) {
                        nextRow.querySelector('input').focus();
                    }
                }
            }
        }

        if (event.key === 'Escape') {
            const isNewRow = currentRow.classList.contains('new-row');
            if (isNewRow && currentIndex === 0) {
                currentRow.remove();

                const allRows = Array.from(tableBody.querySelectorAll('tr'));
                const prevRow = allRows[allRows.length - 1];
                if (prevRow) {
                    const prevInputs = prevRow.querySelectorAll('input');
                    prevInputs[prevInputs.length - 1].focus();
                }
            }
        }
    }

    const existingInputs = document.querySelectorAll('.table-inputs');
    existingInputs.forEach(input => {
        input.addEventListener('input', onInputChange);
        input.addEventListener('keydown', onKeyDown);
    });
});

const ols = [
  document.getElementById('income-ol'),
  document.getElementById('outcomes-ol'),
  document.getElementById('vichels-outcoms-ol'),
  document.getElementById('items-outcomes-ol')
];

document.addEventListener('keydown', (e) => {
  const active = document.activeElement;

  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    let index = ols.findIndex(ol => ol.contains(active) || ol === active);
    if (index === -1) return;

    if (e.key === 'ArrowRight') index = (index - 1) % ols.length;
    if (e.key === 'ArrowLeft') index = (index + 1 + ols.length) % ols.length;

    // Get first focusable element in the new <ol>
    const nextOl = ols[index];
    const firstFocusable = nextOl.querySelector('input, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) firstFocusable.focus();

    e.preventDefault(); // Prevent cursor move inside text fields
  }
});


