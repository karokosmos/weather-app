import weatherService from "../../services/weatherAPI"

export const initializeWeather = (location) => {
  return async dispatch => {
    const weather = await weatherService.getTodaysWeather(location)
    dispatch({
      type: 'SET_WEATHER',
      payload: weather
    })
  }
}