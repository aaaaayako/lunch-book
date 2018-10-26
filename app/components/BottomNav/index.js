import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import SearchIcon from '@material-ui/icons/Search'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
}

class BottomNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev, value) {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(BottomNav)
