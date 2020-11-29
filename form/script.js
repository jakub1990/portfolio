const inputs = document.querySelectorAll('input');
const form = document.querySelector('.container');
const section = document.querySelector('section');
const h1 = document.querySelector('.heading');
const after = document.querySelector('form');
inputs.forEach(input => {
	input.addEventListener('click', function(){
		const prev = input.previousElementSibling;
		const next = input.nextElementSibling;
		
if(input.classList.contains('first')) {
			section.classList.toggle('blue')
		} else if(input.classList.contains('sec'))  {
			section.classList.toggle('green')
		} else if(input.classList.contains('third')) {
			after.style.display = 'none';
			section.style.backgroundColor = 'orange';
			h1.style.display = 'block';
		} else {
		section.style.backgroundColor = 'orange';
		}
		input.classList.add('invisible');
		next.classList.add('top');															
	});
})

