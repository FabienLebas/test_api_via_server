import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products:[{name:"toto"}]
    }
  }

  componentDidMount(){
    console.log("componentDidMount");
    fetch('/api')
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({
          products: result
        });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.products[0].name}
      </div>
    );
  }
}

export default App;
