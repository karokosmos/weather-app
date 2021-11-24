import axios from 'axios'
const apiUrl = 'http://api.openweathermap.org/geo/1.0'
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

const geocodingService = {
  getCoordinates
}

export default geocodingService