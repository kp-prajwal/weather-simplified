// init weather object
const weather = new Weather('Bangalore')
const ui = new UI()

// getweather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)


// weather.changeLocation('Mumbai')

function getWeather() {
  weather.getWeather()
    .then(results => { ui.paint(results) })
    .catch(
      error => { console.log(error) }
    )
}


