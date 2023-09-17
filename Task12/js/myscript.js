let userName = document.getElementById('user').value;
let userPass = document.getElementById('pass').value;
let userMail = document.getElementById('mail').value;
let paragraph1 = document.getElementById('parag1');
let paragraph2 = document.getElementById('parag2');
let paragraph3 = document.getElementById('parag3');
let user = document.getElementById('user');
let passw = document.getElementById('pass');
let email = document.getElementById('mail');
function validateUserName() {
    if (userName.length < 4 || userName.length > 12) {
        paragraph1.innerHTML = "Please enter valid name";
    }
}
function validatePassword() {
    // passw.type='text';
    if (passw.value.indexOf('#') < 0) {
        paragraph2.innerHTML = "ERROR! Invalid password";
    }
}
function validateEmail() {
    if (email.value.indexOf('@') < 0) {
        paragraph3.innerHTML = "ERROR! Invalid Email";
    }
}
user.onblur = validateUserName;
passw.onblur = validatePassword;
email.onblur = validateEmail;
