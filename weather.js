
// note to self : taken from openweathermap.org
// credit them in the end
class Weather {
  constructor(city){
    this.apikey = '63dbd366cb57e735a518eacd9944b827'
    this.city = city
    //this.state = state
  }
  
  // fetch weather from api
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=metric`)
    const responseData = await response.json()
    return responseData
  }
  //chnage weather location
  changeLocation(city){
    this.city = city
  }
}