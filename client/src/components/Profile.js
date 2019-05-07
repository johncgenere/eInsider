import React from 'react';
import '../styles/Profile.css';
import axios from 'axios';
import overwatch from '../images/overwatch.jpg';
import lol from '../images/lol.jpg';
import dota from '../images/dota.jpg';
import csgo from '../images/CSGO.jpg';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFavoritesClick = this.onFavoritesClick.bind(this);
    this.onFantasyClick = this.onFantasyClick.bind(this);
    this.onLoLClick = this.onLoLClick.bind(this);
    this.onOverwatchClick = this.onOverwatchClick.bind(this);
    this.onDotaClick = this.onDotaClick.bind(this);
    this.onCSGOClick = this.onCSGOClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);

    axios.defaults.withCredentials = true

    this.state  = {
      username : "",
      favorites : []
    }
    axios.get('https://einsider-backend.herokuapp.com/users/profile')
    .then(res => {
       const profile = res.data;
       this.setState({profile})
       //console.log(schedule);
    }).catch(error => {
      console.log(error.response)
    })

    axios.get('https://einsider-backend.herokuapp.com/users/profile')
    .then(res => {
       const favorites = res.data;
       this.setState({favorites})
       //console.log(schedule);
    }).catch(error => {
      console.log(error.response)
    })
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  onFavoritesClick = (event) => {
    console.log('my faves');
    window.location.replace('/favorites');
  }

  onFantasyClick = (event) => {
    console.log('Go to fantasy!');
    window.location.replace('/fantasy');
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

  onLogoutClick = (event) => {
    localStorage.clear();

    axios.delete('https://einsider-backend.herokuapp.com/users/logout')
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })

    window.location.replace('/');
  }

  render(){
    let table = [];
    let res = localStorage.getItem('session');
    let data = JSON.parse(res);
    let username = data['username'];

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

    return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
                <div className="ui secondary menu">
                    <a className="item" onClick={this.onHomeClick} href="/">Home</a>
                    <a className="item" onClick={this.onFavoritesClick} href="/favorites">Favorites</a>
                    <a className="item" onClick={this.onFantasyClick} href="/fantasy">Fantasy</a>
                    <a className="item active" href="/profile">Profile</a>
                    <div className="right menu">
                        <a className="ui item" onClick={this.onLogoutClick} href="/">Logout</a>
                    </div>
                </div>

                <div>
                  <h3 style={{marginTop: '3%', textAlign: 'center'}}> Your Information </h3>
                  <div className="ui divider"></div>
                  <p style={{textAlign: 'center'}}> Your Username: {username} </p>
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

export default Profile;
