class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.description = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.icon = document.getElementById('w-icon')

    //this.details = document.getElementById('w-details')
    this.coordinates = document.getElementById('w-coordinates')
    this.country = document.getElementById('w-country')
    this.temperature = document.getElementById('w-temperature')
    this.humidity = document.getElementById('w-humidity')
    this.mintemp = document.getElementById('w-mintemp')
    this.maxtemp = document.getElementById('w-maxtemp')
    this.sunrise = document.getElementById('w-sunrise')
    this.sunset = document.getElementById('w-sunset')

  }
  paint(weather) {
    this.location.textContent = weather.name + ', ' + weather.sys.country
    this.description.textContent = weather.weather[0].main
    this.string.textContent = '(' + weather.weather[0].description + ')'
    this.temperature.textContent = weather.main.temp + ' ℃'
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)


    this.coordinates.textContent = ` Co-ordinates :  ${weather.coord.lon} , ${weather.coord.lat}`
    this.humidity.textContent = `Humidity : ${weather.main.humidity} %`
    this.mintemp.textContent = `Minimum Temperature : ${weather.main.temp_min} ℃`
    this.maxtemp.textContent = `Maximum Temperature : ${weather.main.temp_max} ℃`

    //converting sunrise and sunset time to JS readable format
    const sunrisetimeStamp = weather.sys.sunrise
    var dateSunrise = new Date(sunrisetimeStamp * 1000)
    var hoursSunrise = dateSunrise.getHours()
    var minutesSunrise = '0' + dateSunrise.getMinutes()
    var secondsSunrise = '0' + dateSunrise.getSeconds()
    var formattedTimeSunrise = hoursSunrise + ':' + minutesSunrise.substr(-2) + ':' + secondsSunrise.substr(-2);
    
    //converting sunrise and sunset time to JS readable format
    const sunsettimeStamp = weather.sys.sunset
    var dateSunset = new Date(sunsettimeStamp * 1000)
    var hoursSunset = dateSunset.getHours()
    var minutesSunset = '0' + dateSunset.getMinutes()
    var secondsSunset = '0' + dateSunset.getSeconds()
    var formattedTimeSunset = hoursSunset + ':' + minutesSunset.substr(-2) + ':' + secondsSunset.substr(-2);


    this.sunrise.textContent = `Sunrise time : ${formattedTimeSunrise} hrs `
    this.sunset.textContent = `Sunset time : ${formattedTimeSunset} hrs`

    

  }
}