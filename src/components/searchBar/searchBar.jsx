import React, { Component } from "react";
import SearchItem from "../searchItem/searchItem";

class SearchBar extends Component {
  state = {
    query: "",
    data: [],
    results: []
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
    if (e.target.value !== "") {
      const results = this.state.data.filter(item =>
        item.title.includes(e.target.value)
      );
      this.setState({ results });
    } else {
      this.setState({ results: [] });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  handleFocus = e => {
    e.target.select();
  };

  componentDidMount() {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(response => response.json())
        .then(json => this.setState({ data: json }));
    } catch (error) {
      console.log("Error Retrieving Data from Server", error);
    }
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h1>Search</h1>
          <h2>{this.state.results.length} results</h2>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            onClick={this.handleFocus}
          />
        </form>
        {this.state.results.map(result => (
          <SearchItem
            key={result.id}
            title={result.title}
            id={result.id}
          ></SearchItem>
        ))}
      </React.Fragment>
    );
  }
}

export default SearchBar;
