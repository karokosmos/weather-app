import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'
import { degreesToDirection } from '../../utils/degrees'

const Highlights = () => {
  const weatherData = useSelector(state => state.weatherData)

  return (
    <div className="Highlights">
      <p className="Highlights__header">Today's Highlights</p>
      <div className="Highlights__cards">
        <div className="Highlights__card">
          <p className="Highlights__card-title">Wind status</p>
          <div className="Highlights__data">
            <p className="Highlights__num">{weatherData.current.wind}</p>
            <p className="Highlights__sys">mps</p>
          </div>
          <div className="Highlights__wind">
            <span
              className="Highlights__wind-direction material-icons"
              style={{ transform: `rotate(${weatherData.current.wind_deg}deg)` }}>
              navigation
            </span>
            <p>{degreesToDirection(weatherData.current.wind_deg)}</p>
          </div>
        </div>
        <div className="Highlights__card">
          <p className="Highlights__card-title">Humidity</p>
          <div className="Highlights__data">
            <p className="Highlights__num">{weatherData.current.humidity}</p>
            <p className="Highlights__sys">%</p>
          </div>
          <div className="Highlights__humidity">
            <div className="Highlights__bar-nums">
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </div>
            <div className="Highlights__bar">
              <div className="Highlights__bar-inner" style={{ width: `${weatherData.current.humidity}%` }}></div>
            </div>
            <div className="Highlights__bar-percent">
              <p>%</p>
            </div>
          </div>
        </div>
        <div className="Highlights__card">
          <p className="Highlights__card-title">Visibility</p>
          <div className="Highlights__data">
            <p className="Highlights__num">{weatherData.current.visibility}</p>
            <p className="Highlights__sys">m</p>
          </div>
        </div>
        <div className="Highlights__card">
          <p className="Highlights__card-title">Air pressure</p>
          <div className="Highlights__data">
            <p className="Highlights__num">{weatherData.current.pressure}</p>
            <p className="Highlights__sys">mb</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights