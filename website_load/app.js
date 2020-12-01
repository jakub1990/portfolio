window.addEventListener('load', function(){
	const preload = document.querySelector('.preload');
	const section = document.querySelector('section');
	setTimeout(function() {
	preload.classList.add('preload-finish');
},5000);
});