import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = (event) => {
      event.preventDefault();

      this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange.bind(this)} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
