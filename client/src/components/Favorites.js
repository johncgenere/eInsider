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

    this.state = {
      favs : {}
    }

    axios.get('http://localhost:7000/users/profile')
    .then(res => {
       const favorites = res.data;
       this.setState({favs: favorites})
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

  // onLogoutClick = (event) => {
  //   session = false;
  //   this.forceUpdate();
  // }

  render(){
    // let table = [];
    // for(var i = 0; i < this.state.favs.length; i++){
    //   table.push(<img src={overwatch} alt="Overwatch" onClick={this.onOverwatchClick} />)
    // }

    return(
      <div>
        <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
        <div className="ui secondary menu">
            <a className="item" onClick={this.onHomeClick} href="/">Home</a>
            <a className="item active" href="/favorites">Favorites</a>
            <a className="item" onClick={this.onFantasyClick} href="/fantasy">Fantasy</a>
            <a className="item" onClick={this.onProfileClick} href="/profile">Profile</a>
            <div className="right menu">
                <a className="ui item" href="/">Logout</a>
            </div>
        </div>

        <div>
          <h3 style={{marginTop: '3%', textAlign: 'center'}}> Your Favorites </h3>
          <div className="ui divider"></div>
          <p style={{textAlign: 'center'}}> {JSON.stringify(this.state.favs)} </p>
        </div>
      </div>
    );
  }
}

export default Favorites;
