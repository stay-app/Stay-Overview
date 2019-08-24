import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      something: "here"
    }

  }

  render() {
    return (
      <div>
        <p>HELLO WORLD</p>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));