

console.log('hello');
function menu() {
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.navlinks li');

hamburger.addEventListener('click', function(){
    navLinks.classList.toggle('open');
});
}

	const texts = ['paddy spencer', 'login'];
	let count = 0;
	let index = 0;
	let currentText = '';
	let letter = '';

	(function type(){
		if (count === texts.length) {
			count = 0;
		}
		currentText = texts[count];
		letter = currentText.slice(0, ++index);
		document.querySelector('.typing').textContent = letter;
		if (letter.length === currentText.length) {
			count ++;
			index = 0;
		}
		setTimeout(type, 600);
	}())
menu()