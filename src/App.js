import React, { Component } from 'react';
import './css/App.css';
import Users from './container/Users';
import House from './container/House';
import Page404 from './Page404';
import NavBar from './components/NavBar';
import Home from './container/Home';


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Appotter</h1>
        </header>
        <div className="App-intro">
          <Router>
            <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/houseUsers" component={House} />
                <Route path="/*" component={Page404} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
