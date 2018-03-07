import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      submitted: false,
      searchValue: '',
        array: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27,22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]      
    }
}


increaseCount(count) {
  this.setState({count: count})
}

binarySearch(value) {

   this.state.data = this.state.data.sort(function (a, b) {
      return a - b;
    });
  
    increaseCount(this.state.count++)
    if (this.data.start > this.data.end) return `Value was not found after ${count} attempts`;
    let index = Math.floor((this.state.start + this.state.end) / 2);
    let item = arr[index];
  
    if (item === value) {
      return `${item} found at index ${index} with ${this.state.count} tries`;
    }
  
    else if (item < value) { //Go right
      return binarySearch(arr, value, index + 1, this.state.end);
    }
  
    else if (item > value) { //Go left
      return binarySearch(arr, value, this.state.start, index - 1);
    }
  } 

linearSearch(value) {
    let count = 0;
    for ( let i = 0; i < arr.length; i++ ) {
      count = i;
      if ( arr[i] === value ) {
        return console.log('The value was found, and took,', i, 'searches to find');
      }
    }
    console.log('Value not found, it took,', count, 'searches' );
  }
  render() {
    if(!this.state.submitted){
    return (
      <div className="search-app">
          <label>Enter the search value</label>
          <input type="text" value={this.state.searchValue} onChange={(e)=>this.setState({searchValue: e.target.value})}/>
          <button type='button' onClick={()=>this.binarySearch(this.state.searchValue)}>Binary Search</button>
          <button type='button' onClick={()=>this.linearSearch(this.state.searchValue)}>Linear Search</button>
      </div>
    );
  }
    }
  }

export default App;
