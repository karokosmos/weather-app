import axios from 'axios'
const apiUrl = 'https://api.openweathermap.org/geo/1.0'
const apiKey = process.env.REACT_APP_WEATHER_API_KEY

const getCoordinates = async location => {
  const response = await axios.get(`${apiUrl}/direct?q=${location}&limit=1&appid=${apiKey}`)

  const coordinates = {
    name: response.data[0].name,
    lat: response.data[0].lat,
    lon: response.data[0].lon
  }

  return coordinates
}

const getLocation = async coordinates => {
  const { lat, lon } = coordinates

  const response = await axios.get(`${apiUrl}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`)

  const location = response.data[0].name
  return location
}

const geocodingService = {
  getCoordinates,
  getLocation
}

export default geocodingService