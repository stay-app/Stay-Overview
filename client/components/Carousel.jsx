import React from 'react';
import CarouselEntry from './CarouselEntry.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: []
    }

    this.allNearby = this.props.info;
    this.displayLast = 6;
    this.displayFirst = 0;
    this.moveDown = this.moveDown.bind(this);
    this.moveUp = this.moveUp.bind(this);
    }

    handleInfo() {
      if (this.props.info.length > 0) {
        var liveDisplay = this.props.info.filter(ele => (ele.nearId < this.displayLast) && (ele.nearId > this.displayFirst))
        this.setState({
          showing: liveDisplay
        })
      }
    }

    moveUp() {
      if (this.displayLast < 21) {
        this.displayLast++;
        this.displayFirst++;
      }
      this.handleInfo();
    }

    moveDown() {
      if (this.displayFirst > 0) {
        this.displayLast--;
        this.displayFirst--;
      }
      this.handleInfo();
    }

  render() {
    if (this.state.showing.length === 0) {
      this.handleInfo();
    }
      return(
        <div id="arrow-box">
            <a className="caro-prev" onClick={this.moveDown}>&#60;</a>
          <div id="carousel-box">
            {this.state.showing.map((ele, i) =>
              <CarouselEntry info={ele} key={i} />
              )}
          </div>
            <a className="caro-next" onClick={this.moveUp}>&#62;</a>
        </div>
    )
  }

}

export default Carousel;