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

let formObj = {};

function populateStorage() {
  formObj = {
    Name: form.user.value,
    Email: form.email.value,
    Message: form.message.value,
  };
  const convertObj = JSON.stringify(formObj);
  localStorage.setItem('FormData', convertObj);
}

// Populate FormFields
function getDataFromLocalStorage() {
  let data = null;
  data = localStorage.getItem('FormData');
  data = JSON.parse(data);
  form.user.value = data.Name;
  form.email.value = data.Email;
  form.message.value = data.Message;
}