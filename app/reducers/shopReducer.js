import { GET_SHOPS, GET_MORE_SHOPS } from '../actionTypes/shopActionType'

const initialState = {
  shopArray: { totalItems: 0, rest: [] },
  word: '',
  error: '',
}

const shops = (state = initialState, action) => {
  const increasedShops = state.shopArray.rest.concat(action.shopsRest)
  switch (action.type) {
    case GET_SHOPS: {
      return {
        ...state,
        shopArray: action.shops,
        word: action.searchWord,
        error: '',
      }
    }
    case GET_MORE_SHOPS: {
      return {
        ...state,
        shopArray: { ...action.shops, rest: increasedShops },
        word: action.searchWord,
        error: '',
      }
    }
    default:
      return state
  }
}

export default shops
