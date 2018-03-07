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
      array: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7,64, 43, 9, 73, 80, 98, 46, 27,22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      numResult: null   
    }
}


increaseCount(count) {
  this.setState({count: count})
}

itemFound(item, index, count) {
  this.setState({
    submitted: true,
    count: 0,
    searchValue: '',
    numResult: `${item} found at index ${index} with ${count} tries`
  });
  console.log(this.state.count);
}


binarySearch(arr, value, start=0, end=arr.length -1) {
  value = parseInt(value);

    arr = arr.sort(function (a, b) {
      return a - b;
    });

  if (start > end) return -1;
  let index = Math.floor((start + end) / 2);
  let item = arr[index];
  this.state.count++;
    
    if (item === value) {
      this.itemFound(item, index, this.state.count);
    }
  
    else if (item < value) { //Go right
      return this.binarySearch(arr, value, index + 1, end);
    }
  
    else if (item > value) { //Go left
      return this.binarySearch(arr, value, start, index - 1);
    }
  } 

linearSearch(value, arr) {
  let numValue = parseInt(value);
    let count = 0;
    for ( let i = 0; i < arr.length; i++ ) {
      count = i;
      if ( arr[i] === numValue ) {
        this.itemFound(arr[i], numValue, count)
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
          <button type='button' onClick={()=>this.binarySearch(this.state.array, this.state.searchValue)}>Binary Search</button>
          <button type='button' onClick={()=>this.linearSearch(this.state.searchValue, this.state.array)}>Linear Search</button>
      </div>
    );
  }

  else {
    return (
      <div className="search-app">
      <label>Enter the search value</label>
      <input type="text" value={this.state.searchValue} onChange={(e)=>this.setState({searchValue: e.target.value})}/>
      <button type='button' onClick={()=>this.binarySearch(this.state.searchValue, this.state.array)}>Binary Search</button>
      <button type='button' onClick={()=>this.linearSearch(this.state.searchValue, this.state.array)}>Linear Search</button>
      <p>{this.state.numResult}</p>
     </div>
    );
  }
    }
  }

export default App;
