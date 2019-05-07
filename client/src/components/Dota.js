import React from 'react';
import logo from '../images/dotalandscape.jpeg';
import '../styles/Games.css';
import axios from 'axios';
import icon from '../images/dota2icon.png';
import GameSchedule from './GameSchedule';

class Dota extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
    this.onUnfavoriteClick = this.onUnfavoriteClick.bind(this);

    axios.defaults.withCredentials = true

    this.state = {
      schedule : []
    }

    axios.get('http://localhost:7000/home/dota2')
    .then(res => {
      const dotaData = res.data;
      this.setState({schedule: dotaData})
    })
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  onFavoriteClick = (event) => {
    console.log('fav');
    let res = localStorage.getItem('session');
    let data = JSON.parse(res);
    data["dota2"] = true;
    localStorage.setItem('session', JSON.stringify(data));

    axios.post('http://localhost:7000/users/favorites', {
      "dota2": true
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })
  }

  onUnfavoriteClick = (event) => {
    console.log('unfav');
    let res = localStorage.getItem('session');
    let data = JSON.parse(res);
    data["dota2"] = false;
    localStorage.setItem('session', JSON.stringify(data));

    axios.post('http://localhost:7000/users/favorites', {
      "dota2": false
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })
  }

  render(){
    let table = [];
    for(var i = 0; i < this.state.schedule.length; i++){
      table.push(<GameSchedule
        title = {this.state.schedule[i].game}
        tournament = {this.state.schedule[i].tournamentName}
        league = {this.state.schedule[i].leagueName}
        startTime = {this.state.schedule[i].startTime}
        icon = {icon}
      />)
    }

    return(
      <div>
        <h1 className="title" style={{marginTop: '3%'}} onClick={this.onHomeClick}>eInsider</h1>
        <img src={logo} alt="Dota 2"/>
        <div className="ui tiny buttons">
          <button className="ui button black" onClick={this.onFavoriteClick}><i className="star icon" />Favorite</button>
          <div className="or"></div>
          <button className="ui button" onClick={this.onUnfavoriteClick}><i className="star outline icon" />Unfavorite</button>
        </div>

        <div className="ui piled segment">
          <h4 className="ui header">Schedule</h4>
          <div className="ui cards" style={{marginLeft: '10%', marginRight: '0%'}}>
            {table}
          </div>
        </div>
      </div>
    );
  }
}

export default Dota;
