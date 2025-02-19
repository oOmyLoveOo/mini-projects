// Variables
const display = document.querySelector(".display span");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equal = document.querySelector(".equal");
const setPositiveNegative = document.querySelector(".positive-negative");
const percent = document.querySelector(".percent");
const acButton = document.getElementById("AC");
const decimal = document.querySelector(".decimal");

let valueInMemory = null;
let operatorInMemory = null;

const getResultOfOperation = () => {
  const currentValueNum = getValueAsNum();
  const currentValueInMemory = parseFloat(valueInMemory);
  switch (operatorInMemory) {
    case "+":
      return currentValueInMemory + currentValueNum;
    case "-":
      return currentValueInMemory - currentValueNum;
    case "x":
      return currentValueInMemory * currentValueNum;
    case "÷":
      return currentValueNum !== 0 ? currentValueInMemory / currentValueNum : "Error"; 
    default:
      return currentValueNum;
  }
};

const handleOperatorClick = (operator) => {
    const currentValueStr = getValueAsStr();
    if (!valueInMemory){
        valueInMemory = currentValueStr;
        operatorInMemory = operator;
        setStrAsValue("0");
        return;
    }
    valueInMemory = getResultOfOperation();
    operatorInMemory = operator;
    setStrAsValue("0");
};

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      handleOperatorClick(operator.textContent);
    });
});

equal.addEventListener('click',() => {
  if(valueInMemory){
    setStrAsValue(getResultOfOperation().toString());
    valueInMemory = null;
    operatorInMemory = null;
  }
});

const getValueAsStr = () => display.textContent.split(",").join("");

const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};

const setStrAsValue = (value) => {
  if (value[value.length - 1] === ".") {
    display.textContent += ".";
    return;
  }

  const [wholeStr, decimalStr] = value.split(".");
  if (decimalStr) {
    display.textContent =
      parseFloat(wholeStr).toLocaleString() + "." + decimalStr;
  } else {
    display.textContent = parseFloat(wholeStr).toLocaleString();
  }
};

const handleNumberClick = (number) => {
  const currentValueStr = getValueAsStr();
  if (currentValueStr === "0") {
    setStrAsValue(number);
  } else {
    setStrAsValue(currentValueStr + number);
  }
};

acButton.addEventListener("click", () => {
  setStrAsValue("0");
  let valueInMemory = null;
  let operatorInMemory = null;
});

setPositiveNegative.addEventListener("click", () => {
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();
  if (currentValueNum > 0) {
    setStrAsValue("-" + currentValueNum);
  } else {
    setStrAsValue(currentValueStr.substring(1));
  }
});

percent.addEventListener("click", () => {
  const currentValueNum = getValueAsNum();
  const newValue = currentValueNum / 100;
  setStrAsValue(newValue.toString());
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    handleNumberClick(number.textContent);
  });
});

decimal.addEventListener("click", () => {
  const currentValueStr = getValueAsStr();
  if (!display.textContent.includes(".")) {
    setStrAsValue(currentValueStr + ".");
  }
});

// Set up the time
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");

const time = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();

  hour.textContent = currentHour.toString();
  minute.textContent = currentMinute.toString().padStart(2, "0");
  // I use padStart to avoid only 1 character and force to show 2 adding a 0 in the left
};
setInterval(time, 1000);
time();

