'use strict'

// Constants:
export const numOfLi = 100;


// Functions:

// Building the lis
export const buildLi = (containerElem) => {
    for (let i = 1; i <= numOfLi; i++) {
        const li = document.createElement("li");
        li.className = "calc-inputs";
        li.innerHTML =
            `
        <span class="index">${i}. </span>
        <input type="text" placeholder="0.00">
        `;
        containerElem.appendChild(li);
    }
}

// Update the result into the outputs
export const outputResults = (outElem, sum, param) => {
    const res = sum * param;
    outElem.value = res.toFixed(2) !== "NaN" ? res.toFixed(2) : "0.00";
    const outElemVal = outElem.value;
    if (outElemVal > 0) {
        outElem.style.borderColor = "green";
        outElem.style.color = "green";
    }
    else if (outElemVal < 0) {
        outElem.style.borderColor = "red";
        outElem.style.color = "red";
    }
    else {
        outElem.style.borderColor = "";
        outElem.style.color = "";
    }
}

// Get inputs sum
export const getSum = (inputsArr) => {
    let sum = 0;
    inputsArr.forEach(input => {
        input.value = input.value.replace(/[^0-9\-]/g, '').replace(/(?!^)-/g, '');

        const val = input.value;
        if (val !== "") {
            sum += parseFloat(val);
        }
    });
    return sum;
}

// Summary Updating
let summaryOut1 = document.getElementById("summary-out1");
let summaryOut2 = document.getElementById("summary-out2");
let summaryOut3 = document.getElementById("summary-out3");
let summaryOut4 = document.getElementById("summary-out4");
export const updateSummary = (out, idx) => {
    if (idx === 1) {
        outputResults(summaryOut1, out.value, 1);
    }
    else if (idx === 2) {
        outputResults(summaryOut2, out.value, 1);
    }
    else{
        outputResults(summaryOut3, out.value, 1);
    }
    outputResults(summaryOut4, parseFloat(summaryOut1.value) - parseFloat(summaryOut2.value) - parseFloat(summaryOut3.value), 1);
}