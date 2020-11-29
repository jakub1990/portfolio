const words = ['chrząszcz brzmi w trzcinie w szczebrzeszynie i szczebrzeszyn z tego słynie'];

let wordIndex = 0;
let letterIndex = 0;
const h1 = document.querySelector('h1');
let currentWord = '';
let currentLetter = '';
let next = currentWord + 1;

(function display() {
	 currentWord = words[wordIndex]
	currentLetter = currentWord.slice(0,++letterIndex);
	h1.textContent = currentLetter;
	setTimeout(display, 400)
})();

