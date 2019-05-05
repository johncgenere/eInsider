import React from 'react';
import logo from '../images/csgolandscape.jpeg';
import '../styles/Games.css';
import axios from 'axios';

class CSGO extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
    this.onUnfavoriteClick = this.onUnfavoriteClick.bind(this);

    this.state = {
      schedule : {}
    }

    axios.get('http://localhost:7000/home/csgo')
    .then(res => {
      const csgoData = res.data;
      this.setState({csgoData})
    })
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  onFavoriteClick = (event) => {
    console.log('fav');
  }

  onUnfavoriteClick = (event) => {
    console.log('unfav');
  }

  render(){
    return(
      <div>
        <h1 style={{marginTop: '3%'}} onClick={this.onHomeClick}>eInsider</h1>
        <img src={logo} alt="CS:GO" />
        <div className="ui tiny buttons">
          <button className="ui button black" onClick={this.onFavoriteClick}><i className="star icon" />Favorite</button>
          <div className="or"></div>
          <button className="ui button" onClick={this.onUnfavoriteClick}><i className="star outline icon" />Unfavorite</button>
        </div>

        <div className="ui piled segment">
          <h4 className="ui header">Schedule</h4>
          <p>{JSON.stringify(this.state.csgoData)}</p>
        </div>
      </div>
    );
  }
}

export default CSGO;
