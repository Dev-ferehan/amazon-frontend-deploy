import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import classes from './header.module.css'
const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li><MenuIcon/> All</li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registery</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  )
}

export default LowerHeader
