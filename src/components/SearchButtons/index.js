import React from 'react'
import { useDispatch } from 'react-redux'
import './index.css'
import { openSearch } from '../../reducers/searchReducer'
import { setCoordinatesWeather } from '../../reducers/weatherReducer'

const SearchButtons = () => {
  const dispatch = useDispatch()

  const locateUser = () => {
    if (!navigator.geolocation) {
      return alert('Geolocation is not supported by your browser')
    }

    const success = position => {
      const coordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
      dispatch(setCoordinatesWeather(coordinates))
    }

    const error = () => {
      alert('Unable to retrieve your location')
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  return (
    <div className="SearchButtons">
      <button
        className="SearchButtons__button" onClick={() => dispatch(openSearch())}>
        Search for places
      </button>
      <button className="SearchButtons__locate" onClick={() => locateUser()}>
        <span className="material-icons">
          my_location
        </span>
      </button>
    </div>
  )
}

export default SearchButtons