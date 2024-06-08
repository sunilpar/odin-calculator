let currentNumber = '';
let previousNumber = '';
let operator = '';
let i = 0;
let displayCurrentNumber = document.querySelector('.currentDisplay');
let displayPreviousNumber = document.querySelector('.previousDisplay');

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'Enter':
      if (currentNumber !== '' && previousNumber !== '') {
        calculate();
      }
      break;

    case '.':
      handleDecimal();
      break;
    case 'c':
      displayClear();
      break;
    case '0':
      handleNumber(e.key);
      break;
    case '1':
      handleNumber(e.key);
      break;
    case '2':
      handleNumber(e.key);
      break;
    case '3':
      handleNumber(e.key);
      break;
    case '4':
      handleNumber(e.key);
      break;
    case '5':
      handleNumber(e.key);
      break;
    case '6':
      handleNumber(e.key);
      break;
    case '7':
      handleNumber(e.key);
      break;
    case '8':
      handleNumber(e.key);
      break;
    case '9':
      handleNumber(e.key);
      break;
    case '+':
      handleOperator(e.key);
      break;
    case '-':
      handleOperator(e.key);
      break;
    case '*':
      handleOperator(e.key);
      break;
    case '/':
      handleOperator(e.key);
      break;
    case '%':
      handleOperator(e.key);
      break;
  }
});

let equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  if (currentNumber !== '' && previousNumber !== '') {
    calculate();
  }
});

let decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
  handleDecimal();
});

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  displayClear();
});

let numbers = document.querySelectorAll('.number');
numbers.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
  });
});

let operators = document.querySelectorAll('.operator');
operators.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleNumber(num) {
  i = 0;
  if (currentNumber.length < 21) {
    currentNumber += num;
    displayCurrentNumber.textContent = currentNumber;
  }
}

function handleOperator(op) {
  operator = op;
  displayCurrentNumber.textContent = '';
  if (i != 0) {
    displayPreviousNumber.textContent = previousNumber + '' + operator;
  } else {
    previousNumber = currentNumber;
    displayPreviousNumber.textContent = previousNumber + '' + operator;
    currentNumber = '';
  }
  i++;
}

function calculate() {
  previousNumber = Number(previousNumber);
  currentNumber = Number(currentNumber);
  if (operator == '+') {
    previousNumber += currentNumber;
  } else if (operator == '-') {
    previousNumber -= currentNumber;
  } else if (operator == '/') {
    if (currentNumber <= 0) {
      previousNumber = 'error';
      displayPreviousNumber = '';
      displayCurrentNumber.textContent = previousNumber;
    }
    previousNumber /= currentNumber;
  } else if (operator == 'X') {
    previousNumber *= currentNumber;
  } else if (operator == '%') {
    previousNumber %= currentNumber;
  }
  previousNumber = previousNumber.toString();
  currentNumber = '';
  operator = '';
  currentNumber = previousNumber;
  displayCurrentNumber.textContent = currentNumber;
  displayPreviousNumber.textContent = '0';
}
function displayClear() {
  displayPreviousNumber.textContent = '0';
  displayCurrentNumber.textContent = '0';
  operator = '';
  currentNumber = '';
  previousNumber = '';
}
function handleDecimal() {
  currentNumber += '.';
  displayCurrentNumber.textContent = currentNumber;
}
