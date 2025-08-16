'use strict';

import { getIncomes } from "./incomes.js";
import { getItemsOutcomes } from "./itemsOutcomes.js";
import { getOutcomes, getCarOutcomes } from "./outcomes.js";

const reportSec = document.getElementById("report-wrapper");

// Make Calculator Data Table hidden by default
const calcDataSec = document.getElementById("calculator-data-sec");
calcDataSec.style.display = "none";

// Table body where rows will be appended
const tbody = document.getElementById("calc-tbody");

// Button to trigger data printing
const printDataBtn = document.getElementById("print-calc-data");
printDataBtn.addEventListener("click", () => {
    // Get data from different sources
    const incomesData = getIncomes();
    const outcomesData = getOutcomes();
    const vehicleOutcomesData = getCarOutcomes();
    const itemsOutcomesData = getItemsOutcomes();

    // Check if all arrays are empty
    if (incomesData.length === 0 &&
        outcomesData.length === 0 &&
        vehicleOutcomesData.length === 0 &&
        itemsOutcomesData.length === 0) {
        alert("אין נתונים להדפסה. כל הקטגוריות ריקות.");
        return;
    }

    // Hide report and calculator sections
    reportSec.style.display = "none";
    calcDataSec.style.display = "none";

    // Display the section and scroll to it
    calcDataSec.style.display = "block";
    calcDataSec.scrollIntoView({ behavior: "smooth" });

    // Clear previous table content
    tbody.innerHTML = "";

    // Find the maximum length of the data arrays
    const max = Math.max(
        incomesData.length,
        outcomesData.length,
        vehicleOutcomesData.length,
        itemsOutcomesData.length
    );

    // Create rows and fill them with the corresponding data
    for (let i = 0; i < max; i++) {
        const tr = document.createElement("tr");

        const incomeValue = incomesData[i] || "";
        const outcomeValue = outcomesData[i] || "";
        const vehicleOutcomeValue = vehicleOutcomesData[i] || "";
        const itemsOutcomeValue = itemsOutcomesData[i] || "";

        if (incomeValue || outcomeValue || vehicleOutcomeValue || itemsOutcomeValue) {
            tr.innerHTML = `
                <td>${i + 1}</td>
                <td>${incomeValue}</td>
                <td>${outcomeValue}</td>
                <td>${vehicleOutcomeValue}</td>
                <td>${itemsOutcomeValue}</td>
            `;
            tbody.appendChild(tr);
        }
    }
});
