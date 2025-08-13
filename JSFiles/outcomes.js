'use strict'

import { buildLi, getSum, outputResults, updateSummary } from "./utilities.js";

// Outputs elements
const out1 = document.getElementById("outcome-out1");
const out2 = document.getElementById("outcome-out2");
const out3 = document.getElementById("outcome-out3");
const out4 = document.getElementById("vichels-outcoms-out");

// Building Lis
const incomeList = document.getElementById("outcomes-ol");
const vehicleIncomeList = document.getElementById("vichels-outcoms-ol");
buildLi(incomeList);
buildLi(vehicleIncomeList);

const inputs = document.querySelectorAll("#outcomes-ol li input");
incomeList.addEventListener("input", () => {
    const sum1 = getSum(inputs);
    const sum2 = getSum(vehcileInputs);
    outputResults(out1, sum1 + sum2, 1);
    outputResults(out2, sum1 - sum1 * (0.18 / 1.18) + sum2 - sum2 * (0.12 / 1.18), 1);
    outputResults(out3, sum1 * (0.18 / 1.18) + sum2 * (0.12 / 1.18), 1);
    updateSummary(out3, 2);
});

const vehcileInputs = document.querySelectorAll("#vichels-outcoms-ol li input");
vehicleIncomeList.addEventListener("input", () => {
    const sum1 = getSum(inputs);
    const sum2 = getSum(vehcileInputs);
    outputResults(out1, sum1 + sum2, 1);
    outputResults(out2, sum1 - sum1 * (0.18 / 1.18) + sum2 - sum2 * (0.12 / 1.18), 1);
    outputResults(out3, sum1 * (0.18 / 1.18) + sum2 * (0.12 / 1.18), 1);
    outputResults(out4, sum2 * (0.12 / 1.18), 1)
    updateSummary(out3, 2);
});







