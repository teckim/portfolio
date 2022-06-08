const menubutton = document.querySelector('.toolbar__menu-button');
const closeButton = document.querySelector('.toolbar__close-button');
const listContainer = document.querySelector('.toolbar__links-list-container');
const links = document.querySelectorAll('.toolbar__links-list-item');

function open() {
  listContainer.style.display = 'flex';
}

function close() {
  listContainer.style.display = 'none';
}

menubutton.addEventListener('click', open);
closeButton.addEventListener('click', close);
links.forEach((link) => {
  if (window.innerWidth >= 768) return;

  link.addEventListener('click', close);
});
