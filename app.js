const form = document.getElementById('form');
const inputs = document.querySelectorAll('form input');
const email = document.getElementById('email');
let returnedInputs = [];
const complete = document.querySelector('.form-complete');

function runError(){
    console.log('error was found');
      inputs.forEach(input => input.id !== '' && input.value === '' ? input.parentElement.classList.add('active') : input.parentElement.classList.remove('active'));
  
    returnedInputs = [];
}

function checkInputs(e){
    e.preventDefault();
    // get inputs that have ID
    inputs.forEach(input => input.id ? returnedInputs.push(input.value) : '');
    const [firstName, lastName, email, password] = returnedInputs;

    if(firstName && lastName && email && password !== ''){
       inputs.forEach(input => input.parentElement.classList.remove('active'));
       complete.classList.add('active');

        setTimeout(() => {
            complete.classList.remove('active');
            location.reload(); 
        }, 3000);

    } else{
        console.log('problem found');
        runError();
    }
}

form.addEventListener('submit', (e) => checkInputs(e));

// Clear form input data
window.addEventListener('DOMContentLoaded', () => {
    returnedInputs = [];
    inputs.forEach(input => input.id !== '' ? input.value = '' : '');
})
