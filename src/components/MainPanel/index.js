import React from 'react'
import './index.css'
import Icon from '../Icon'
import { useSelector } from 'react-redux'
import { getDateForToday } from '../../utils/dates'

const MainPanel = () => {
  const weatherData = useSelector(state => state.weatherData)
  const location = useSelector(state => state.location)

  if (!weatherData) {
    return <div className="MainPanel"></div>
  }

  return (
    <div className="MainPanel">
      <div className="MainPanel__clouds"></div>
      <div className="MainPanel__content">
        <div className="MainPanel__icon">
          <Icon weatherId={weatherData.current.weather_id} />
        </div>
        <div className="MainPanel__temp-container">
          <p className="MainPanel__temp">{weatherData.current.temp}</p>
          <p className="MainPanel__temp-system">°C</p>
        </div>
        <p className="MainPanel__desc">{weatherData.current.description}</p>
        <div className="MainPanel__details">
          <p className="MainPanel__date">
            Today
            <span>&#8226;</span>
            {getDateForToday(weatherData.current.timezone)}
          </p>
          <div className="MainPanel__location">
            <span className="material-icons">place</span>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPanel