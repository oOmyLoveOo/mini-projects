// Variables
const display = document.querySelector('.display span');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators')
const equal = document.querySelector('.equal')
const setPositiveNegative = document.querySelector('.positive-negative')   
const percent = document.querySelector('.percent')
const acButton = document.getElementById('AC');
const decimal = document.querySelector('.decimal')

let firstValue = "";
let operator = "";
let secondValue = "";
let result = 0;
let isFirstValue = false;
let isSecondValue = false;

// forEach for take the numbers button and encapsulate it in a array
numbers.forEach(numbers => {
    numbers.addEventListener("click", (e) => {
        const buttonHandle = e.target.textContent;
        if (!isFirstValue) {
            getFirstValue(buttonHandle);
        }else if (operator != "" && !isSecondValue) {
            getSecondValue(buttonHandle);
        }
    });
});

decimal.addEventListener("click", (e) => {
    if (!isFirstValue) {
        if (!firstValue.toString().includes(',')) {
            firstValue = firstValue === "" ? "0." : firstValue + ".";
            display.innerHTML = firstValue;
        }
    } else if (operator !== "" && !isSecondValue) {
        if (!secondValue.toString().includes(',')) {
            secondValue = secondValue === "" ? "0." : secondValue + ".";
            display.innerHTML = secondValue;
        }
    }
});

acButton.addEventListener("click", (e) => {
    if (e.target.id === "AC"){
        display.textContent = 0;
        firstValue = "";
        operator = "";
        secondValue = "";
        result = 0;
        isFirstValue = false;
        isSecondValue = false;
        return;
    }
});

function getFirstValue(element){
    if (firstValue.toString().length < 10){
        display.innerHTML = "";
        firstValue += element;
        display.innerHTML = firstValue;
        firstValue = +firstValue; 
    }
}

function getSecondValue(element){
    if (firstValue != "" && operator != ""){
        if (secondValue.toString().length < 10){
            secondValue += element;
            display.innerHTML = secondValue;
            secondValue = +secondValue;
        }
    }
}

operators.forEach(getOperators => {
    getOperators.addEventListener("click", (e) => {
        operator = e.target.textContent;
        isFirstValue = true;
    });
});

equal.addEventListener('click', () => {
    switch (operator){
        case "+":
            result = firstValue + secondValue;
            break;
        case "-":
            result = firstValue - secondValue;
            break;
        case "x":
            result = firstValue * secondValue;
            break;
        case "÷":
            result = secondValue !== 0 ? firstValue / secondValue : "Error";
            break;
        default:
            result = "Enter value";
    }
    display.innerHTML = result;
    firstValue = result;
    secondValue = "";
})

setPositiveNegative.addEventListener("click", ()=>{
    result.textContent = "";
    if(firstValue != ""){
        result = -firstValue;
        firstValue = result;
    }
    if(firstValue != "" && secondValue != "" && operator != ""){
     result = -result; 
    }
    display.textContent = result;
})

percent.addEventListener("click", () => {
    result.textContent = "";
    if(firstValue != ""){
        result = firstValue / 100;
        firstValue = result;
    }
    if(firstValue != "" && secondValue != "" && operator != ""){
        result = result / 100;
    }
    display.textContent = result;
})

// Set up the time
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');

const time = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();

    hour.textContent = currentHour.toString();
    minute.textContent = currentMinute.toString().padStart(2,'0'); 
    // I use padStart to avoid only 1 character and force to show 2 adding a 0 in the left
}
setInterval(time, 1000);
time();
