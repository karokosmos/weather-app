import React, { useEffect } from 'react'
import MainPanel from './components/MainPanel'
import DataPanel from './components/DataPanel'
import { useDispatch, useSelector } from 'react-redux'
import { initializeWeather } from './store/actions/weatherActions'

function App() {
  const dispatch = useDispatch()
  const location = useSelector(state => state.location)

  useEffect(() => {
    dispatch(initializeWeather(location))
  }, [dispatch, location])

  return (
    <div className="App">
      <MainPanel />
      <DataPanel />
    </div>
  )
}

export default App