import React, { useEffect } from 'react'
import weatherService from './services/weatherAPI'
import MainPanel from './components/MainPanel'
import DataPanel from './components/DataPanel'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const location = useSelector(state => state.location)
  console.log(location)

  useEffect(() => {
    weatherService.getTodaysWeather('valkeakoski')
      .then(response => {
        console.log(response)
        dispatch({
          type: 'SET_WEATHER',
          payload: response
        })
      })
  }, [dispatch])

  return (
    <div className="App">
      <MainPanel />
      <DataPanel />
    </div>
  )
}

export default App