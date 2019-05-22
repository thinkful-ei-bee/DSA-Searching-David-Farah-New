import React from 'react';
import dataset from './dataset';
import search from './search';

export default class SearchBox extends React.Component {
  
  state = {
    searchNum: '',
    results: 'no input so far'
  }
  
  search(event) {
    event.preventDefault();
    console.log(event.target);
    const searchNum = Number(this.state.searchNum);
    const result = search(dataset, searchNum, 'linear');

    this.setState({
      results: `${result[1]} in ${result[0]} tries`
    });
  }

  changeFields(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
}

  render() {
    return (
      <>
      <form onSubmit={e => this.search(e)}>
        <label htmlFor="search-num">What number do you want to search for?</label>
        <input id="search-num" type="text" name="searchNum" onChange={event => this.changeFields(event)}></input>
        <button type="submit" name="linear" className="linear">Linear</button>
        <button type="submit" name="binary" className="binary">Binary</button>
      </form>
      <div className="results">
        Number of Tries: {this.state.results}
      </div>
      </>
    );
  }
}