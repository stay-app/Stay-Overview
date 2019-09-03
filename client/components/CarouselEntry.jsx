import React from 'react'


const carouselEntry = (props) => {
  let {star} = props.info
  if (star !== null) {
    star += (` ★`);
  }
  return (
    <span className="slide" id={props.info.nearId}>
      <div className="full-item" style={{width: props.fiWidth + "px"}}>
        <div id="caro-img-box" style={{width: props.width + "px", height: props.height + "px"}}>
          <img src={props.info.url} id="caro-img" />
          <a id="fav-button" style={{bottom: props.favB + "px", left: props.favL + "px"}} >&#10084;</a>
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
