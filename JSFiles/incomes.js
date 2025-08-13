'use strict'

import { buildLi, getSum, outputResults, updateIncomeInReport, updateSummary } from "./utilities.js";

// Outputs elements
const out1 = document.getElementById("income-out1");
const out2 = document.getElementById("income-out2");
const out3 = document.getElementById("income-out3");

// Building Lis
const incomeList = document.getElementById("income-ol");
buildLi(incomeList);

const inputs = document.querySelectorAll("#income-ol li input");
incomeList.addEventListener("input", () => {
    const sum = getSum(inputs);
    outputResults(out1, sum, 1);
    outputResults(out2, sum, 1 / 1.18);
    outputResults(out3, sum, 0.18 / 1.18);
    updateSummary(out3, 1);
    updateIncomeInReport(out1, out2, out3);
});




