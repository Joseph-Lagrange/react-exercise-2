import React, { Component } from 'react';
import Head from './Head';
import Body from './Body';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Head />
        <Body />
      </main>
    );
  }
}

export default App;
