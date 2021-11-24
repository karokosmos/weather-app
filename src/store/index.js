import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import weatherReducer from './reducers/weatherReducer'
import locationReducer from './reducers/locationReducer'

const reducer = combineReducers({
  weatherToday: weatherReducer,
  location: locationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ))

export default store