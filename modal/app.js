const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
setTimeout(function(){
	modal.classList.add('active')
}, 5000)

closeBtn.addEventListener('click',function(){
	modal.classList.add('no-active');
})