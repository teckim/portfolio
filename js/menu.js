const button = document.querySelector('.toolbar__menu-button');
const linksList = document.querySelector('.toolbar__links-list');

button.addEventListener('click', open);

function open () {
  linksList.style.display = 'flex'
}
