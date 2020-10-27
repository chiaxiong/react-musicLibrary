import React, { Component } from "react";
import MusicList from "./Components/MusicList";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'></header>
        <MusicList />
      </div>
    );
  }
}

export default App;
