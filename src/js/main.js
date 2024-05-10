// const { name } = require('browser-sync');

const burgerBtn = document.querySelector('.nav__burger');
const mobileNav = document.querySelector('.nav__items-mobile');
const mobileNavItems = document.querySelectorAll('.nav__item-mobile');
const footerYear = document.querySelector('.footer__year');

const handleMobileNav = () => {
	mobileNav.classList.toggle('active');
	if (mobileNav.classList.contains('active')) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'visible';
	}
};

const handleYear = () => {
	const date = new Date().getFullYear();
	footerYear.textContent = date;
};

[burgerBtn, ...mobileNavItems].forEach((item) => {
	item.addEventListener('click', handleMobileNav);
});

addEventListener('DOMContentLoaded', handleYear());
