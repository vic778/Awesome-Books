let books = document.querySelectorAll('.books');
let title = document.querySelectorAll('.title');
let author = document.querySelectorAll('.author');
let addButton = document.querySelectorAll('.add-button');

class Book {
   constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
