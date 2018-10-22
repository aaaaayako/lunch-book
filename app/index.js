import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import SampleComponent from './components/SampleComponent'

render(
  <Provider>
    <SampleComponent />
  </Provider>,
  document.getElementById('app'),
)
