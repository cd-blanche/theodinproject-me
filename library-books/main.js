function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read.' : 'not read yet.'}`
  }
}


const TheBook = new Book('The Book', 'The Author', '333', false);
console.log(TheBook.info())

let library = [];