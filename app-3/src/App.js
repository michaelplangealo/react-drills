import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filtered: " ",
      array: [
        "bob ",
        "johnson ",
        "poppy ",
      ]
    }
    this.setState = this.setState.bind(this)
  }
  handleChange(value) {
    this.setState({ filtered: value })
  }



  render() {

    let names = this.state.array.filter((element, index) => {
      return element.includes(this.state.filtered);
    }).map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} type="text" />
        {names}
      </div>
    );
  }
}

export default App;
