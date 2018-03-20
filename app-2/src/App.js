import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numbers: [1, 2, 3, 4, 5]
    }
  }

  render() {

    let numbersArray = this.state.numbers.map((value, i) => {
      return (
        <h2 key={i}>{value}</ h2>
      )
    })

    return (
      <div className="App">
        {numbersArray}
      </div>
    );
  }
}

export default App;
