import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

const styles = () => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    width: '243px',
    height: '243px',
  },
  tile: {
    marginBottom: '56px',
  },
  title: {
    fontSize: '12px',
  },
})

const Shop = props => {
  const { classes, id, name, image_url: imageUrl, category } = props

  return (
    <GridListTile key={id} className={classes.tile}>
      <img src={imageUrl.shop_image1} alt={name} className={classes.img} />
      <GridListTileBar
        title={<span className={classes.title}>{name}</span>}
        subtitle={<span>{category}</span>}
        actionIcon={
          <IconButton className={classes.icon}>{<InfoIcon />}</IconButton>
        }
      />
    </GridListTile>
  )
}

export default withStyles(styles)(Shop)
