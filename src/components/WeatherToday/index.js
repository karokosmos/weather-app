import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'
import Icon from '../Icon'
import { getDateForToday } from '../../utils/dates'
import SearchButtons from '../SearchButtons'

const WeatherToday = () => {
  const weatherData = useSelector(state => state.weatherData)

  return (
    <div className="WeatherToday">
      <SearchButtons />
      <div className="WeatherToday__clouds"></div>
      <div className="WeatherToday__content">
        <div className="WeatherToday__icon">
          <Icon weatherId={weatherData.current.weather_id} />
        </div>
        <div className="WeatherToday__temp-container">
          <p className="WeatherToday__temp">{weatherData.current.temp}</p>
          <p className="WeatherToday__temp-system">°C</p>
        </div>
        <p className="WeatherToday__desc">{weatherData.current.description}</p>
        <div className="WeatherToday__details">
          <p className="WeatherToday__date">
            Today
            <span>&#8226;</span>
            {getDateForToday(weatherData.current.timezone)}
          </p>
          <div className="WeatherToday__location">
            <span className="material-icons">place</span>
            <p>{weatherData.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherToday