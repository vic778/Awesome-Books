const books = [];
let retrievedBooks;
if (localStorage.getItem('books') === null) {
  retrievedBooks = localStorage.setItem('books', JSON.stringify(books));
} else {
  retrievedBooks = JSON.parse(localStorage.getItem('books'));
}
const displayBooks = () => {
  retrievedBooks = JSON.parse(localStorage.getItem('books'));
  retrievedBooks.forEach((book) => {
    const parentDiv = document.querySelector('.books');
    const div = document.createElement('div');
    div.classList.add('book');
    div.innerHTML = `
    <p>${book.title}</p>  
    <p>${book.author}</p>  
    <button class="remove">remove</button>
    <hr>
  `;
    parentDiv.appendChild(div);
  });
};
const addButton = document.querySelector('#add-button');
const addBook = (e) => {
  retrievedBooks = JSON.parse(localStorage.getItem('books'));
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = {
    title,
    author,
  };
  book.id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  retrievedBooks.push(book);
  localStorage.setItem('books', JSON.stringify(retrievedBooks));
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  const parentDiv = document.querySelector('.books');
  const div = document.createElement('div');
  div.classList.add('book');
  div.dataset.id = book.id;
  div.innerHTML = `
    <h5>${book.title}</h5>  
    <p>${book.author}</p>  
    <button class="remove">remove</button>
    <hr>
  `;
  parentDiv.appendChild(div);
};
const removeBook = (elem) => {
  if (elem.classList.contains('remove')) {
    elem.parentElement.remove();
  }
};
document.addEventListener('DOMContentLoaded', displayBooks);
addButton.addEventListener('click', addBook);
document.querySelector('.books').addEventListener('click', (e) => {
  removeBook(e.target);
  const newBooks = JSON.parse(localStorage.getItem('books'));
  newBooks.forEach((book, index) => {
    if (book.author === e.target.previousElementSibling.textContent) {
      newBooks.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(newBooks));
});