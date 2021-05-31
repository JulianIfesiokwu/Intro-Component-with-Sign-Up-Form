const submitBtn = document.querySelector('.cta');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const exclamation = document.querySelectorAll('exclamation'); //Remember this is for all exclamation marks
const errorMessage = document.querySelectorAll('error-message');

// Functions
function validateAllFields(e) {
    // remove the default behaviour
    e.preventDefault();

    // validate firstname field
    validatefield(firstName);
    // validate lastname field
    validatefield(lastName)
    // validate password field
    validatefield(password)
    // validate Email
    validateEmail(email);
}

// Checks firstname,lastName and password fields that they have at least 2 letters
function validatefield(field) {
    if (field.value.length <= 1) {
        highlightField(field);
    } 
}

// validate email field
function validateEmail(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
    {
        // alert('Thank you! You will hear from us soon');
    }
     else {
         highlightField(email)
     }
}

// Highlight field not properly completed
function highlightField(field) {
    field.nextElementSibling.style.display='inline-block';
    field.parentElement.nextElementSibling.style.visibility='visible';
    field.parentElement.classList.add('error');
}


// Event listeners
submitBtn.addEventListener('click', validateAllFields);



