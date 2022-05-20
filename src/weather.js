const d2d = require("degrees-to-direction");

async function getData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f60c8cc6b4b9aa9b4a6865840308e3b&units=${units}`,
      { mode: "cors" }
    );
    const data = await response.json();
    const cityName = await data.name;
    const temperature = await data.main.temp;
    const feelsLike = await data.main.feels_like;
    const humidity = await data.main.humidity;
    const pressure = await data.main.pressure;
    const speed = await data.wind.speed;
    const direction = await d2d(data.wind.deg);
    const description = await data.weather[0].description;
    const icon = await data.weather[0].icon;
    return {
      cityName,
      temperature,
      feelsLike,
      humidity,
      pressure,
      speed,
      direction,
      description,
      icon,
    };
  } catch (err) {
    return err;
  }
}

export default getData;
