'use strict';

import { inputs as incomesInputs } from "./incomes.js";
import { inputs as itemsOutcomesInputs } from "./itemsOutcomes.js";
import { inputs as outcomesInputs, vehcileInputs } from "./outcomes.js";

document.addEventListener("DOMContentLoaded", () => {
    const ol1 = document.getElementById("incomes-clm");
    const ol2 = document.getElementById("outcomes-clm");
    const ol3 = document.getElementById("vehicle-outcomes-clm");
    const ol4 = document.getElementById("items-outcomes-clm");

    if (!ol1 || !ol2 || !ol3 || !ol4) {
        console.error("One or more <ol> elements not found.");
        return;
    }

    incomesInputs.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element.value;
        ol1.appendChild(li);
    });

    outcomesInputs.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element.value;
        ol2.appendChild(li);
    });

    vehcileInputs.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element.value;
        ol3.appendChild(li);
    });

    itemsOutcomesInputs.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element.value;
        ol4.appendChild(li);
    });
});
