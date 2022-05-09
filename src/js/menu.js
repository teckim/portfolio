const button = document.querySelector('.toolbar__menu-button');
const closingButton = document.querySelector(".toolbar__menu-close-button")
const linksList = document.querySelector('.toolbar__links-list');

button.addEventListener('click', open);
button.addEventListener("click", close);

function open () {
  linksList.style.display = 'flex';
}

function close () {
  linksList.style.display = 'none';
}
