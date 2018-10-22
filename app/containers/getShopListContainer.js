import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import getShops from '../actions'
import SearchBox from '../components/SearchBox'
import ShopList from '../components/ShopList'

const ContentWrap = styled.div`
  font-family: '游ゴシック体', YuGothic, '游ゴシック Medium', 'Yu Gothic Medium',
    '游ゴシック', 'Yu Gothic', 'メイリオ', sans-serif;
  color: #333;
  min-width: 320px;
  background-color: #eee;
  height: 100%;
`
const ShopsContainer = styled.div`
  max-width: 1024px;
  padding: 20px;
  margin: 0 auto;
  min-height: 100vh;
`

const mapStateToPorps = state => ({
  shops: state.shops,
})

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(getShops, dispatch),
})

const GetShopListContainer = props => {
  const { shops, action } = props
  return (
    <ContentWrap>
      <SearchBox getShops={action.getShops} />
      <ShopsContainer>
        <ShopList shops={shops} />
      </ShopsContainer>
    </ContentWrap>
  )
}

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
)(GetShopListContainer)
