import axios from 'axios'
import { GET_SHOPS } from '../actionTypes/shopActionType'

const createCommonAction = (json, searchWord) => ({
  type: GET_SHOPS,
  shops: json,
  receiveAt: Date.now(),
  searchWord,
})

const getShops = (searchWord = '') => dispatch =>
  axios
    .get(
      `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=155ad7008125ba527c2fcf91c5c1bdb8&name=${searchWord}`,
    )
    .then(res => {
      dispatch(createCommonAction(res.data, searchWord))
    })
    .catch(err => console.log(err.message))

export default getShops
