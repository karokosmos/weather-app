import { createStore, combineReducers } from 'redux'
import weatherReducer from './reducers/weatherReducer'
import locationReducer from './reducers/locationReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  weatherToday: weatherReducer,
  location: locationReducer
})

const store = createStore(reducer, composeWithDevTools())

export default store