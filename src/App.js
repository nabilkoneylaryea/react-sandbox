import './App.css';

import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <header className="bg-white
      m-auto p-3 text-center">
        <div className="d-flex justify-content-center">
          <h1 className="flex-fill">Hello World</h1>
          <button type="button" className="btn btn-outline-dark rounded-circle m-auto">+</button>
        </div>
      </header>
      
    )
  }
}

export default App;
