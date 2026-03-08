async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "YOUR_API_KEY";

let url = "https://api.openweathermap.org/data/2.5/weather?q="
+ city + "&appid=" + apiKey + "&units=metric";

let response = await fetch(url);

let data = await response.json();

document.getElementById("weather").innerText =
"Temperature: " + data.main.temp + "°C";

}
