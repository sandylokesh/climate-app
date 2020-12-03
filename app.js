const ui = new UI();

const storage = new Storagee();

const weatherData = storage.getLocationData();

const weather = new Weather(weatherData.city, weatherData.state);

document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("w-change-btn").addEventListener("click", function (e) {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);

  storage.setLocationData(city, state);

  getWeather();

  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
