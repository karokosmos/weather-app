import React from 'react'
import './index.css'

import thunderstorm from '../../assets/images/Thunderstorm.png'
import drizzle from '../../assets/images/LightRain.png'
import rain from '../../assets/images/HeavyRain.png'
import snow from '../../assets/images/Snow.png'
import atmosphere from '../../assets/images/LightCloud.png'
import clear from '../../assets/images/Clear.png'
import clouds from '../../assets/images/HeavyCloud.png'

const Icon = ({ weatherId }) => {
  const getIcon = id => {
    if (id >= 200 && id <= 232) {
      return thunderstorm
    } else if (id >= 300 && id <= 321) {
      return drizzle
    } else if (id >= 500 && id <= 531) {
      return rain
    } else if (id >= 600 && id <= 622) {
      return snow
    } else if (id >= 701 && id <= 781) {
      return atmosphere
    } else if (id === 800) {
      return clear
    } else if (id >= 801 && id <= 804) {
      return clouds
    } else {
      return atmosphere
    }
  }

  return (
    <img className="Icon" alt="Weather icon" src={getIcon(weatherId)} />
  )
}

export default Icon