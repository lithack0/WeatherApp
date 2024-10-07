const api="1557f47a4421361b8fe11b36ce94f6e8";
const url="https://api.openweathermap.org/data/2.5/weather?q=";
const search = document.querySelector(".search input");
const icon = document.querySelector(".weather_icon");
const btn = document.querySelector(".search button");
async function RequestWeather(city) { 
	const res = await fetch(url + city + `&appid=${api}` + `&units=metric`);
	var data = await res.json();
	console.log(data);
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = data.main.temp + " °C";
	document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
	document.querySelector(".wind").innerHTML = data.main.wind + " Km/h";
	if(data.weather[0].main == "Clouds"){
		icon.src = "images/clouds.png";
	}
	else if(data.weather[0].main == "Clear"){
		icon.src = "images/clear.png";
	}
	else if(data.weather[0].main == "Rain"){
		icon.src = "images/rain.png";
	}
	else if(data.weather[0].main == "Drizzle"){
		icon.src = "images/drizzle.png";
	}
	else if(data.weather[0].main == "Mist"){
		icon.src = "images/mist.png";
	}
}




btn.addEventListener("click", ()=>{
	RequestWeather(search.value);
})
