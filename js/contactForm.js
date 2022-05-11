const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('errors');

form.addEventListener('submit', (event) => {
  const isFormValid = email.value === email.value.toLowerCase();

  if (!isFormValid) {
    event.preventDefault();
    error.innerText = 'Please Your Email Must be in Lower Case';
  }
});
