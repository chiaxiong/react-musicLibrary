import React from "react";
import axios from "axios";

export default class MusicList extends React.Component {
  state = {
    library: [],
  };

  componentDidMount() {
    axios.get("http://www.devcodecampmusiclibrary.com/api/music").then(res => {
      const library = res.data;
      this.setState({ library });
    });
  }

  render() {
    return (
      <table>
        <th>title</th>
        <tbody>
          {this.state.library.map(song => (
            <tr key={song.id}>
              <td>{song.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
