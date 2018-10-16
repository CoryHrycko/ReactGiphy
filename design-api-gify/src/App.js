import React, { Component } from 'react';
import './App.css';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(){
    super();

    this.state = {
      gifs: [
        {
          id:1,
          url:'http://fakeimg.pl/300/'
        },
        {
          id:2,
          url:'http://fakeimg.pl/300/'
        },
        {
          id:3,
          url:'http://fakeimg.pl/300/'
        }
      ]
    }
  }

  handleTermChange(term) {
    console.log(term);
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;

//1st layer after root-----------------------------------------
// this is called the render method