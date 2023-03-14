const container = document.querySelector('#container');

for (let i = 0; i < (16 * 16); i++) {
  const newSquare = document.createElement('div');
  newSquare.classList.add('square');

  container.appendChild(newSquare);
};