import React from 'react'

var carouselEntry = (props) => {
  return(
    <div id="full-item">
      <div id="caro-img">{props.info.url}</div>
      <div id="caro-cat">{props.info.cat}</div>
      <div id="caro-name">{props.info.desc}</div>
      <div id="caro-price">{props.info.price}</div>
      <div id="caro-star">{props.info.star}</div>
    </div>
  )
}

export default carouselEntry;