const app = () => {
	const song = document.querySelector('.song');
	const player = document.querySelector('.play');
	const outline = document.querySelector('.moving-outline circle');
	const video = document.querySelector('.vid-container video');

	
	//Sounds
	const sounds = document.querySelectorAll('.sound-picker button');
	
	
	//Time Display
	const timeDisplay = document.querySelector('.time-display');
	const outlineLength = outline.getTotalLength();
	
	
	
	//Duration
	const duration = document.querySelectorAll('.time-select button');
    let fakeDurationTime = 600;
	
		duration.forEach(option => {
		option.addEventListener('click', function(){
			fakeDurationTime = this.getAttribute('data-time');
			timeDisplay.textContent = `${Math.floor(fakeDurationTime / 60)}:${Math.floor(fakeDurationTime % 60)}`;
		});
	});
	
	outline.style.strokeDasharray = outlineLength;
	outline.style.strokeDashoffset = outlineLength;
	
	

	sounds.forEach(sound => {
		sound.addEventListener('click', function(){
			song.src = this.getAttribute('data-sound');
			video.src = this.getAttribute('data-video');
			checkPlaying(song);
		});
	});
	
	
	
	
	player.addEventListener('click', () => {
		checkPlaying(song);
	})
	
	// Function that checking if music and video is playing or not
	const checkPlaying = s => {
		if(s.paused) {
			s.play();
			video.play();
			player.src = 'svg/pause.svg';
		} else {
			s.pause();
			video.pause();
			player.src = 'svg/play.svg';
		}
	}
	
	song.ontimeupdate = () => {
		const currentTime = song.currentTime;
		const elapsed = fakeDurationTime - currentTime;
		const seconds = Math.floor(elapsed % 60);
		const minutes = Math.floor(elapsed / 60);
		
		
		//Animate the circle
		let progress = outlineLength - (currentTime / fakeDurationTime) * outlineLength;
		outline.style.strokeDashoffset = progress;
		
	    if(currentTime >= fakeDurationTime) {
			song.pause();
			song.currentTime = 0;
			player.src = 'svg/play.svg';
			video.pause();
		}
		
		timeDisplay.textContent = `${minutes}:${seconds}`;
	
	}
	
};

app();