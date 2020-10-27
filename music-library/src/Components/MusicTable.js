import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

export default class MusicTable extends React.Component {
  state = {
    library: [],
  };

  componentDidMount() {
    axios.get("http://www.devcodecampmusiclibrary.com/api/music").then(res => {
      const library = res.data;
      this.setState({ library });
    });
  }

  filterLibrary = library => {
    let searchValue = this.state.library.filter(song => {
      return song.name.indexOf(this.state.search) !== -1;
    });
    this.setState({ library: searchValue });
  };

  render() {
    return (
      <div>
        <SearchBar filterLibrary={this.filterLibrary} />
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Album</th>
              <th>Genre</th>
              <th>Release Date</th>
            </tr>
            {this.state.library.map(song => (
              <tr key={song.id}>
                <td>{song.title}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
