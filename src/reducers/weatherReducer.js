import weatherService from "../services/weatherAPI"

/**********************/
// REDUCER
/**********************/
const weatherReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return action.payload
    default:
      return state
  }
}

/**********************/
// ACTIONS
/**********************/
export const initWeather = () => {
  return async dispatch => {
    const weather = await weatherService.getWeatherForLocation('Helsinki')
    dispatch({
      type: 'SET_WEATHER',
      payload: weather
    })
  }
}

export const setLocationWeather = (location) => {
  return async dispatch => {
    const weather = await weatherService.getWeatherForLocation(location)
    dispatch({
      type: 'SET_WEATHER',
      payload: weather
    })
  }
}

export const setCoordinatesWeather = (coordinates) => {
  return async dispatch => {
    const weather = await weatherService.getWeatherFromCoordinates(coordinates)
    dispatch({
      type: 'SET_WEATHER',
      payload: weather
    })
  }
}

export default weatherReducer