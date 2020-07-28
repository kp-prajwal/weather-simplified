class UI{
  constructor() {
    this.location = document.getElementById('w-location')
    this.description = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.icon = document.getElementById('w-icon')

    this.details = document.getElementById('w-details')
    this.coordinates = document.getElementById('w-coordinates')
    this.country = document.getElementById('w-country')
    this.temperature = document.getElementById('w-temperature')
    this.humidity = document.getElementById('w-humidity')
    this.mintemp = document.getElementById('w-mintemp')
    this.maxtemp = document.getElementById('w-maxtemp')
    this.airquality = document.getElementById('w-air-quality')
  }
  paint(weather) {
    this.location.textContent = weather.name
  }
}