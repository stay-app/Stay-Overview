import React from 'react';
import CarouselEntry from './CarouselEntry.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: [],
      idNext: '#5',
      idPrev: '#1',
      boxWidth: 890,
      boxHeight: 420,
      imgBoxWidth: 193.59,
      imgBoxHeight: 258.11,
      fullItemWidth: 170,
      favBottom: 218,
      favLeft: 125
    };

    this.allNearby = this.props.info;
    this.displayLast = 5;
    this.displayFirst = 1;
    this.moveDown = this.moveDown.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  handleInfo() {
    if (this.props.info.length > 0) {
      this.setState({
        showing: this.props.info,
      });
    }
  }

  moveUp() {
    if (this.displayLast < 20) {
      this.displayLast++;
      this.displayFirst++;
      this.checkArrow();
    }
    this.setState({
      idNext: `#${this.displayLast}`,
    });
  }

  moveDown() {
    if (this.displayFirst > 1) {
      this.displayLast--;
      this.displayFirst--;
      this.checkArrow();
    }
    this.setState({
      idPrev: `#${this.displayFirst}`,
    });
  }

  checkArrow() {
    const prevArrow = document.getElementById('caro-prev');
    const nextArrow = document.getElementById('caro-next');
    if (this.displayFirst === 1) {
      prevArrow.className = 'caro-prev-white';
    } else {
      prevArrow.className = 'caro-prev';
    }
    if (this.displayLast === 20) {
      nextArrow.className = 'caro-next-white';
    } else {
      nextArrow.className = 'caro-next';
    }
  }

  updateDimensions() {
    if(window.innerWidth < 1050) {
      this.setState({ boxHeight: 504, boxWidth: 850, imgBoxWidth: 232.3, imgBoxHeight: 309.7, fullItemWidth: 204, favBottom: 261.6, favLeft: 150});
      }
    } else if(window.innerWidth > 1050) {
      this.setState({ boxHeight: 420, boxWidth: 890, imgBoxWidth: 193.59, imgBoxHeight: 258.11, fullItemWidth: 170, favBottom: 218, favLeft: 125});
      }
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    if (this.state.showing.length === 0) {
      this.handleInfo();
    }
    return (
      <div id="arrow-box">
        <a className="caro-prev-white" id="caro-prev" onClick={this.moveDown} href={this.state.idPrev}>&#60;</a>
        <div id="carousel-box" style={{width: this.state.boxWidth + "px", height: this.state.boxHeight + "px"}}>
          {this.state.showing.map((ele, i) =>
            <CarouselEntry info={ele} key={i} height={this.state.imgBoxHeight} width={this.state.imgBoxWidth} fiWidth={this.state.fullItemWidth} favB={this.state.favBottom} favL={this.state.favLeft} />,
          )}
        </div>
        <a className="caro-next" id="caro-next" onClick={this.moveUp} href={this.state.idNext}>&#62;</a>
      </div>
    );
  }

}

export default Carousel;
