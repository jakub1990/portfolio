window.addEventListener('load', () => {
	let lat;
	let long;
	const timezone = document.querySelector('.timezone');
	const temperature = document.querySelector('.temperature');
	const icon = document.querySelector('.icon');
    const description = document.querySelector('.description');
    
  function toCelsius(k) {
		const celsius = Math.round(k - 273.15);
		return celsius;
	}
	if(navigator.geolocation) {
		   
	navigator.geolocation.getCurrentPosition(position => {
			console.log(position);
		
			lat = position.coords.latitude;
			long = position.coords.longitude;
		  const proxy = 'https://cors-anywhere.herokuapp.com/';
			const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8e96392fe15e3cdae231745bbd9ea0d3`;
		fetch(api)
			.then(response => {
			return response.json();
		})
			.then(data => {
			console.log(data);
			const temp = toCelsius(data.main.temp);
			timezone.textContent = data.name + ", " + data.sys.country;
			temperature.textContent = temp + '°C';
			description.textContent = data.weather[0].description;
	const iconNum = data.weather[0].icon;
	const endPoint = `http://openweathermap.org/img/wn/${iconNum}@2x.png`;
			icon.src = endPoint;
		})
   })
	}	
})