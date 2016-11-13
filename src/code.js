var integerArray = [1], indices = [];

function addInteger(e) {
  integerValue = document.getElementById('numberInput').value;
  integerArray.push(integerValue);
  document.getElementById('integerArray').innerHTML += (integerArray.length == 1 ? "" : "," ) + integerValue;
  document.getElementById("numberInput").value = "";
};

var reset = function () {
  document.getElementById("indicesArray").innerHTML = "";
  document.getElementById('integerArray').innerHTML = "";
  integerArray = [];
  indices = [];
};

function searchConsecutiveNumbers() {
  var diff1, diff2;

  for(var i = 0; i < integerArray.length; i += 1) {
    diff1 = integerArray[i] - integerArray[i + 1];
    diff2 = integerArray[i + 1] - integerArray[i + 2];
    if ((diff1 == 1 || diff1 == -1) && diff1 === diff2) {
      indices.push(i);
      document.getElementById("indicesArray").innerHTML += (indices.length == 1 ? "" : "," ) + i;
    }
  }

  if (indices.length == 0) {
    document.getElementById("indicesArray").innerHTML = 'No results found';
  }
};




import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ConsecutiveRun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.addInteger();
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  addInteger() {
    console.log('asdf');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form> 
    );
  }
}

ReactDOM.render(
  <ConsecutiveRun />,
  document.getElementById('root')
);