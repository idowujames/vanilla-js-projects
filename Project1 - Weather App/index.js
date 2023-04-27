const apikey = "86d833284ccb320afdad2da3c5f55dc9";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
}
)


async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}$units=metric`)

        if (response.ok) {
            const data = await response.json();
          
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const details = [
              `Feels like: ${Math.round(data.main.feels_like)}°C`,
              `Humidity: ${data.main.humidity}%`,
              `Wind Speed: ${data.wind.speed} m/s`,
            ];
          
            weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
            weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
            weatherDataEl.querySelector(".description").textContent = description;
            weatherDataEl.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");
          } else {
            throw new Error("City not found. Please try again.");
          }
        
  
    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = "";
  
        weatherDataEl.querySelector(".temprature").textContent = "";
        weatherDataEl.querySelector(".description").textContent ="An Error Happened please try again later";

        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}



// async function getWeatherData(cityValue){
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}$units=metric`)

//         if(!response.ok){
//             throw new Error("Networ response was not ok")
//         }

//         const data = await response.json();

//         const temperature = Math.round(data.main.temp);

//         const description = data.weather[0].description;

//         const icon = data.weather[0].icon;

//         const details = [
//             `Feels like: ${Math.round(data.main.feels_like)}°C`,
//             `Humidity: ${data.main.humidiy}%`,
//             `Wind Speed: ${data.wind.speed} m/s`,
//         ];

//         weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
  
//         weatherDataEl.querySelector(".temprature").textContent =`${temperature}°C`;
//         weatherDataEl.querySelector(".description").textContent =`${description}°C`;

//         weatherDataEl.querySelector(".details").innerHTML = details.map((details)=>`<div>${details}</div>`).join("");
  
//     } catch (error) {
//         weatherDataEl.querySelector(".icon").innerHTML = "";
  
//         weatherDataEl.querySelector(".temprature").textContent = "";
//         weatherDataEl.querySelector(".description").textContent ="An Error Happened please try again later";

//         weatherDataEl.querySelector(".details").innerHTML = "";
//     }
// }