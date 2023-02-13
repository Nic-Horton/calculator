let displayValue = '';
let operatorValue = '';
let prevNumber = '';
let currentNumber = '';
let newOperator = '';
let decCount = 0;
let opCount = 0;
let eqCount = 0;

function add(a,b) {
    const result = a + b;
    return Math.round((result + Number.EPSILON) * 100) / 100;
}

function subtract(a,b) {
    const result = a - b;
    return Math.round((result + Number.EPSILON) * 100) / 100;
}

function multiply(a,b) {
    const result = a * b;
    return Math.round((result + Number.EPSILON) * 100) / 100;
}

function divide(a,b) {
    if (b === 0) {
        alert("Nice Try");
        return clear();
    }
    const result = a / b;
    return Math.round((result + Number.EPSILON) * 100) / 100;
}

function operate(operator,a,b) {
    if (newOperator === prevNumber){
        return;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
    }
}

const screen = document.querySelector('.screen');
const previousScreen = document.createElement('div');
previousScreen.className = 'previousScreen';
previousScreen.textContent = '';
const currentScreen = document.createElement('div');
currentScreen.className = 'currentScreen';
currentScreen.textContent = '';

screen.appendChild(previousScreen);
screen.appendChild(currentScreen);

const numberButtons = document.querySelectorAll('.numBtn');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'dec'){
            decCount++;
        }
        if (button.id === 'dec' && decCount > 1){
            return;
        }
        displayValue += button.textContent;
        currentNumber = displayValue;
        currentScreen.textContent = displayValue;
    });
});

const opButtons = document.querySelectorAll('.opBtn');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentNumber == ''){
            return clear();
        }
        opCount++;
        decCount = 0;
        eqCount = 0;
        if (opCount > 1) {
            currentNumber = operate(operatorValue,prevNumber,currentNumber);
            currentScreen.textContent = currentNumber;
            displayValue = '';
            newOperator = prevNumber;
        }
        operatorValue = button.textContent;
        prevNumber = currentNumber;
        currentNumber = '';
        displayValue = '';
        previousScreen.textContent = (prevNumber + ' ' + operatorValue);
    });
});

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    decCount = 0;
    opCount = 0;
    eqCount++;
    if (eqCount > 1){
        return;
    }
    if (prevNumber == '' || currentNumber == ''){
        return;
    } else {
    previousScreen.textContent = (prevNumber + ' ' + operatorValue + ' ' + currentNumber + ' =');
    currentNumber = operate(operatorValue,prevNumber,currentNumber);
    currentScreen.textContent = currentNumber;
    displayValue = '';
    newOperator = prevNumber;
    }
});

function clear() {
    displayValue = '';
    operatorValue = '';
    prevNumber = '';
    currentNumber = '';
    currentScreen.textContent = '';
    previousScreen.textContent = '';
    decCount = 0;
    opCount = 0;
    eqCount = 0;
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    clear();
});

function backSpace() {
    displayValue = displayValue.slice(0,-1) + '';
    currentNumber = displayValue;
    currentScreen.textContent = displayValue;
}

const backButton = document.querySelector('.delete');
backButton.addEventListener('click', () => {
    backSpace();
});