'use strict'

import { buildLi, getSum, outputResults, updateSummary } from "./utilities.js";

// Outputs elements
const out1 = document.getElementById("items-outcomes-out1");
const out2 = document.getElementById("items-outcomes-out2");
const out3 = document.getElementById("items-outcomes-out3");

// Building Lis
const incomeList = document.getElementById("items-outcomes-ol");
buildLi(incomeList);

const inputs = document.querySelectorAll("#items-outcomes-ol li input");
incomeList.addEventListener("input", () => {
    const sum = getSum(inputs);
    outputResults(out1, sum, 1);
    outputResults(out2, sum, 1 / 1.18);
    outputResults(out3, sum, 0.18 / 1.18);
    updateSummary(out3, 3);
});
