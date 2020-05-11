import React, { Component } from "react";
import axios from "../api/unsplash";
import SearchBar from "./searchBar";
import ImageList from "./imageList";
class App extends Component {
//   state = {
//     images: [],
//   };
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  async onSubmit(term) {
    let response = await axios.get("/search/photos", {
      params: {
        query: term,
      },
    });
    console.log(response);
    console.log(response.data.results);

    this.setState({
      images: response.data.results,
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmit.bind(this)} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
