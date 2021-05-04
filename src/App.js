import React from 'react';
import './App.css';

class App extends
React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Hola Mundo'
    };

  }
  render () {
    return (
      <h1 onClick = {this.updateText.bind(this)}>{this.state.title}</h1>
    );
  }

  updateText () {
    this.setState({
      title: 'Hello World'
    });
  }
}

export default App;
