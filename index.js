let books = document.querySelector('.books');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let addButton = document.querySelector('.add-button');

class BookStore {
  constructor(bookArray) {
    this.bookArray = [];
  }

  addBook() {
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('h4');
    const removeBtn = document.createElement('button');

    books.append(bookContainer);
    bookContainer.classList.add('book-container');
    bookContainer.append(bookTitle, bookAuthor, removeBtn);
    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    removeBtn.classList.add('remove-btn');

  }
}
class Book {
   constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let newBook = new BookStore();

newBook.addBook();