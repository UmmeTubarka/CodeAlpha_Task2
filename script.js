let currentInput = '';
let currentOperation = '';
let result = 0;

function appendValue(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function setOperation(operation) {
  if (currentInput === '') return;
  if (result !== 0) {
    calculateResult();
  }
  currentOperation = operation;
  result = parseFloat(currentInput);
  currentInput = '';
}

function calculateResult() {
  if (currentInput === '' || currentOperation === '') return;
  switch (currentOperation) {
    case '+':
      result += parseFloat(currentInput);
      break;
    case '-':
      result -= parseFloat(currentInput);
      break;
    case '*':
      result *= parseFloat(currentInput);
      break;
    case '/':
      if (parseFloat(currentInput) === 0) {
        alert('Cannot divide by zero!');
        clearDisplay();
        return;
      }
      result /= parseFloat(currentInput);
      break;
  }
  document.getElementById('display').value = result;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  result = 0;
  currentOperation = '';
  document.getElementById('display').value = '';
}
