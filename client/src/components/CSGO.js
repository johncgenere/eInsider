import React from 'react';
import logo from '../images/csgolandscape.jpeg';
import '../styles/Games.css';
import axios from 'axios';
import GameSchedule from './GameSchedule';
import icon from '../images/csgoIcon.png';

class CSGO extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
    this.onUnfavoriteClick = this.onUnfavoriteClick.bind(this);

    axios.defaults.withCredentials = true

    this.state = {
      schedule : []
    }

    axios.get('https://einsider-backend.herokuapp.com/home/csgo')
    .then(res => {
      const csgoData = res.data;
      this.setState({schedule: csgoData})
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
    data["csgo"] = true;
    localStorage.setItem('session', JSON.stringify(data));

    axios.post('https://einsider-backend.herokuapp.com/users/favorites', {
      "csgo": true
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
    data["csgo"] = false;
    localStorage.setItem('session', JSON.stringify(data));

    axios.post('https://einsider-backend.herokuapp.com/users/favorites', {
      "csgo": false
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })
  }

  render(){
    let table = [];
    let favs = [];
    for(var i = 0; i < this.state.schedule.length; i++){
      table.push(<GameSchedule
        title = {this.state.schedule[i].game}
        tournament = {this.state.schedule[i].tournamentName}
        league = {this.state.schedule[i].leagueName}
        startTime = {this.state.schedule[i].startTime}
        icon = {icon}
      />)
    }

    if(localStorage.getItem('session') !== null){
      favs.push(<div className="ui tiny buttons">
                  <button className="ui button black" onClick={this.onFavoriteClick}><i className="star icon" />Favorite</button>
                  <div className="or"></div>
                  <button className="ui button" onClick={this.onUnfavoriteClick}><i className="star outline icon" />Unfavorite</button>
                </div>)
    }

    return(
      <div className="back" style={{height: '100%'}}>
      <br />
        <h1 className="title" onClick={this.onHomeClick}>eInsider</h1>
        <img src={logo} alt="CS:GO" />
        {favs}

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

export default CSGO;
