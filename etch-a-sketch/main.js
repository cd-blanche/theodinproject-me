window.onload = function() {
  createGrid();
};

const updateButton = document.querySelector('#change');
const resetButton = document.querySelector('#reset');

updateButton.addEventListener('click', updateGrid);
resetButton.addEventListener('click', resetGrid);

function updateGrid() {
  // select current container
  const container = document.querySelector('#container');
  // prompt for user input
  gridSize = parseInt(prompt('How big would you like the container to be? (Note: max 50)'));
  // Limits grid size to 100
  if (gridSize > 50) gridSize = 50;
  // remove current container
  container.remove();
  // creates new container
  const newContainer = document.createElement('div');
  newContainer.id = 'container';
  resetButton.before(newContainer);
  // creates new grid
  createGrid(gridSize);
};

// Creates grid
function createGrid(size) {
  const container = document.querySelector('#container');
  for (let i = 0; i < ((size || 16) ** 2); i++) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    container.appendChild(newSquare);
  };
  // Sets proper grid size
  container.style.setProperty('--grid-size', size || 16);
  // Adds trail
  addTrail()
};

function addTrail() {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.onmousedown = (e) => {
      e.target.classList.add('square-trail');
        onmousemove = (event) => {
        if (event.target.parentElement.id === 'container') {
          event.target.classList.add('square-trail');
        }
      };
      onmouseup = () => {
        onmousemove = null;
      };
    };
  });
}

function resetGrid() {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.classList.remove('square-trail');
  });
}