import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
                <input placeholder="Search for a Gif in a Giffy!" onChange={event => this.onInputChange(event.target.value)}/>
                <br></br>
                <img src="../src/styles/CSS/giphy.png"></img>
            </div>
        );
    }
}

export default SearchBar;