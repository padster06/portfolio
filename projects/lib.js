
class Block{
	constructor(id, url, name, description){
		this.name;
		this.url = url;
		this.element = document.getElementById(id);

		this.element.addEventListener('click', function(){location.href = url;});
	}

}

var background = 'w';
var blocks = [];

function init() {
	
	brak = document.getElementById('brak');
	blocks=[
		new Block('clock', 'clock/', 'clock'),
		new Block('xtabels', 'timestables/', 'times tabels'),
		new Block('skyrocket', 'skyrocket/', 'sky rocket'),
		new Block('codeBreaker', 'ceasercipher/', 'code breaker')
	];
	
}

menu()
function menu(){
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.navlinks li');

hamburger.addEventListener('click', function(){
    navLinks.classList.toggle('open');
});
}


const texts = ['paddy spencer', 'projects'];
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
