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

    this.state = {
      randomizedScore : []
    }

    axios.get('http://localhost:7000/fantasy')
    .then(res => {
       const randomizedScore = res.data;
       this.setState({randomizedScore})
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
      return (
          <div>
              <h1 style={{marginTop: '3%'}}>eInsider</h1>
              <div className="ui secondary menu" style={{width: '50%', marginLeft: '26%'}}>
                  <a className="item" onClick={this.onHomeClick} href="/">Home</a>
                  <a className="item" onClick={this.onFavoritesClick} href="/favorites">Favorites</a>
                  <a className="item active" href="/">Fantasy</a>
                  <a className="item" onClick={this.onProfileClick} href="/profile">Profile</a>
                  <div className="right menu">
                      <a className="ui item" onClick={this.onHomeClick} href="/">Logout</a>
                  </div>
              </div>

              <div>
                 <h3 style={{marginTop: '3%', textAlign: 'center'}}> Current Fantasy Scores
                 <i className="question circle outline icon" onClick={this.onPointSystemClick}></i></h3>
                 <div className="ui divider" style={{marginLeft: '26%', marginRight: '25%'}}></div>
                 <div className="ui cards" style={{marginLeft: '27%', marginRight: '25%'}}>
                   <GamerCard
                     playerName="EncryptedLimit"
                     team="OpTic Gaming"
                     score="100"
                   />
                 </div>    
                 <p style={{textAlign: 'center'}}> {JSON.stringify(this.state.randomizedScore)} </p>
              </div>
          </div>
      );
  }
}

export default Home;
