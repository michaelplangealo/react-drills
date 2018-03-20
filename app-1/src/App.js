import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      typing: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ typing: value })
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} type="text" />
        <p>{this.state.typing}</p>
      </div>
    );
  }
}

export default App;
