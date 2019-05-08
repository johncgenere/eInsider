import React from 'react';
import axios from 'axios';
import GamerCard from './GamerCard';

class Home extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);
    this.onPointSystemClick = this.onPointSystemClick.bind(this);
    this.onFavoritesClick = this.onFavoritesClick.bind(this);

    axios.defaults.withCredentials = true

    this.state = {
      players : []
    }

    axios.get('https://einsider-backend.herokuapp.com/fantasy')
    .then(res => {
       const randomizedScore = res.data;
       this.setState({players: randomizedScore})
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

  onProfileClick = (event) => {
    console.log('Go to profile');
    window.location.replace('/profile');
  }

  onPointSystemClick = (event) => {
    console.log('Show me');
    window.location.replace('./pointsystem');
  }

  render(){
        let table = [];
        for(var i = 0; i < this.state.players.length; i++){
          table.push(<GamerCard
            playerName = {this.state.players[i].playerName}
            team = {this.state.players[i].team}
            game = {this.state.players[i].game}
            score = {this.state.players[i].score}
          />)
        }
        return (
          <div>
              <h1 style={{marginTop: '3%'}}>eInsider</h1>
              <div className="ui secondary menu" style={{width: '50%', marginLeft: '26%'}}>
                  <a className="item" onClick={this.onHomeClick} href="/">Home</a>
                  <a className="item" onClick={this.onFavoritesClick} href="/favorites">Favorites</a>
                  <a className="item active" href="/">Fantasy</a>
                  <a className="item" onClick={this.onProfileClick} href="/profile">Profile</a>
              </div>

              <div>
                 <h3 style={{marginTop: '3%', textAlign: 'center'}}> Current Fantasy Scores
                 <i className="question circle outline icon" onClick={this.onPointSystemClick}></i></h3>
                 <div className="ui divider" style={{marginLeft: '26%', marginRight: '25%'}}></div>
                 <div className="ui cards" style={{marginLeft: '25%'}}>
                   {table}
                 </div>
              </div>
          </div>
      );
  }
}

export default Home;
