const listButton = document.querySelector('.list-button');
const contactsButton = document.querySelector('.add-contacts');
const addNewButton = document.querySelector('.add-new');
const homeButton = document.querySelector('.home');

const contact = document.querySelector('.contact');
const list = document.querySelector('.list');
const form = document.querySelector('.book-form');

listButton.addEventListener('click', (e) => {
  e.preventDefault();
  contact.classList.add('d-none');
  form.classList.add('d-none');
  list.classList.remove('d-none');
  listButton.classList.add('active');
  addNewButton.classList.remove('active');
  contactsButton.classList.remove('active');
});

contactsButton.addEventListener('click', (e) => {
  e.preventDefault();
  list.classList.add('d-none');
  form.classList.add('d-none');
  contact.classList.remove('d-none');
  contactsButton.classList.toggle('active');
  addNewButton.classList.remove('active');
  listButton.classList.remove('active');
});

addNewButton.addEventListener('click', (e) => {
  e.preventDefault();
  contact.classList.add('d-none');
  list.classList.add('d-none');
  form.classList.remove('d-none');
  addNewButton.classList.add('active');
  listButton.classList.remove('active');
  contactsButton.classList.remove('active');
});

homeButton.addEventListener('click', (e) => {
  e.preventDefault();
  contact.classList.remove('d-none');
  list.classList.remove('d-none');
  form.classList.remove('d-none');
  addNewButton.classList.remove('active');
  listButton.classList.remove('active');
  contactsButton.classList.remove('active');
});

// Date
/* eslint-disable no-undef */
const dateField = document.querySelector('.date');
const getTime = () => {
  const { DateTime } = luxon;
  const time = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  dateField.innerHTML = time;
};

getTime();