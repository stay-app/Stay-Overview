import React from 'react';
import CarouselEntry from './CarouselEntry.jsx'

var carousel = (props) => {
  return(
    <div>
    {props.info.map((ele, i) =>
      <CarouselEntry info={ele} key={i} />
      )}
    </div>
  )
}

export default carousel;