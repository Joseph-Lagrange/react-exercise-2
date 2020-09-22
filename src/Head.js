import React, { Component } from 'react';
import './Head.scss';

class Head extends Component {
  render() {
    return (
      <div className="head">
        <Menu />
      </div>
    );
  }
}

function Menu() {
  return (
    <div>
      <h1>Store</h1>
    </div>
  );
}

export default Head;
