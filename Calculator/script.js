let runningTotal = 0;
let buffer = '0';
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value)
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    if (symbol === 'C') {
        buffer = '0';
        runningTotal = 0;
    } else if (symbol === '=') {
        if (previousOperator === null) {
            return
        }

        flushOperation(parseInt(buffer));
        previousOperator = null;
        buffer = runningTotal;
        runningTotal = 0;
    } else if (symbol === '←') {
        if (buffer.length === 1) {
            buffer = '0';
        } else {
            buffer = buffer.substring(0, buffer.length - 1);
        }
    } else if (symbol === '+' || symbol === '−' || symbol === '×' || symbol === '÷') {
        handleMath(symbol);
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const bufferVal = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = bufferVal;
    } else {
        flushOperation(bufferVal);
    }

    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(bufferVal) {
    if (previousOperator === '+') {
        runningTotal += bufferVal;
    } else if (previousOperator === '−') {
        runningTotal -= bufferVal;
    } else if (previousOperator === '×') {
        runningTotal *= bufferVal;
    } else if (previousOperator === '÷') {
        runningTotal /= bufferVal;
    }
}

function handleNumber(input) {
    if (buffer === '0') {
        buffer = input
    } else {
        buffer += input
    }
}

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function(e) {
        buttonClick(e.target.innerText);
    })
}

init();