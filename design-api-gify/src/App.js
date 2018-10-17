import React, { Component } from 'react';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import GifModal from './components/GifModal';
import request from 'superagent';
import './styles/app.css';

class App extends Component {
  //constructor for the gifs
  constructor(){
    super();

    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    };
  }

  openModal(gif){
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  closeModal(){
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    })
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
        <GifList gifs={this.state.gifs} 
                 onGifSelect={selectedGif => this.openModal(selectedGif) }/>
        <GifModal modalIsOpen={this.state.modalIsOpen}
                selectedGif={this.state.selectedGif}
                onRequestClose={ () => this.closeModal()} />
      </div>
    );
  }
}

export default App;

//1st layer after root-----------------------------------------
// this is called the render method