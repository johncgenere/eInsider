import React from 'react';
import logo from '../images/lollandscape.jpeg';

class LoL extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
    this.onUnfavoriteClick = this.onUnfavoriteClick.bind(this);
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
        <h1 style={{textAlign: 'center', marginTop: '3%'}} onClick={this.onHomeClick}>eInsider</h1>
        <img src={logo} alt="League of Legends" style={{height: '100px', width: '65%', marginLeft: '17.5%', borderRadius: '10px'}}/>
        <div className="ui tiny buttons" style={{marginLeft: '42%', marginTop: '2%'}}>
          <button className="ui button black" onClick={this.onFavoriteClick}><i className="star icon" />Favorite</button>
          <div className="or"></div>
          <button className="ui button" onClick={this.onUnfavoriteClick}><i className="star outline icon" />Unfavorite</button>
        </div>

        <div className="ui piled segment" style={{marginLeft: '20%', marginRight: '20%'}}>
          <h4 className="ui header">Schedule</h4>
          <p>Schedule will be under here so API CALLS HERE</p>
        </div>
      </div>
    );
  }
}

export default LoL;
