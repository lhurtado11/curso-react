import React from 'react';
import './App.css';

class App extends
React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.updateName.bind(this)} />
        <button onClick={this.saluda.bind(this)}>Saluda</button>
      </div>
    );
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
   }
  saluda() {
  alert(`Hola ${this.state.name}!`);
  }
}

export default App;
