/* eslint-disable  max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Storage {
  static addBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'));
    } else {
      books = [];
    }
    return books;
  }

  static removeBook(author) {
    const newBooks = Storage.getBooks();
    newBooks.forEach((book, index) => {
      if (book.author === author) {
        newBooks.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(newBooks));
  }
}

class Display {
  static displayBooks() {
    const retrievedBooks = Storage.getBooks();
    retrievedBooks.forEach((book) => {
      Display.addBookToDisplay(book);
    });
  }

  static addBookToDisplay(book) {
    const parentDiv = document.querySelector('.books');
    const div = document.createElement('div');
    div.classList.add('book');
    div.innerHTML = `
      <h5>${book.title}</h5>  
      <p>${book.author}</p>  
      <button class="remove">remove</button>
      <hr>
    `;
    parentDiv.appendChild(div);
  }

  static removeBookFromDisplay(elem) {
    if (elem.classList.contains('remove')) {
      elem.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('.book-form');
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }
}

document.addEventListener('DOMContentLoaded', Display.displayBooks);
const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const books = Storage.getBooks();

  const bookExists = books.find((book) => book.title === title);

  if (bookExists) {
    Display.showAlert('That book already exists', 'danger');
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  } else {
    const book = new Book(title, author);
    Display.addBookToDisplay(book);
    Storage.addBook(book);
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
});
document.querySelector('.books').addEventListener('click', (e) => {
  Display.removeBookFromDisplay(e.target);
  Storage.removeBook(e.target.previousElementSibling.textContent);
});