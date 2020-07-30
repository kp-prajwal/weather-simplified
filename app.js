// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData()
// Init weather object
const weather = new Weather(weatherLocation.city)
// Init UI
const ui = new UI()
// getweather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)


// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  weather.changeLocation(city)
  // Set location in Local Storage
  storage.setLocationData(city)
  // get and display weather 
  getWeather();
  $('#locModal').modal('hide');

})

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results)
    })
    .catch(
      error => { console.log(error) }
    )
}


