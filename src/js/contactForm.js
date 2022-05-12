const form = document.getElementById('form');
const email = document.getElementById('email');
const errors = document.getElementById('errors');

form.addEventListener('submit', (event) => {
  const isFormValid = email.value === email.value.toLowerCase();

  errors.classList.remove('contact__form-errors--visible');

  if (!isFormValid) {
    event.preventDefault();

    errors.classList.add('contact__form-errors--visible');
    errors.innerText = 'Email must be in lowercase';
  }
});

let formData = {};

function populateStorage() {
  formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem('FORM_DATA', JSON.stringify(formData));
}

function getDataFromLocalStorage() {
  let data = localStorage.getItem('FORM_DATA');

  if (data) {
    data = JSON.parse(data);
    form.name.value = data.name;
    form.email.value = data.email;
    form.message.value = data.message;
  }
}

window.onload = () => {
  form.name.addEventListener('input', populateStorage);
  form.email.addEventListener('input', populateStorage);
  form.message.addEventListener('input', populateStorage);

  getDataFromLocalStorage();
};