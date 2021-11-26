import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './index.css'
import { closeSearch } from '../../reducers/searchReducer'
import { setLocationWeather } from '../../reducers/weatherReducer'

const SearchForm = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(setLocationWeather(value))
    dispatch(closeSearch())
    setValue('')
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="SearchForm">
      <button
        className="SearchForm__close"
        onClick={() => dispatch(closeSearch())}>
        X
      </button>
      <form className="SearchForm__form" onSubmit={handleSubmit}>
        <input
          className="SearchForm__input"
          type="text"
          placeholder="search location"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="SearchForm__submit">Search</button>
      </form>
      <p className="SearchForm__note">Please provide a full name of the city.</p>
    </div>
  )
}

export default SearchForm