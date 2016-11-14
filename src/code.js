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

    this.state = {
      integerArray: [],
      indices: [],
      pending: '',
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      pending: event.target.value
    });
  }

  handleSubmit(event) {
    let n = this.state.pending;
    if (n) {
      if (!isNaN(parseFloat(n)) && isFinite(n)) {
        let temp = this.state.integerArray;
        temp.push(this.state.pending);
        this.setState({
          integerArray: temp,
          pending: '',
          error: ''
        });
      }
      else {
        this.setState({
          error: 'Not a number'
        });
      }
    }

    this.searchConsecutiveNumbers();

    event.preventDefault();
  }

  handleReset() {
    this.setState({
      integerArray: [],
      indices: [],
      pending: '',
      error: ''
    });

    this.focusInput();
  }

  componentDidMount() {
    this.focusInput();
  }

  // Focus on input box for convenience.
  focusInput() {
    document.getElementById('numberInput').focus();
  }

  // Calculate the runs.
  searchConsecutiveNumbers() {
    let diff1, diff2;

    let list = this.state.integerArray;
    let indices = [];

    for (let i = 0; i < list.length; i += 1) {
      diff1 = list[i] - list[i + 1];
      diff2 = list[i + 1] - list[i + 2];
      if ((diff1 == 1 || diff1 == -1) && diff1 === diff2) {
        indices.push(i);
      }
    }

    this.setState({
      indices: indices
    });

    console.log(this.state.indices);

    if (indices.length == 0) {
      //document.getElementById("indicesArray").innerHTML = 'No results found';
    }
  };

  render() {
    return (
      <div className="runs">
        <h1>Check for consecutive numbers</h1>
        <p>{this.state.error}</p>
        <form onSubmit={this.handleSubmit}>
          Enter the integer one by one: <input type="text" id="numberInput" value={this.state.pending} onChange={this.handleChange} />
          <input type="submit" value="Submit" /> <button onClick={this.handleReset}>Reset</button>
        </form>
        <div className="runs__tally">
          <div className="runs__tally__confirmed">
            <ul>
              {this.state.integerArray.map(function(v, i) {
                return <li key={i}>{v}</li>;
              })}
              <li>{this.state.pending}</li>
            </ul>
          </div>
          <div className="runs__tally__results">{this.state.indices}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ConsecutiveRun />,
  document.getElementById('root')
);
