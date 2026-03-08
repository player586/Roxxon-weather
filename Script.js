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
const apiKey = 'YOUR_API_KEY';
const city = 'Pittsburgh'; // or let the user enter it
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // check what you get
    document.getElementById('temperature').textContent = data.main.temp + '°F';
  })
  .catch(error => console.error('Error fetching weather:', error));
