import React, { Component } from 'react';
import HomePage from './HomePage';
import WidtPage from './WidtPage';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/widt" component={WidtPage} />
        </div>
      </Router>
    );
  }
}

export default App;
