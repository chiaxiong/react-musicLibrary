import React, { Component } from "react";
import "./App.css";
import MusicTable from "./Components/MusicTable";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  render() {
    return (
      <div className='App body'>
        <header className='app-header'></header>
        <SearchBar />
        <MusicTable />
      </div>
    );
  }
}

export default App;
