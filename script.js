const apiKey = "2e4407dd46b95736440f235ae4677103";

const cityInput =
document.getElementById("cityInput");

const searchBtn =
document.getElementById("searchBtn");

const weatherCard =
document.getElementById("weatherCard");

async function getWeather(city){

try{

weatherCard.innerHTML =
"<p>Loading...</p>";

const response =
await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
);

if(!response.ok){

throw new Error(
"City not found"
);

}

const data =
await response.json();

displayWeather(data);

}
catch(error){

weatherCard.innerHTML =

`<p class="error">
${error.message}
</p>`;

}

}

function displayWeather(data){

const city =
data.name;

const country =
data.sys.country;

const temp =
data.main.temp;

const humidity =
data.main.humidity;

const wind =
data.wind.speed;

const description =
data.weather[0].description;

weatherCard.innerHTML =

`
<h2>${city}, ${country}</h2>

<p class="metric">
🌡 Temperature:
${temp} °C
</p>

<p class="metric">
💧 Humidity:
${humidity}%
</p>

<p class="metric">
💨 Wind Speed:
${wind} m/s
</p>

<p class="metric">
☁ Condition:
${description}
</p>
`;

}

searchBtn.addEventListener(
"click",
function(){

const city =
cityInput.value.trim();

if(city){
getWeather(city);
}

}
);

cityInput.addEventListener(
"keypress",
function(e){

if(e.key === "Enter"){

const city =
cityInput.value.trim();

if(city){
getWeather(city);
}

}

}
);
