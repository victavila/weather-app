import getData from "./weather";
import {
  form,
  searchInput,
  unitBtn,
  toggleUnits,
  setCityInfo,
  setImageSource,
} from "./UI";

let city = "Dallas";
let units = "F";

const loadInfo = (cityName, unit) => {
  getData(cityName, unit)
    .then((response) => {
      setCityInfo(response, units);
      setImageSource(response.icon);
    })
    .catch((response) => {
      console.log("hi");
    });
};

loadInfo(city, "imperial");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  city = searchInput.value;
  if (units === "F") {
    loadInfo(city, "imperial");
  } else if (units === "C") {
    loadInfo(city, "metric");
  }
});

unitBtn.addEventListener("click", () => {
  if (units === "F") {
    units = "C";
    loadInfo(city, "metric");
    toggleUnits();
  } else {
    units = "F";
    loadInfo(city, "imperial");
    toggleUnits();
  }
});
