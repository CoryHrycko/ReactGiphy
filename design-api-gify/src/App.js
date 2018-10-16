import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends Component {
  handleTermChange(term) {
    console.log(term);
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar onTermChange={this.handleTermChange} />
      </div>
    );
  }
}

export default App;

//1st layer after root-----------------------------------------
// this is called the render method