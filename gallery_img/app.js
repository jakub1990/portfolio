const carousel = document.querySelector('.slider');
const img = document.querySelectorAll('img');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let counter = 1;
const size = img[0].clientWidth;
console.log(size);
carousel.style.transform = 'translateX('+(-size * counter) + 'px)'

nextBtn.addEventListener('click',function(){
	if(counter >= img.length -1) return;
	carousel.style.transition = 'transform 1s ease-in-out';
	counter++;
	carousel.style.transform = 'translateX('+(-size * counter) + 'px)'
})

prevBtn.addEventListener('click',function(){
	if(counter <= 0) return;
	carousel.style.transition = 'transform 1s ease-in-out';
	counter--;
	carousel.style.transform = 'translateX('+(-size * counter) + 'px)'
})

carousel.addEventListener('transitionend', function(){
	if(img[counter].id === "clone-last") {
		carousel.style.transition = 'none';
		counter = img.length - 2;
		carousel.style.transform = 'translateX('+(-size * counter) + 'px)'
	}
})

carousel.addEventListener('transitionend', function(){
	if(img[counter].id === "clone-first") {
		carousel.style.transition = 'none';
		counter = img.length - 5;
		carousel.style.transform = 'translateX('+(-size * counter) + 'px)'
	}
})