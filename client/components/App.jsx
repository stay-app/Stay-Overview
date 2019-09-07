import React from 'react';
import axios from 'axios';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import Carousel from './Carousel.jsx';
import styles from '../../public/style.module.css';

class Near extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nearby: [],
    };

  }

  componentDidMount() {
    const that = this;
    axios.get('http://ec2-54-153-38-107.us-west-1.compute.amazonaws.com:5004/api/nearby/2')
      .then((response) => {
        that.setState({
          nearby: response.data[0].nearby,
        });
      })
      .catch((error) => {
        console.log(error); // comment this out when running tests
      });
  }

  render() {
    return (
      <div>
        <div id="title">
          <p>Things to do nearby</p>
        </div>
        <Carousel info={this.state.nearby} />
      </div>
    );
  }
}


export default Near;
