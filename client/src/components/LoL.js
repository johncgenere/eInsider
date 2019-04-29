import React from 'react';

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
    console.log('favvvvvv');
  }

  onUnfavoriteClick = (event) => {
    console.log('f that');
  }

  render(){
    return(
      <div>
        <h1 style={{textAlign: 'center', marginTop: '3%'}} onClick={this.onHomeClick}>eInsider</h1>
        <h3 style={{textAlign: 'center'}}> Image Will Be Here </h3>
        <h1 style={{textAlign: 'center'}}> League of Legends </h1>
        <div className="ui tiny buttons" style={{marginLeft: '42%'}}>
          <button className="ui button black" onClick={this.onFavoriteClick}><i className="star icon yellow" />Favorite</button>
          <div className="or"></div>
          <button className="ui button" onClick={this.onUnfavoriteClick}><i className="star outline icon yellow" />Unfavorite</button>
        </div>

        <div className="ui piled segment" style={{marginLeft: '20%', marginRight: '20%'}}>
          <h4 className="ui header">Schedule</h4>
          <p>Schedule will be under here</p>
        </div>
      </div>
    );
  }
}

export default LoL;
