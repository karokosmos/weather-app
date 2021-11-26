import React from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import WeatherToday from '../WeatherToday'
import SearchForm from '../SearchForm'

const MainPanel = () => {
  const weatherData = useSelector(state => state.weatherData)
  const searchOpen = useSelector(state => state.searchOpen)

  if (!weatherData) {
    return <div className="MainPanel"></div>
  }

  return (
    <div className="MainPanel">
      {searchOpen
        ? <SearchForm />
        : <WeatherToday />}
    </div>
  )
}

export default MainPanel