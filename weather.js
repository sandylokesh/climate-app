class Weather {
  constructor(city, state) {
    this.state = state;
    this.city = city;
    this.api_key = "44f6cdc6365b7225be4e114d9b1d89dd";
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.api_key}`
    );

    const data = await response.json();

    return data;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
