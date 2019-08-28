import React from 'react';
import CarouselEntry from './CarouselEntry.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: []
    }

    this.allNearby = this.props.info
    this.displayCounter = 6
    }

    handleInfo() {
      if (this.props.info.length > 0) {
        var liveDisplay = this.props.info.filter(ele => ele.nearId < this.displayCounter)
        this.setState({
          showing: liveDisplay
        })
      }
    }

  render() {
    if (this.state.showing.length === 0) {
      // this.handleInfo();
    }
      return(
        <div id="carousel-box">
          {this.state.showing.map((ele, i) =>
            <CarouselEntry info={ele} key={i} />
          )}
        </div>
    )
  }

}

export default Carousel;