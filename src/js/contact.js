const firstName = document.getElementById('name');
const surname = document.getElementById('surname');
const mail = document.getElementById('mail');
const message = document.getElementById('message');
const contactFormBtn = document.querySelector('.contact__form-upperbody-btn');
const formError = document.querySelectorAll(
	'.contact__form-upperbody-box-error'
);
const formBox = document.querySelectorAll('.contact__form-upperbody-box');

const showError = (input, msg) => {
	const error = input.nextElementSibling;
	error.classList.add('active');
	error.textContent = msg;
};

const clearError = (err) => {
	err.classList.remove('active');
};

const reset = (input) => {
	input.forEach((el) => {
		el.value = '';
	});
};

const mailValidation = (input) => {
	const reg =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;

	if (reg.test(input.value)) {
		clearError(mail.nextElementSibling);
	} else {
		showError(mail, 'Wpisz prawidłowy adres e-mail');
	}
};

const successMessage = () => {
	alert('Wiadomość wysłana pomyślnie 😎');
};

const checkErrors = () => {
	let errorCount = 0;
	formError.forEach((errorParagraph) => {
		if (errorParagraph.classList.contains('active')) {
			errorCount++;
		}
	});
	if (errorCount === 0) {
		successMessage();
		reset([firstName, surname, mail, message]);
	}
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el.nextElementSibling);
		}
	});
};

contactFormBtn.addEventListener('click', (e) => {
	e.preventDefault();
	checkForm([firstName, surname, mail, message]);
	mailValidation(mail);
	checkErrors();
});
