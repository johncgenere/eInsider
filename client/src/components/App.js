import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Fantasy from './Fantasy';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';
import PointSystem from './PointSystem';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Route path ="/" exact render = {
              () => {
                return (<Home />);
              }
            }/>

            <Route path ="/fantasy" exact render = {
              () => {
                return (<Fantasy />);
              }
            }/>

            <Route path ="/profile" exact render = {
              () => {
                return (<Profile />);
              }
            }/>

            <Route path="/login" exact render = {
              () => {
                return (<Login />);
              }
            }/>

            <Route path="/signup" exact render = {
              () => {
                return (<SignUp />);
              }
            }/>

            <Route path="/pointsystem" exact render = {
              () => {
                return (<PointSystem />);
              }
            }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
