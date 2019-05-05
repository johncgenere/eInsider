import React from 'react';
import logo from '../images/lollandscape.jpeg';
import '../styles/Games.css';
import axios from 'axios';

class LoL extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
    this.onUnfavoriteClick = this.onUnfavoriteClick.bind(this);

    this.state = {
      schedule: {}
    }

    axios.get('http://localhost:7000/home/lol')
    .then(res => {
      const lolData = res.data;
      this.setState({lolData})
    })
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  onFavoriteClick = (event) => {
    console.log('fav');

    axios.post('http://localhost:7000/favorites', {
      "lol": true
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })
  }

  onUnfavoriteClick = (event) => {
    console.log('unfav');

    axios.post('http://localhost:7000/favorites', {
      "lol": false
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })
  }

  render(){
    return(
      <div>
        <h1 style={{marginTop: '3%'}} onClick={this.onHomeClick}>eInsider</h1>
        <img src={logo} alt="League of Legends" />
        <div className="ui tiny buttons">
          <button className="ui button black" onClick={this.onFavoriteClick}><i className="star icon" />Favorite</button>
          <div className="or"></div>
          <button className="ui button" onClick={this.onUnfavoriteClick}><i className="star outline icon" />Unfavorite</button>
        </div>

        <div className="ui piled segment">
          <h4 className="ui header">Schedule</h4>
          <p>{JSON.stringify(this.state.lolData)}</p>
        </div>
      </div>
    );
  }
}

export default LoL;
