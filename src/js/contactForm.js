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
