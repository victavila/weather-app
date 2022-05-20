const form = document.querySelector(".form");
const searchInput = document.getElementById("search");

const unitBtn = document.querySelector(".units");

const weatherIcon = document.querySelector(".weather-icon");

const locationName = document.querySelector(".city");
const description = document.querySelector(".description");
const temperature = document.querySelector(".temperature");

const feelsLike = document.querySelector(".feels");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");
const speed = document.querySelector(".speed");

const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".fahrenheit");

const setCityInfo = (obj, unit) => {
  locationName.textContent = obj.cityName;
  description.textContent = obj.description;
  temperature.textContent = `${Math.round(obj.temperature)}°${unit}`;

  feelsLike.textContent = `${Math.round(obj.feelsLike)}°${unit}`;
  humidity.textContent = `${obj.humidity} %`;
  pressure.textContent = `${obj.pressure} hPa`;
  if (unit === "F") {
    speed.textContent = `${Math.round(obj.speed)} mph ${obj.direction}`;
  } else if (unit === "C") {
    speed.textContent = `${Math.round(obj.speed)} m/s ${obj.direction}`;
  }
};

const setImageSource = (icon) => {
  weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

const toggleUnits = () => {
  celsius.classList.toggle("bold");
  fahrenheit.classList.toggle("bold");
};

export { form, searchInput, unitBtn, toggleUnits, setCityInfo, setImageSource };
