import React, { Component } from 'react';
import Body from './Body';
import './Head.scss';

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          id: 1,
          value: 0,
        },
      ],
    };
  }

  handleIncrement = (id) => {
    const updatedCounters = this.state.counters.map((counter) =>
      counter.id === id ? { id: id, value: counter.value + 1 } : counter
    );
    this.setState({
      counters: updatedCounters,
    });
  };

  render() {
    return (
      <div className="head">
        <div>
          <h1>Store</h1>

          <h1 style={{ float: 'right' }}>
            {this.state.counters.reduce(
              (acc, counter) => (acc += counter.value),
              0
            )}
          </h1>

          {this.state.counters.map((counter) => (
            <Body
              id={counter.id}
              key={counter.id}
              value={counter.value}
              handleIncrement={this.handleIncrement}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Head;
