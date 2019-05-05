 import React from 'react';
 import overwatch from '../images/overwatch.jpg';
 import lol from '../images/lol.jpg';
 import dota from '../images/dota.jpg';
 import csgo from '../images/CSGO.jpg';
 import '../styles/Home.css';
 import axios from 'axios';
 import GameSchedule from './GameSchedule';

 let session = true;

 class Home extends React.Component {
   constructor(props){
     super(props);

     this.onFavoritesClick = this.onFavoritesClick.bind(this);
     this.onFantasyClick = this.onFantasyClick.bind(this);
     this.onProfileClick = this.onProfileClick.bind(this);
     this.onLoginClick = this.onLoginClick.bind(this);
     this.onLogoutClick = this.onLogoutClick.bind(this);
     this.onLoLClick = this.onLoLClick.bind(this);
     this.onOverwatchClick = this.onOverwatchClick.bind(this);
     this.onDotaClick = this.onDotaClick.bind(this);
     this.onCSGOClick = this.onCSGOClick.bind(this);

    this.state = {
      schedule : {}
    }

    axios.get('http://localhost:7000/home')
    .then(res => {
       const schedule = res.data;
       this.setState({schedule})
    })
   }

   onFavoritesClick = (event) => {
     console.log('my faves');
     window.location.replace('/favorites');
   }

   onFantasyClick = (event) => {
     console.log('Go to fantasy!');
     window.location.replace('/fantasy');
   }

   onProfileClick = (event) => {
     console.log('Go to profile');
     window.location.replace('/profile');
   }

   onLoginClick = (event) => {
     console.log('Go to login');
     window.location.replace('/login');
   }

   onLogoutClick = (event) => {
     session = false;
     this.forceUpdate();
   }

   checkIfInSession = () => {
     if(session)
       return true;
     return false;
   }

   onLoLClick = (event) => {
     console.log('league');
     window.location.replace('/leagueoflegends');
   }

   onOverwatchClick = (event) => {
     console.log('overwatch');
     window.location.replace('/overwatch');
   }

   onDotaClick = (event) => {
     console.log('dota2');
     window.location.replace('/dota2');
   }

   onCSGOClick = (event) => {
     console.log('csgo');
     window.location.replace('/csgo');
   }

   render(){

     if(this.checkIfInSession()){
       return (
           <div>
               <h1 style={{marginTop: '3%'}}>eInsider</h1>
               <div className="ui secondary menu">
                   <a className="item active" href="/">Home</a>
                   <a className="item" onClick={this.onFavoritesClick} href="/favorites">Favorites</a>
                   <a className="item" onClick={this.onFantasyClick} href="/fantasy">Fantasy</a>
                   <a className="item" onClick={this.onProfileClick} href="/profile">Profile</a>
                   <div className="right menu">
                       <a className="ui item" onClick={this.onLogoutClick}>Logout</a>
                   </div>
               </div>

               <div>
                  <h3 style={{marginTop: '3%', textAlign: 'center'}}> Schedule for Future Tournaments </h3>
                  <div className="ui divider"></div>
                  <div className="ui cards" style={{width: '100%', marginLeft: '24.6%', marginRight: '25%'}}>
                    <GameSchedule title="League"/>
                    <GameSchedule title="Overwatch"/>
                    <GameSchedule title="CSGO"/>
                    <GameSchedule title="Dota 2"/>
                  </div>
                  <br /><br /><br />
                  <p style={{textAlign: 'center'}}>League of Legends: {JSON.stringify(this.state.schedule.lol || {}.game)}</p>
                  <p style={{textAlign: 'center'}}>Overwatch: {JSON.stringify(this.state.schedule.ow)}</p>
                  <p style={{textAlign: 'center'}}>Dota 2: {JSON.stringify(this.state.schedule.dota2)}</p>
                  <p style={{textAlign: 'center'}}>CSGO: {JSON.stringify(this.state.schedule.csgo)}</p>
               </div>

              <div className="ui medium images">
                <img src={overwatch} alt="Overwatch" onClick={this.onOverwatchClick} />
                <img src={lol} alt="League Of Legends" onClick={this.onLoLClick} />
                <img src={dota} alt="Dota 2"onClick={this.onDotaClick} />
                <img src={csgo} alt="CS:GO" onClick={this.onCSGOClick} />
              </div>
           </div>
       );
     } else {
         return (
             <div>
                 <h1 style={{marginTop: '3%'}}>eInsider</h1>
                 <div className="ui secondary menu">
                     <a className="item active" href="/">Home</a>
                     <div className="right menu">
                         <a className="ui item" onClick={this.onLoginClick} href="/login">Login</a>
                     </div>
                 </div>

                 <div>
                    <h3 style={{marginTop: '3%', textAlign: 'center'}}> Schedule for Future Tournaments </h3>
                    <div className="ui divider"></div>
                    <p style={{textAlign: 'center'}}> {console.log(JSON.stringify(this.state.schedule))} </p>
                 </div>

                <div className="ui medium images">
                  <img src={overwatch} alt="Overwatch" onClick={this.onOverwatchClick} />
                  <img src={lol} alt="League Of Legends" onClick={this.onLoLClick} />
                  <img src={dota} alt="Dota 2" onClick={this.onDotaClick} />
                  <img src={csgo} alt="CS:GO" onClick={this.onCSGOClick} />
                </div>
             </div>
         );
     }
   }
 }

 export default Home;
