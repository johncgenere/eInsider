import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Fantasy from './Fantasy';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';
import Favorites from './Favorites';
import PointSystem from './PointSystem';
import LoL from './LoL';
import Dota from './Dota';
import Overwatch from './Overwatch';
import CSGO from './CSGO';

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

            <Route path ="/favorites" exact render = {
              () => {
                return (<Favorites />);
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

            <Route path="/leagueoflegends" exact render = {
              () => {
                return (<LoL />);
              }
            }/>

            <Route path="/dota2" exact render = {
              () => {
                return (<Dota />);
              }
            }/>

            <Route path="/overwatch" exact render = {
              () => {
                return (<Overwatch />);
              }
            }/>

            <Route path="/csgo" exact render = {
              () => {
                return (<CSGO />);
              }
            }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
