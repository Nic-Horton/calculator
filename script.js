function add(a,b) {
    const result = a + b;
    return result;
}

function subtract(a,b) {
    const result = a - b;
    return result;
}

function multiply(a,b) {
    const result = a * b;
    return result;
}

function divide(a,b) {
    const result = a / b;
    return result;
}

function operate(operator,a,b) {
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

const screen = document.querySelector('.screen');
const prevScreen = document.createElement('div');
prevScreen.className = 'previousScreen';
const currentScreen = document.createElement('div');
currentScreen.className = 'currentScreen';

screen.appendChild(prevScreen);
screen.appendChild(currentScreen);