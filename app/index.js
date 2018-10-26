import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import store from './store'
import GetShopListContainer from './containers/getShopListContainer'

injectGlobal`
  ${styledNormalize}
`

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: '#f44336',
    },
  },
})

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <GetShopListContainer />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app'),
)
