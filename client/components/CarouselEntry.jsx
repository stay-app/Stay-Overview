import React from 'react'

var carouselEntry = (props) => {
  return(
    <div id="full-item">
      <div id="caro-img-box">
        <img src={props.info.url} id="caro-img" />
      </div>
      <div id="caro-cat">{props.info.cat}</div>
      <div id="caro-name">{props.info.desc}</div>
      <div id="caro-price">From ${props.info.price}/person</div>
      <div id="caro-star">{props.info.star} ★</div>
    </div>
  )
}

export default carouselEntry;

//193.59 258.11
//205 274
//246 328