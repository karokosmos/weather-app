import React, { useEffect } from 'react'
import MainPanel from './components/MainPanel'
import DataPanel from './components/DataPanel'
import { useDispatch } from 'react-redux'
import { initWeather } from './reducers/weatherReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initWeather())
  }, [dispatch])

  return (
    <div className="App">
      <MainPanel />
      <DataPanel />
    </div>
  )
}

export default App