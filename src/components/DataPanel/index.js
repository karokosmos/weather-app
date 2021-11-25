import React from 'react'
import './index.css'
import Card from '../Card'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Highlights from '../Highlights'

const DataPanel = () => {
  const weatherData = useSelector(state => state.weatherData)

  if (!weatherData) {
    return <div className="DataPanel"></div>
  }

  return (
    <div className="DataPanel">
      <div className="DataPanel__wrapper">
        <div className="DataPanel__forecast">
          {weatherData.forecast.map(day =>
            <Card key={uuidv4()} data={day} />
          )}
        </div>
        <Highlights />
      </div>
    </div>
  )
}

export default DataPanel