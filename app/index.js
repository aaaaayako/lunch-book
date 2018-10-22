import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import GetShopListContainer from './containers/getShopListContainer'

render(
  <Provider store={store}>
    <GetShopListContainer />
  </Provider>,
  document.getElementById('app'),
)
