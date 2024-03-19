const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastname');
const emailInput = document.getElementById('emailaddress');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

const nameError = document.querySelector('.name');
const lastNameError = document.querySelector('.lastname');
const emailError = document.querySelector('.emailaddress');
const passwordError = document.querySelector('.password');

submitBtn.addEventListener('click', function(event) {
    
    const emailValue = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (nameInput.value === '') {
        nameError.style.visibility = 'visible';
    } else {
        nameError.style.visibility = 'hidden';
    }

    if (lastNameInput.value === ''){
        lastNameError.style.visibility = 'visible';
    } else {
        lastNameError.style.visibility = 'hidden';
    }

    if (!emailValue.test(emailInput.value)){
        emailError.style.visibility = 'visible';
    } else {
        emailError.style.visibility = 'hidden';
    }

    if (passwordInput.value === ''){
        passwordError.style.visibility = 'visible';
    } else {
        passwordError.style.visibility = 'hidden';
    }
});


