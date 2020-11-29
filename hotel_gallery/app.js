function changeImg() {
	
    const smallPhotos = document.querySelectorAll('.photo-small img');
    const bigPhoto = document.querySelector('.big img');
        
    smallPhotos.forEach(photo => {
        photo.addEventListener('click', function() {
            bigPhoto.src = this.src;
            smallPhotos.forEach(photo => {
                photo.classList.remove('active')
            });
                this.classList.add('active');
      })
    })
    }
    
    changeImg();