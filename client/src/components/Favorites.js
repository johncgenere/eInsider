import React from 'react';
import '../styles/Favorites.css';
import axios from 'axios';
import overwatch from '../images/overwatch.jpg';
import lol from '../images/lol.jpg';
import dota from '../images/dota.jpg';
import csgo from '../images/CSGO.jpg';

class Favorites extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFantasyClick = this.onFantasyClick.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);
    this.onLoLClick = this.onLoLClick.bind(this);
    this.onOverwatchClick = this.onOverwatchClick.bind(this);
    this.onDotaClick = this.onDotaClick.bind(this);
    this.onCSGOClick = this.onCSGOClick.bind(this);

    axios.defaults.withCredentials = true

    this.state = {
      favs : {}
    }

    axios.get('https://einsider-backend.herokuapp.com/users/profile')
    .then(res => {
       console.log(res);
      //  this.setState({favs: favorites})
    }).catch(error => {
      console.log(error.response)
    })
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  onFantasyClick = (event) => {
    console.log('Go to fantasy!');
    window.location.replace('/fantasy');
  }

  onProfileClick = (event) => {
    console.log('Go to profile');
    window.location.replace('/profile');
  }

  onLoLClick = (event) => {
    console.log('league');
    window.location.replace('/leagueoflegends');
  }

  onOverwatchClick = (event) => {
    console.log('overwatch');
    window.location.replace('/overwatch');
  }

  onDotaClick = (event) => {
    console.log('dota2');
    window.location.replace('/dota2');
  }

  onCSGOClick = (event) => {
    console.log('csgo');
    window.location.replace('/csgo');
  }

  render(){
    let table = [];
    let res = localStorage.getItem('session');
    let data = JSON.parse(res);
    console.log(data['ow']);

    if(data['ow'] === true){
      table.push(<img src={overwatch} alt="Overwatch" onClick={this.onOverwatchClick} />)
    }
    if(data['lol'] === true){
      table.push(<img src={lol} alt="League of Legends" onClick={this.onLoLClick} />)
    }
    if(data['dota2'] === true){
      table.push(<img src={dota} alt="Dota 2" onClick={this.onDotaClick} />)
    }
    if(data['csgo'] === true){
      table.push(<img src={csgo} alt="Counter Strike:Global Strike" onClick={this.onCSGOClick} />)
    }
    //
    // checkTable = () => {
    //   if(table.length === 0)
    //     return "No favorites yet!"
    //   return table;
    // }
    console.log(table);

    return(
      <div>
        <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
        <div className="ui secondary menu">
            <a className="item" onClick={this.onHomeClick} href="/">Home</a>
            <a className="item active" href="/favorites">Favorites</a>
            <a className="item" onClick={this.onFantasyClick} href="/fantasy">Fantasy</a>
            <a className="item" onClick={this.onProfileClick} href="/profile">Profile</a>
        </div>

        <div>
          <h3 style={{marginTop: '3%', textAlign: 'center'}}> Your Favorites </h3>
          <div className="ui divider"></div>
          <div className="ui medium images" style={{marginTop: '0%'}}>
            {table}
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
