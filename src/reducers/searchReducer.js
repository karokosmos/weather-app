/**********************/
// REDUCER
/**********************/
const searchReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_SEARCH':
      return true
    case 'CLOSE_SEARCH':
      return false
    default:
      return state
  }
}

/**********************/
// ACTIONS
/**********************/
export const openSearch = () => {
  return {
    type: 'OPEN_SEARCH',
  }
}

export const closeSearch = () => {
  return {
    type: 'CLOSE_SEARCH',
  }
}

export default searchReducer