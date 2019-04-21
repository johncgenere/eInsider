import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFavoritesClick = this.onFavoritesClick.bind(this);
    this.onFantasyClick = this.onFantasyClick.bind(this);
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

  render(){
    return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
                <div className="ui secondary  menu" style={{width: '50%', marginLeft: '26%'}}>
                    <a className="item" onClick={this.onHomeClick}>Home</a>
                    <a className="item" onClick={this.onFavoritesClick}>Favorites</a>
                    <a className="item" onClick={this.onFantasyClick}>Fantasy</a>
                    <a className="item active">Profile</a>
                    <div className="right menu">
                        <a className="ui item" onClick={this.onHomeClick}>Logout</a>
                    </div>
                </div>

                <div>
                  <h3 style={{marginTop: '3%', textAlign: 'center'}}> Your Information </h3>
                  <div className="ui divider" style={{marginLeft: '26%', marginRight: '25%'}}></div>
                  <p style={{textAlign: 'center'}}> API CALLS HERE FOR USER INFO </p>
                </div>

                <div>
                   <h3 style={{marginTop: '3%', textAlign: 'center'}}> Your Favorites </h3>
                   <div className="ui divider" style={{marginLeft: '26%', marginRight: '25%'}}></div>
                   <p style={{textAlign: 'center'}}> API CALLS HERE FOR FAVORITES </p>
                </div>
            </div>
        );
  }
}

export default Profile;
