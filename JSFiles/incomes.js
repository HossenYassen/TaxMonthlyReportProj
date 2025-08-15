'use strict'

import { buildLi, getSum, outputResults, tax, updateIncomeInReport, updateSummary } from "./utilities.js";

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
    outputResults(out2, sum, 1 / (1 + tax));
    outputResults(out3, sum, tax / (1 + tax));
    updateSummary(out3, 1);
    updateIncomeInReport(out1, out2, out3);
});

export const getIncomes = ()=>{
    return [...inputs]
    .filter(data => data.value !== "")
    .map(data => data.value);
}





