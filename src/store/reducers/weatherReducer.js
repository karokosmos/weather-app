const weatherReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return action.payload
    default:
      return state
  }
}

export default weatherReducer