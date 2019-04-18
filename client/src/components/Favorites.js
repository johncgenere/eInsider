import React from 'react';

class Favorites extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFantasyClick = this.onFantasyClick.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);
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
        <div className="ui secondary  menu" style={{width: '50%', marginLeft: '26%'}}>
            <a className="item" onClick={this.onHomeClick}>Home</a>
            <a className="item active">Favorites</a>
            <a className="item" onClick={this.onFantasyClick}>Fantasy</a>
            <a className="item" onClick={this.onProfileClick}>Profile</a>
            <div className="right menu">
                <a className="ui item" >Logout</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
