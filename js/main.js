const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.header__menu');
if(menuBurger) {
	menuBurger.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
		menuBurger.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}