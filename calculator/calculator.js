function minus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a -b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(operator, a, b) {

  const result = operator(a, b);
  const display = document.querySelector('#display');

  display.textContent = result;
}
function process() {

  const display = document.querySelector('#display');
  let first = 0;
  let second = 0;
  let operation = '';

  document.addEventListener('click', checkInput);

  function checkInput(event) {
    const pressed = event.target.textContent;
    if (event.target.parentNode.id === 'numpad') {
      display.textContent += pressed;
      console.log(display.textContent)      

    } else if (event.target.dataset.operator === 'equals') {
      console.log(first);
      console.log(second);
      console.log(operation);
      operate(operation, first, second);
      
    } else if (event.target.parentNode.id === 'operators') {
      first = parseInt(display.textContent);
      console.log(first);

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