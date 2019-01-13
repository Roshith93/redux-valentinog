import React, { Component } from 'react';
import './App.css';
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>React Redux</h1>
       <List/>
      </div>
    );
  }
}

export default App;
