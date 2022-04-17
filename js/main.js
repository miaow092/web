//popup창

const popup = document.querySelector('#figure .inner .popup');
const btnClose = popup.querySelector('.close');
const isCookie = document.cookie.indexOf('today=cookie');

if (isCookie == -1) {
	popup.style.display = 'block';
	//function lineDrawing(popup);
} else {
	popup.style.display = 'none';
}

btnClose.addEventListener('click', (e) => {
	e.preventDefault();
	let isChecked = popup.querySelector('input[type=checkbox]').checked;
	if (isChecked) setCookie('today', 'cookie', 1);

	popup.style.display = 'none';
});

function setCookie(name, value, due) {
	const today = new Date();
	const day = today.getDate();
	today.setDate(day + due);
	const dueDate = today.toGMTString();
	document.cookie = `${name}=${value}; path=/; expirse=${dueDate};`;
}
