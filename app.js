const form = document.getElementById('form');
const inputs = document.querySelectorAll('form input');
const email = document.getElementById('email');
let returnedInputs = [];

function runError(){
    inputs.forEach(input => input.id !== '' ? input.value = '' : '');
    returnedInputs = [];
}

function checkInputs(e){
    e.preventDefault();
    // get inputs that have ID
    inputs.forEach(input => input.id ? returnedInputs.push(input.value) : '');
    const [firstName, lastName, email, password] = returnedInputs;
    //console.log(firstName, lastName, email, password);

    returnedInputs.some(arr => arr === '') ? runError() : console.log('no issues');
}

form.addEventListener('submit', (e) => checkInputs(e));

// Clear form input data
window.addEventListener('DOMContentLoaded', () => {
    returnedInputs = [];
    inputs.forEach(input => input.id !== '' ? input.value = '' : '');
})
