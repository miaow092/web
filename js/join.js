const form = document.querySelector('.join .content_sub #join');
const submitBtn = document.querySelector('[type=submit]');

submitBtn.addEventListener('click', (e) => {
	if (!isText('name', 2)) e.preventDefault();
	if (!isText('id', 5)) e.preventDefault();
	if (!isEmail('email', 5)) e.preventDefault();
	if (!isPassword('password', 'repassword', 8)) e.preventDefault();
});

function isText(name, len) {
	const input = form.querySelector(`input[name=${name}]`);
	const text = input.value.trim();

	if (text.length > len) {
		const errMessages = input.closest('td').querySelectorAll('p');
		if (errMessages.length > 0) input.closest('td').querySelector('p').remove();

		return true;
	} else {
		const errMessages = input.closest('td').querySelectorAll('p');
		if (errMessages.length > 0) input.closest('td').querySelector('p').remove();

		const errMessage = document.createElement('p');
		errMessage.append(`Please enter at least ${len} characters of text`);
		input.closest('td').append(errMessage);

		return false;
	}
}
function isPassword(name1, name2, len) {
	const password = form.querySelector(`[name=${name1}]`);
	const repassword = form.querySelector(`[name=${name2}]`);
	const password_val = password.value;
	const repassword_val = repassword.value;

	const num = /[0-9]/;
	const eng = /[a-zA-Z]/;
	const spc = /[!@#$%^&*()_+\[\]<>]/;

	//두 개의 비번이 같고, 비번에 숫자, 문자, 특수문자를 모두 포함하고 len개이상의 글자수라면
	if (
		password_val === repassword_val &&
		num.test(password_val) &&
		eng.test(password_val) &&
		spc.test(password_val) &&
		password_val.length > len
	) {
		const errMessages = password.closest('td').querySelectorAll('p');
		if (errMessages.length > 0)
			password.closest('td').querySelector('p').remove();

		return true;
	} else {
		const errMessages = password.closest('td').querySelectorAll('p');
		if (errMessages.length > 0)
			password.closest('td').querySelector('p').remove();

		const errMessage = document.createElement('p');
		errMessage.append(
			`Please enter a password of at least ${len} characters including all letters, numbers, and special characters`
		);
		password.closest('td').append(errMessage);

		return false;
	}
}
function isEmail(name, len) {
	const input = form.querySelector(`input[name=${name}]`);
	const text = input.value;

	if (text.length > len && /@/.test(text)) {
		const errMessages = input.closest('td').querySelectorAll('p');
		if (errMessages.lenght > 0) input.closest('td').querySelector('p').remove();

		return true;
	} else {
		const errMessages = input.closest('td').querySelectorAll('p');
		if (errMessages.lenght > 0) input.closest('td').querySelector('p').remove();

		const errMessage = document.createElement('p');
		errMessage.append(
			`Please enter at least ${len} characters of your full email address, including @`
		);
		input.closest('td').append(errMessage);

		return false;
	}
}
