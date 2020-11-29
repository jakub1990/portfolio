const dog = document.querySelector('img')
const btn = document.querySelector('button')
btn.addEventListener('click', () => { 
fetch('https://dog.ceo/api/breed/beagle/images/random')
.then(res=> {
  return res.json()
})
.then(pic => {
  dog.src = pic.message;
  })
})