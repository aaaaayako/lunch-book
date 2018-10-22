import { GET_SHOPS } from '../actionTypes/shopActionType'

const initialState = {
  isFetching: false,
  shopArray: { totalItems: 0, rest: [] },
  word: '',
  error: '',
}

const shops = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOPS: {
      return {
        ...state,
        isFetching: false,
        shopArray: action.shops,
        word: action.searchWord,
        error: '',
      }
    }
    default:
      return state
  }
}

export default shops
