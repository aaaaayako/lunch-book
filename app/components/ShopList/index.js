import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import Shop from './Shop'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
  },
})

const ShopList = props => {
  const { classes, shops } = props
  return shops.shopArray.length === 0 ? null : (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">{shops.word}</ListSubheader>
        </GridListTile>
        {shops.shopArray.rest.map(shop => {
          const shopId = shop.id
          return <Shop key={shopId} {...shop} />
        })}
      </GridList>
    </div>
  )
}

export default withStyles(styles)(ShopList)
