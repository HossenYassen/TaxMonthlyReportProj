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

// Update data in report
const reportOut1 = document.getElementById("out1");
const reportOut2 = document.getElementById("out2");
const reportOut3 = document.getElementById("out3");
const reportOut4 = document.getElementById("out4");
const reportOut5 = document.getElementById("out5");
const reportOut6 = document.getElementById("out6");
export const updateSummary = (out, idx) => {
    if (idx === 1) {
        outputResults(summaryOut1, out.value, 1);
    }
    else if (idx === 2) {
        outputResults(summaryOut2, out.value, 1);
    }
    else {
        outputResults(summaryOut3, out.value, 1);
    }
    outputResults(summaryOut4, parseFloat(summaryOut1.value) - parseFloat(summaryOut2.value) - parseFloat(summaryOut3.value), 1);
    reportOut4.value = parseFloat(summaryOut2.value)
    reportOut5.value = parseFloat(summaryOut3.value)
    reportOut6.value = parseFloat(summaryOut4.value)
}


export const updateIncomeInReport = (out1, out2, out3) => {
    reportOut1.value = out1.value;
    reportOut2.value = out2.value;
    reportOut3.value = out3.value;
}

// Moving To The Next Input
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('.calc-inputs input'); // Select all input fields inside the calculator

    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                // Prevent the default behavior (form submission)
                e.preventDefault();

                // Move to the next input if it exists
                if (inputs[index + 1]) {
                    inputs[index + 1].focus();
                }
            }
        });
    });
});

