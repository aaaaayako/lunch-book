import axios from 'axios'
import { GET_SHOPS, GET_MORE_SHOPS } from '../actionTypes/shopActionType'

const createCommonAction = (json, searchWord) => ({
  type: GET_SHOPS,
  shops: json,
  receiveAt: Date.now(),
  searchWord,
})

const createMoreSearchAction = (json, searchWord) => ({
  type: GET_MORE_SHOPS,
  shops: json,
  shopsRest: json.rest,
  receiveAt: Date.now(),
  searchWord,
})

const getShops = (searchWord = '', offsetPage = 1) => dispatch => {
  const PER_PAGE_STORE = 10
  axios
    .get(
      `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=155ad7008125ba527c2fcf91c5c1bdb8&name=${searchWord}&hit_per_page=${PER_PAGE_STORE}&offset_page=${offsetPage}`,
    )
    .then(res => {
      if (offsetPage === 0) {
        dispatch(createCommonAction(res.data, searchWord))
      } else {
        dispatch(createMoreSearchAction(res.data, searchWord))
      }
    })
    .catch(err => console.log(err.message))
}

export default getShops
