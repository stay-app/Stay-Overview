import React from 'react'


const carouselEntry = (props) => {
  let {star} = props.info
  if (star !== null) {
    star += (` ★`);
  }
  return (
    <span className="slide" id={props.info.nearId}>
      <div className="full-item">
        <div id="caro-img-box">
          <img src={props.info.url} id="caro-img" />
          <a id="fav-button" >&#10084;</a>
        </div>
        <div id="caro-cat">{props.info.cat}</div>
        <div id="caro-name">{props.info.desc}</div>
        <div id="caro-price">From ${props.info.price}/person</div>
        <div id="caro-star">{star}</div>
      </div>
    </span>
  )
}

export default carouselEntry;

//193.59 258.11
//205 274
//246 328