function plus(a, b) {
  return a + b;
};
function minus(a, b) {
  return a - b;
};
function multiply(a, b) {
  return a * b;
};
function divide(a, b) {
  return a / b;
};
function operate(operator, a, b) {
  
  const display = document.querySelector('#display');
  const result = window[operator || 'plus'](a, b);
  display.textContent = result;
};
function process() {

  const display = document.querySelector('#display');
  let first = 0;
  let second = 0;
  let operation = '';

  document.addEventListener('click', checkClickInput);
  document.addEventListener('keydown', checkKeyInput);

  function checkClickInput(event) {
    const pressed = event.target.textContent;


    if (event.target.parentNode.id === 'numpad') {
      display.textContent = (display.textContent === '0')
                            ? pressed
                            : display.textContent + pressed;

    } else if (event.target.dataset.operator === 'equals') {
      second = parseInt(display.textContent);
      operate(operation, first, second);
      
    } else if (event.target.parentNode.id === 'operators') {
      first = parseInt(display.textContent);
      operation = event.target.dataset.operator;
      display.textContent = '0';

    } else if (event.target.textContent === 'C') {
      display.textContent = '0'
      first = 0;
      second = 0;
      operation = '';
    }

  };

  function checkKeyInput(event) {
    const keyDigit = parseInt(event.key);
    const key = event.key;
    

    if (keyDigit >= 0) {
      display.textContent = (display.textContent === '0')
                            ? key
                            : display.textContent + key;
    } else if (key === '=' || key === 'Enter') {
      second = parseInt(display.textContent);
      operate(operation, first, second);
    } else if (key === 'Escape') {
      display.textContent = '0'
      first = 0;
      second = 0;
      operation = '';
    }
  };



};






process();