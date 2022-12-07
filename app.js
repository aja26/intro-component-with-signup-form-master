const form = document.getElementById('form');
const inputs = document.querySelectorAll('form input');
const email = document.getElementById('email');
let returnedInputs = [];

// const form = document.getElementById('form');

function checkInputs(e){
    e.preventDefault();
    // get inputs that have ID
    inputs.forEach(input => input.id !== '' ? returnedInputs.push(input.value) : console.log('nothing'));

    // if returned inputs has any empty strings fire error function  
    console.log(returnedInputs);
}

form.addEventListener('submit', (e) => checkInputs(e));

// Clear form input data
window.addEventListener('DOMContentLoaded', () => {
    returnedInputs = [];
    inputs.forEach(input => input.id !== '' ? input.value = '' : '');
})
