const registrationForm = document.getElementById('registration');
const username = registrationForm['username'];
console.log(username);

const errorDisplayDiv = document.getElementById('errorDisplay');





registrationForm.addEventListener('submit', validate);

/**
 * Main Validate function
 */
function validate(e) {
    e.preventDefault();

    const usernameValue = checkUserName();
    if (usernameValue === false) {
        e.returnValue = false;
        return false;
    }
}


/**
 * Validate Username
 */
function checkUserName() {
    // Regex: checks for two at least unique characters 
    // and no special characters or whitespace
    const regex = /^(?=.*(.).*\1)[A-Za-z0-9]{2,}$/;

    // test regex
    console.log(regex.test(username.value));


    if (!regex.test(username.value)) {
        console.log('gere');
        errorDisplayDiv.innerHTML = '<small>Provide two special characters</small>';
        errorDisplayDiv.style.display = 'block';

        username.focus();
        return false;
    }
    return username.value;
}