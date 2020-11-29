const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('nav a');
																		
sections.forEach(section => {
section.addEventListener('mouseenter', function(){
		const id = this.getAttribute('id');
	const linkActive = document.querySelector(` a[href="#${id}"]`);
	console.log(linkActive);
		links.forEach(link => {
			link.classList.remove('active');
	linkActive.classList.add('active');
		});
	});
})

