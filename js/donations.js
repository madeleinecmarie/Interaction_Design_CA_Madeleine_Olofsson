// document.getElementById('dropDown').selectedIndex = -1;

const submit = document.querySelector('.submitBtn');
// All error messages
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const passwordError = document.querySelector('.passwordError');

submit.onclick = function (event) {
	
	event.preventDefault();
    console.log('Event run');

	const name = document.querySelector('#user').value.trim();
    const email = document.querySelector('#mailaddress').value.trim();
	const password = document.querySelector('#passw').value.trim();

    if (testLen(name, 1)) {
		nameError.classList.add('hide');
		nameError.classList.remove('show');
	} else {
		nameError.classList.add('show');
		nameError.classList.remove('hide');
	}

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}

    if (testLen(password, 8)) {
		passwordError.classList.add('hide');
		passwordError.classList.remove('show');
	} else {
		passwordError.classList.add('show');
		passwordError.classList.remove('hide');
	}
    console.log(name);
    console.log(email);
    console.log(password);
};

function validateEmail(emailAddy) {
	const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const isEmailValid = emailExpression.test(emailAddy);
	return isEmailValid;
}

function testLen(elm, len) {
	if (elm.length > len) {
		return true;
	} else {
		return false;
	}
}