const form = document.getElementById('form');
const inputs = document.querySelectorAll('form input');
const email = document.getElementById('email');

// const form = document.getElementById('form');

function checkInputs(e){
    e.preventDefault();
    let returnedInputs = '';
    let inputID = inputs.forEach(input => {
        if(input.id !== ''){
            
            returnedInputs = input;
        }

        console.log(returnedInputs);
    })

    setTimeout(() => {
        console.log(inputID);
    }, 2000); 
}

form.addEventListener('submit', (e) => checkInputs(e));