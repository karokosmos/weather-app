import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import weatherReducer from './reducers/weatherReducer'
import searchReducer from './reducers/searchReducer'

const reducer = combineReducers({
  weatherData: weatherReducer,
  searchOpen: searchReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ))

export default store