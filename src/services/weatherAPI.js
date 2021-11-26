import axios from 'axios'
import geocodingService from './geocodingAPI'
import { getDateFromTimestamp } from '../utils/dates'

const apiUrl = 'https://api.openweathermap.org/data/2.5'
const apiKey = process.env.REACT_APP_WEATHER_API_KEY

const formatForecast = forecast => {
  const formatted = forecast.map(day => {
    return {
      date: getDateFromTimestamp(day.dt),
      description: day.weather[0].description,
      weather_id: day.weather[0].id,
      min_temp: Math.round(day.temp.min),
      max_temp: Math.round(day.temp.max),
    }
  })
  // Return forecast for 5 days
  return formatted.slice(1, 6)
}

const formatCurrentWeather = current => {
  return {
    description: current.weather[0].description,
    weather_id: current.weather[0].id,
    temp: Math.round(current.temp),
    wind: Math.round(current.wind_speed),
    wind_deg: current.wind_deg,
    humidity: current.humidity,
    visibility: current.visibility,
    pressure: current.pressure
  }
}

const getWeatherForLocation = async location => {
  const { name, lat, lon } = await geocodingService.getCoordinates(location)

  const response = await axios.get(`${apiUrl}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${apiKey}&units=metric`)

  const weather = {
    location: name,
    current: {
      timezone: response.data.timezone,
      ...formatCurrentWeather(response.data.current)
    },
    forecast: formatForecast(response.data.daily)
  }

  console.log(weather)
  return weather
}

const getWeatherFromCoordinates = async coordinates => {
  const location = await geocodingService.getLocation(coordinates)
  console.log(location)
  const { lat, lon } = coordinates

  const response = await axios.get(`${apiUrl}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${apiKey}&units=metric`)

  const weather = {
    location,
    current: {
      timezone: response.data.timezone,
      ...formatCurrentWeather(response.data.current)
    },
    forecast: formatForecast(response.data.daily)
  }

  console.log(weather)
  return weather
}

const weatherService = {
  getWeatherForLocation,
  getWeatherFromCoordinates
}

export default weatherService