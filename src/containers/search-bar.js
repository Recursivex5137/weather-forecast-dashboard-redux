import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          type="text" 
          className="form-control"
          placeholder="Search for a City"
          value={this.state.term} 
          onChange={(event) => this.onInputChange(event)}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button">Submit</button>
        </span>
      </form>
    )
  }
}
