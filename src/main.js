import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles/main.css';

class App extends Component {
  render() {
    return <h1>hello~</h1>;
  }
}

render(
  <App />,
  document.getElementById('root')
);
