function scroll() {
    const section2 = document.querySelector('.m');
    console.log(this.scrollY > this.innerHeight);
    if(this.scrollY > this.innerHeight / 2) {
      section2.classList.add('active');
    } else {
      section2.classList.remove('active');
    }
  }
  
  window.addEventListener('scroll', scroll);