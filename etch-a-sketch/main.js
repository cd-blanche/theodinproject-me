const container = document.querySelector('#container');

for (let i = 0; i < (16 * 16); i++) {
  const newSquare = document.createElement('div');
  newSquare.classList.add('square');

  container.appendChild(newSquare);
};

let addTrail = (e) => {
  e.target.classList.add('square-trail');
};

document.querySelectorAll('.square').forEach(square => {

  square.addEventListener('mouseenter', addTrail);

});



