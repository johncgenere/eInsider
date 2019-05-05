import React from 'react';
import '../styles/Profile.css';
import axios from 'axios';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFavoritesClick = this.onFavoritesClick.bind(this);
    this.onFantasyClick = this.onFantasyClick.bind(this);

    this.state  = {
      profile : {},
      favorites : []
    }
    axios.get('http://localhost:7000/users/profile')
    .then(res => {
       const profile = res.data;
       this.setState({profile})
       //console.log(schedule);
    }).catch(error => {
      console.log(error.response)
    })

    axios.get('http://localhost:7000/users/profile')
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



  render(){
    return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
                <div className="ui secondary menu">
                    <a className="item" onClick={this.onHomeClick} href="/">Home</a>
                    <a className="item" onClick={this.onFavoritesClick} href="/favorites">Favorites</a>
                    <a className="item" onClick={this.onFantasyClick} href="/fantasy">Fantasy</a>
                    <a className="item active" href="/profile">Profile</a>
                    <div className="right menu">
                        <a className="ui item" onClick={this.onHomeClick}>Logout</a>
                    </div>
                </div>

                <div>
                  <h3 style={{marginTop: '3%', textAlign: 'center'}}> Your Information </h3>
                  <div className="ui divider"></div>
                  <p style={{textAlign: 'center'}}> {JSON.stringify(this.state.profile)} </p>
                </div>

                <div>
                   <h3 style={{marginTop: '3%', textAlign: 'center'}}> Your Favorites </h3>
                   <div className="ui divider"></div>
                   <p style={{textAlign: 'center'}}> {JSON.stringify(this.state.favorites)} </p>
                </div>
            </div>
        );
  }
}

export default Profile;
