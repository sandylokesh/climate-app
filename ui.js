class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
    this.feelsLike = document.getElementById("w-feels-like");
  }
  paint(result) {
    const spitOutCelcius = (kelvin) => {
      const celcius = Math.round(kelvin - 273.15);
      return celcius;
    };
    //
    this.location.textContent = `${result.name}, ${result.sys.country}`;
    //
    this.desc.textContent = `${result.weather[0].description}`;
    //
    this.string.textContent = `${spitOutCelcius(result.main.temp)}*C`;
    //
    this.humidity.textContent = `Realative Humidity : ${result.main.humidity}`;
    //
    this.dewpoint.textContent = `Pressure : ${result.main.pressure}`;
    //
    this.wind.textContent = `Wind speed : ${result.wind.speed} ,  Wind deg : ${result.wind.deg} `;
    //
    this.feelsLike.textContent = `Feels like : ${spitOutCelcius(result.main.feels_like)}*C`;
    //
    const imageName = result.weather[0].icon;
    const iconsrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`;

    this.icon.setAttribute("src", iconsrc);
  }
}
