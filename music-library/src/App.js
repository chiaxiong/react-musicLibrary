import React, { Component } from "react";
import "./App.css";
import MusicTable from "./Components/MusicTable";
import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar/NavBar";

class App extends Component {
  searchValue() {}
  render() {
    return (
      <div className='App body'>
        <header className='app-header'></header>
        <NavBar />
        {/* <SearchBar /> */}
        <MusicTable />
      </div>
    );
  }
}

export default App;
