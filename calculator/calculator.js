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

  document.addEventListener('click', checkInput);
  document.addEventListener('keydown', checkInput);

  function checkInput(event) {
    const pressed = event.target.textContent;
    const key = parseInt(event.key);

    console.log(key)
    console.log(typeof(key))

    if (key >= 0) {
      display.textContent = (display.textContent === '0')
                            ? key
                            : display.textContent + key;

    } else if (event.target.parentNode.id === 'numpad') {
      display.textContent = (display.textContent === '0')
                            ? pressed
                            : display.textContent + pressed;

    } else if (event.target.dataset.operator === 'equals' || key === '=') {
      second = parseInt(display.textContent);
      operate(operation, first, second);
      
    } else if (event.target.parentNode.id === 'operators') {
      first = parseInt(display.textContent);
      operation = event.target.dataset.operator;
      display.textContent = '0';

    } else if (event.target.textContent === 'C' || key === 'Backspace' || key === 'Escape') {
      display.textContent = '0'
    }

  };



};






process();

// pseudo code
/*

when a button is pressed,
check its content
if its a number, update the display with its value

when an operator is clicked,
get the data-operator attribute of the clicked button,
and store it inside a variable 
store the initial value inside a variable

when the equals operator is clicked,
store the second value inside another variable
then take the operator variable, the first value, and the second value.
and pass them through the operate() function


*/