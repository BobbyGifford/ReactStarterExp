import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FullList from './components/FullList'
import Item from './components/Item'
// import StateTest from './components/StateTest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Item testProp="The app works great"></Item>
          <br />
          <FullList />
          {/* <StateTest /> */}
        </div>
      </div>
    );
  }
}

export default App;
