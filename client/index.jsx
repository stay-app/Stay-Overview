import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Carousel from './components/Carousel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nearby: []
    }

  }

  render() {
    return (
      <div id="title">
        <p>Things to do nearby</p>
        <Carousel info={this.state.nearby} />
      </div>
    )
  }
  componentDidMount() {
    var that = this
    axios.get('/api/nearby/1')
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


ReactDOM.render(<App />, document.getElementById('app'));