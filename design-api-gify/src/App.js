import React, { Component } from 'react';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import './styles/app.css';

class App extends Component {
  //constructor for the gifs
  constructor(){
    super();

    this.state = {
      gifs: []
    }
  }

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=T8B0aFWsJ5E6edMuilem7xYMuDgNwdhA`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data})
      //console.log(res.body.data[0]);
    });
    console.log(term);
  }
  //main render method
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