import React from 'react'
import './index.css'
import Icon from '../Icon'
import { useSelector } from 'react-redux'

const MainPanel = () => {
  const weatherToday = useSelector(state => state.weatherToday)

  const getDate = () => {
    const date = new Date()
    const formattedDate = date.toLocaleDateString('en-GB', {
      weekday: 'short', day: 'numeric', month: 'short'
    })
    return formattedDate
  }

  if (!weatherToday) {
    return <div className="MainPanel"></div>
  }

  return (
    <div className="MainPanel">
      <div className="MainPanel__clouds"></div>
      <div className="MainPanel__content">
        <div className="MainPanel__icon">
          <Icon weatherId={weatherToday.weather.id} />
        </div>
        <div className="MainPanel__temp-container">
          <p className="MainPanel__temp">{weatherToday.temp}</p>
          <p className="MainPanel__temp-system">°C</p>
        </div>
        <p className="MainPanel__desc">{weatherToday.weather.description}</p>
        <div className="MainPanel__details">
          <p className="MainPanel__date">
            Today
            <span>&#8226;</span>
            {getDate()}
          </p>
          <div className="MainPanel__location">
            <span className="material-icons">place</span>
            <p>{weatherToday.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPanel