import React from 'react';
import '../styles/Favorites.css';
import axios from 'axios';

class Favorites extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFantasyClick = this.onFantasyClick.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);

    this.state = {
      favorites : {}
    }

    axios.get('http://localhost:7000/users/favorites')
    .then(res => {
       const favorites = res.data;
       this.setState({favorites})
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

  // onLogoutClick = (event) => {
  //   session = false;
  //   this.forceUpdate();
  // }

  render(){
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
          {/* <p style={{textAlign: 'center'}}> {JSON.stringify(this.state.favorites)} </p> */}
          <p style={{textAlign: 'center'}}> {JSON.stringify(this.state.favorites)} </p>
        </div>
      </div>
    );
  }
}

export default Favorites;
