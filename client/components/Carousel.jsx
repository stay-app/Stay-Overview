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

    this.size = 'large'
    this.allNearby = this.props.info;
    this.displayLast = 5;
    this.displayFirst = 1;
    this.lastMove = 1;
    this.moveDown = this.moveDown.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.debounceUpdateDimensions = debounce(this.updateDimensions, 250);
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
      this.lastMove = 1;
    }
    this.setLastState();
  }

  moveDown() {
    if (this.displayFirst > 1) {
      this.displayLast--;
      this.displayFirst--;
      this.checkArrow();
      this.lastMove = 0;
    }
    this.setFirstState();
  }

  setFirstState() {
    this.setState({
      idPrev: `#${this.displayFirst}`,
    });
  }

    setLastState() {
    this.setState({
      idNext: `#${this.displayLast}`,
    });
  }

  centerSlidesUp() {
    window.location.href = this.state.idNext;
  }

  centerSlidesDown() {
    window.location.href = this.state.idPrev;

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


  //This is all code to resize and re-position the slider on smaller windows reactively.
  //You can comment this entire section out and the module will still work and meet all requirements.
  updateDimensions() {
    const scrollBar = document.getElementById('carousel-box');
    // if(window.innerWidth < 800) {
    //   this.setState({ boxHeight: 630, boxWidth: 530, imgBoxWidth: 290.38, imgBoxHeight: 387.16, fullItemWidth: 255, favBottom: 327, favLeft: 187.5});
    //   if(this.size === 'medium') {
    //     if(this.displayLast < 5) {
    //       this.displayLast -= 2;
    //       this.setLastState();
    //     } else {
    //       this.displayFirst += 2;
    //       this.setFirstState();
    //     }
    //     this.centerSlidesUp();
    //     this.size = 'small'
    //   }
    // } else
    if(window.innerWidth > 800 && window.innerWidth < 1440) {
      this.setState({ boxHeight: 504, boxWidth: 850, imgBoxWidth: 232.3, imgBoxHeight: 309.7, fullItemWidth: 204, favBottom: 261.6, favLeft: 150});
      if(this.size === 'small') {
        this.displayLast += 2;
        this.setLastState();
        this.centerSlidesDown();
        this.size = 'medium';
      } else if(this.size === 'large') {
        if(this.displayLast === 5) {
          this.displayLast--;
          this.setLastState();
        } else if(this.lastMove) {
          this.displayFirst++;
          this.setFirstState();
          this.centerSlidesUp();
          //For some reason the images display off center for 1-6. This is a band-aid fix for now.
          //This code sets the scrollbar to percisely the location of each of the first 6 slides when scaling window size down.
        } else if (this.displayFirst === 6) {
          this.displayLast --;
          this.setLastState();
          scrollBar.scrollLeft = 1060;
        } else if (this.displayFirst === 5) {
          this.displayLast --;
          this.setLastState();
          scrollBar.scrollLeft = 848;
        } else if (this.displayFirst === 4) {
          this.displayLast --;
          this.setLastState();
          scrollBar.scrollLeft = 636;
        } else if (this.displayFirst === 3) {
          this.displayLast --;
          this.setLastState();
          scrollBar.scrollLeft = 424;
        } else if (this.displayFirst === 2) {
          this.displayLast --;
          this.setLastState();
          scrollBar.scrollLeft = 212;
        } else if (this.displayFirst === 1) {
          this.displayLast --;
          this.setLastState();
          scrollBar.scrollLeft = 0;
        } else {
          this.displayLast--;
          this.setLastState();
          this.centerSlidesUp();
        }
        this.size = 'medium';
      }
    } else if(window.innerWidth > 1440) {
      this.setState({ boxHeight: 420, boxWidth: 890, imgBoxWidth: 193.59, imgBoxHeight: 258.11, fullItemWidth: 170, favBottom: 218, favLeft: 125});
      if(this.size === 'medium') {
        if(this.lastMove) {
          this.displayFirst--;
          this.setFirstState();
          this.centerSlidesDown();
        } else if (this.displayFirst === 5) {
          this.displayLast ++;
          this.setLastState();
          scrollBar.scrollLeft = 712;
        } else if (this.displayFirst === 4) {
          this.displayLast ++;
          this.setLastState();
          scrollBar.scrollLeft = 534;
        } else if (this.displayFirst === 3) {
          this.displayLast ++;
          this.setLastState();
          scrollBar.scrollLeft = 356;
        } else if (this.displayFirst === 2) {
          this.displayLast ++;
          this.setLastState();
          scrollBar.scrollLeft = 178;
        } else if(this.displayLast < 20) {
            this.displayLast++;
            this.setLastState();
            this.centerSlidesDown();
        } else {
          this.centerSlidesUp();
        }
      }
      this.size = 'large'
    }
  }


  componentDidMount() {
    this.debounceUpdateDimensions();
    window.addEventListener('resize', this.debounceUpdateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceUpdateDimensions);
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


function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


export default Carousel;
