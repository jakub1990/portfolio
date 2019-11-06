const btn = document.querySelector('button');
const mainImage = document.querySelector('.displayed');
const overlay = document.querySelector('.overlay');
const photos = document.querySelectorAll('.thumb-bar img')

btn.addEventListener('click', function() {
  if(btn.textContent === 'Show Overlay') {
    overlay.style.display = 'block';
    btn.textContent = 'Hide Overlay';
  } else {
    overlay.style.display = 'none';
    btn.textContent = 'Show Overlay';
  }
});


for(let i = 0; i < photos.length; i++) {
  photos[i].addEventListener('click', function(e) {
    let chosenImg = e.target.src;
    mainImage.src = chosenImg;
  })
}