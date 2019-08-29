import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import styles from '../../public/style.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nearby: [],
    };

  }

  componentDidMount() {
    const that = this;
    axios.get('/api/nearby/?id=2')
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

export default App;
