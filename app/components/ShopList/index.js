import React from 'react'
import styled from 'styled-components'

const ItemListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
`

const ShopList = ({ shops = {} }) => (
  <ItemListWrap>
    {shops.shopArray.rest.map(shop => {
      const shopId = shop.id
      const shopName = shop.name
      return <li key={shopId}>{shopName}</li>
    })}
  </ItemListWrap>
)

export default ShopList
