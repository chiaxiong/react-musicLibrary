import React from "react";

export default class SearchBar extends React.Component {
  state = {
    search: "",
  };

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Music Library</h2>
        <input
          placeholder='searching for...'
          type='text'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
      </div>
    );
  }
}
