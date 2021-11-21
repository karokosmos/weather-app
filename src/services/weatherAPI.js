import axios from 'axios'
const apiUrl = 'https://api.openweathermap.org/data/2.5'
const apiKey = process.env.REACT_APP_WEATHER_API_KEY

const getTodaysWeather = async location => {
  const response = await axios.get(`${apiUrl}/weather?q=${location}&appid=${apiKey}&units=metric`)

  //console.log(response.data)

  const todaysWeather = {
    location: response.data.name,
    weather: {
      description: response.data.weather[0].description,
      id: response.data.weather[0].id
    },
    temp: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    visibility: response.data.visibility,
    pressure: response.data.main.pressure
  }

  return todaysWeather
}

export default {
  getTodaysWeather
}