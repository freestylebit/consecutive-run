'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('./styles.scss');

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
          pending: '',
          error: 'That\'s not a number!'
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

    if (indices.length == 0) {
      this.setState({
        indices: 'No results found'
      });
    }
  };

  render() {
    let indices = this.state.indices;
    if (typeof indices === 'object') {
      indices = indices.join(', ');
    }

    return (
      <div className="runs">
        <h1>Check for consecutive numbers</h1>
        
        <form onSubmit={this.handleSubmit}>
          Enter a number: <input type="text" id="numberInput" value={this.state.pending} onChange={this.handleChange} autoComplete="off" />
          <input type="submit" value="Submit" /> <button onClick={this.handleReset}>Reset</button>
        </form>

        <div className="runs__error">
          <span>{this.state.error}</span>
        </div>

        <div className="runs__tally">
          <ul>
            {this.state.integerArray.map((v, i) => {
              let flag = '';
              if (this.state.indices.indexOf(i) !== -1) {
                flag = 'flag';
              }
              return <li key={i} className={flag}><span className="runs__tally__entry">{i}</span> <span className="runs__tally__value">{v}</span></li>;
            })}
            <li><span className="runs__tally__entry">V</span> <span className="runs__tally__value">{this.state.pending}</span></li>
          </ul>
        </div>
        <div className="runs__indices"><strong>Aggregated list</strong>: {indices}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <ConsecutiveRun />,
  document.getElementById('container')
);
