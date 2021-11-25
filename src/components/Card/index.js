import React from 'react'
import './index.css'
import Icon from '../Icon'

const Card = ({ data }) => {
  return (
    <div className="Card">
      <p className="Card__date">{data.date}</p>
      <div className="Card__icon">
        <Icon weatherId={data.weather_id} />
      </div>
      <div className="Card__temps">
        <p className="Card__max">{data.max_temp}°C</p>
        <p className="Card__min">{data.min_temp}°C</p>
      </div>
    </div>
  )
}

export default Card