import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InfiniteScroll from 'react-infinite-scroller'

import getShops from '../actions'
import SearchBox from '../components/SearchBox'
import ShopList from '../components/ShopList'

const ContentWrap = styled.div`
  font-family: '游ゴシック体', YuGothic, '游ゴシック Medium', 'Yu Gothic Medium',
    '游ゴシック', 'Yu Gothic', 'メイリオ', sans-serif;
  color: #333;
  min-width: 320px;
  min-height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`
const ShopsContainer = styled.div`
  max-width: 1024px;
  padding: 20px;
  margin: 0 auto;
`

const mapStateToPorps = state => ({
  shops: state.shops,
})

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(getShops, dispatch),
})

const GetShopListContainer = props => {
  const { shops, action } = props
  const shopArrLength = shops.shopArray.rest.length
  return (
    <ContentWrap>
      <SearchBox getShops={action.getShops} />
      <ShopsContainer>
        {shopArrLength === 0 ? null : (
          <InfiniteScroll
            pageStart={0}
            loadMore={() => action.getShops(shops.word, shopArrLength)}
            hasMore={true || false}
            loader={<div key={0}>Loading ...</div>}
          >
            <ShopList shops={shops} />
          </InfiniteScroll>
        )}
      </ShopsContainer>
    </ContentWrap>
  )
}

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
)(GetShopListContainer)
