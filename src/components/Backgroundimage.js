import { makeStyles } from '@material-ui/core';
import React from 'react'
import Image from "../images/starry.png"




const usestyles = makeStyles(({
  backgroundImage: {
    width:1536,
    marginBottom:-761,
    height:1780
  }
}));


const Backgroundimage = () => {

  const classes=usestyles();

  return (
    <img src={Image} alt="" className={classes.backgroundImage}/>
  )
}



export default Backgroundimage

