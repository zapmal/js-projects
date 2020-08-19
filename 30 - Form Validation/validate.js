const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

function checkInputs() {

    if (isEmpty(usernameInput)) {
        showErrorFor(usernameInput, "Username cannot be blank.");
    } else {
        setSuccessFor(usernameInput);
    }

    if (isEmpty(emailInput)) {
        showErrorFor(emailInput, "Email cannot be blank.");
    } else if (!isEmail(emailInput)) {
        showErrorFor(emailInput, "You must submit a valid email.");
    } else {
        setSuccessFor(emailInput);
    }

    if (isEmpty(passwordInput)) {
        showErrorFor(passwordInput, "Password cannot be blank.");
    } else {
        setSuccessFor(passwordInput);
    }

    if (isEmpty(confirmPasswordInput)) {
        showErrorFor(confirmPasswordInput, "To confirm password cannot be blank.");
    } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        showErrorFor(confirmPasswordInput, "Password does not match.");
    } else {
        setSuccessFor(confirmPasswordInput);
    }
}

function isEmpty(input) {
    return input.value.trim() === "";
}

function showErrorFor(input, message) {
    const control = input.parentElement;
    const smallMessage = control.querySelector("small");
    control.className = "form-control error";
    smallMessage.innerText = message;
}

function setSuccessFor(input) {
	const control = input.parentElement;
	control.className = 'form-control success';
}

function isEmail(email) {
	return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email.value.trim());
}

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
});