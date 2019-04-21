import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);
    this.onPointSystemClick = this.onPointSystemClick.bind(this);
    this.onFavoritesClick = this.onFavoritesClick.bind(this);
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
              <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
              <div className="ui secondary  menu" style={{width: '50%', marginLeft: '26%'}}>
                  <a className="item" onClick={this.onHomeClick}>Home</a>
                  <a className="item" onClick={this.onFavoritesClick}>Favorites</a>
                  <a className="item active">Fantasy</a>
                  <a className="item" onClick={this.onProfileClick}>Profile</a>
                  <div className="right menu">
                      <a className="ui item" onClick={this.onHomeClick}>Logout</a>
                  </div>
              </div>

              <div>
                 <h3 style={{marginTop: '3%', textAlign: 'center'}}> Current Fantasy Scores
                 <i className="question circle outline icon" onClick={this.onPointSystemClick}></i></h3>
                 <div className="ui divider" style={{marginLeft: '26%', marginRight: '25%'}}></div>
                 <p style={{textAlign: 'center'}}> API CALLS HERE FOR PLAYER INFO AND RANDOMIZED PLAYER SCORE </p>
              </div>
          </div>
      );
  }
}

export default Home;
