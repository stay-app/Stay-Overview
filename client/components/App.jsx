import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nearby: []
    }

  }

  render() {
    return (
      <div>
        <div id="title">
          <p>Things to do nearby</p>
        </div>
        <Carousel info={this.state.nearby} />
      </div>
    )
  }
  componentDidMount() {
    var that = this
    axios.get('/api/nearby/?id=2')
  .then(function (response) {
    that.setState({
      nearby: response.data[0].nearby
    })
  })
  .catch(function (error) {
    console.log(error);
  })
  }
}

export default App;