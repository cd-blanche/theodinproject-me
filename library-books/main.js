function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read.' : 'not read yet.'}`);
  }
}

Book.prototype.updateReadStatus = function () {
  this.read = (this.read) ? false : true;
} 

function toggleReadStatus(index) {
  library[index].updateReadStatus();
  printBookToLibrary();
}

let library = [];
const form = document.querySelector('form');
const table = document.querySelector('tbody');
const openModal = document.querySelector('#new-book');
const pushBook = document.querySelector('#push-book');
const modal = document.querySelector('#modal');

openModal.addEventListener('click', () => {
  modal.style.visibility = 'visible';
});

function removeBook(index) {
  library = library.filter((book, currentIndex) => currentIndex != index);
  printBookToLibrary();
}

function printBookToLibrary() {
  table.innerHTML = '';
  library.forEach((book, index) => {
    table.innerHTML += `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read ? 'Read' : 'Not read'}</td>
        <td><button onclick="removeBook('${index}')">X</button></td>
        <td><button onclick="toggleReadStatus(${index})">Update</button></td>
      </tr>
    `
  });
}

function addBookToLibrary(e) {
  e.preventDefault();
  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  const bookPages = document.querySelector('#pages').value;
  const bookRead = document.querySelector('#read-unread').checked;
  if (!bookTitle) return null;
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  library.push(newBook);
  printBookToLibrary();
  form.reset();
  modal.style.visibility = 'hidden';
}

pushBook.addEventListener('click', addBookToLibrary);

printBookToLibrary();