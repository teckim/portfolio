const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('errors');

form.addEventListener('submit', (event) => {
    let a = false;
    event.preventDefault();
    console.log(email.value,email.value.toLowerCase());
    if(email.value === email.value.toLowerCase()) {
       a = true;
    }
    if(a===false)
    {
    error.innerText = 'Please Your Email Must be in Lower Case';
    }
  } );
  