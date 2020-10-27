import React from "react";

export default class SearchBar extends React.Component {
  state = {
    search: "search for...",
  };

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>The Beatles: Music Library</h1>

        <input
          className='search-bar'
          type='text'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
      </div>
    );
  }
}
