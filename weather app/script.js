const apiUrl = ``;
let cityName = document.querySelector(".city");
let temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
const image = document.querySelector(".weather-icon");
      // const cityName = document.querySelector(".city");
      // const temperature = document.querySelector(".temp");
      // const humidity = document.querySelector(".humidity");
      // const windSpeed = document.querySelector(".wind");

// async function chechWeather() {
//   const response = await fetch(apiUrl);
//   let data = await response.json();
//   console.log(data);
//   cityName.innerHTML = data.name;
//   temperature.innerHTML = data.main.temp;
//   humidity.innerHTML = data.main.humidity + "%";
//   windSpeed.innerHTML = data.wind.speed + " km/h";
// }

const searchWeatherBtn = document.querySelector("#search-btn");
searchWeatherBtn.addEventListener("click", () => {
  const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
  const inputCity = document.querySelector("#city-name").value;
  if (inputCity === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputCity}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        image.src = "images/404.png";
        cityName.innerHTML = "Error";
        temperature.innerHTML = "";
        humidity.innerHTML = "";
        windSpeed.innerHTML = "";
      }

      
      console.log(json);
      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;
        case "Rain":
          image.src = "images/rain.png";
          break;
        case "Snow":
          image.src = "images/snow.png";
          break;
        case "Clouds":
          image.src = "images/clouds.png";
          break;
        case "Drizzle":
          image.src = "images/drizzle.png";
          break;
        case "Haze":
          image.src = "images/mist.png";
          break;
        default:
          image.src = "";
      }

      cityName.innerHTML = json.name;
      temperature.innerHTML = `${parseInt(json.main.temp)}&deg;`;
      humidity.innerHTML = `${json.main.humidity}%`;
      windSpeed.innerHTML = `${parseInt(json.wind.speed)}km/h`;
    });
});
