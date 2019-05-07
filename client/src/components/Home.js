 import React from 'react';
 import overwatch from '../images/overwatch.jpg';
 import lol from '../images/lol.jpg';
 import dota from '../images/dota.jpg';
 import csgo from '../images/CSGO.jpg';
 import owIcon from '../images/owIcon.png';
 import lolIcon from '../images/lolIcon.png';
 import dota2Icon from '../images/dota2icon.png';
 import csgoIcon from '../images/csgoIcon.png';
 import axios from 'axios';
 import GameSchedule from './GameSchedule';
 import '../styles/Home.css';

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
      schedule : {},
      lol: {},
      ow: {},
      dota2: {},
      csgo: {}
    }

    axios.get('http://localhost:7000/home')
    .then(res => {
       const schedule = res.data;
       this.setState({
         schedule,
         lol: schedule.lol,
         ow: schedule.ow,
         csgo: schedule.csgo,
         dota2: schedule.dota2
       })
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
     localStorage.clear();
     this.forceUpdate();

     axios.delete('http://localhost:7000/users/logout')
     .then(response => {
       console.log(response)
     }).catch(error => {
       console.log(error.response)
     })
   }

   checkIfInSession = () => {
     if(localStorage.getItem('session') !== null)
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
     let value = localStorage.getItem('session');
     let thing = JSON.parse(value);
     if(this.checkIfInSession()){
       return (
           <div>
              {console.log(thing.cookie)}
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
                  <div className="ui cards" style={{marginLeft: '27%', marginRight: '25%'}}>
                    <GameSchedule
                      title={this.state.ow.game}
                      tournament={this.state.ow.tournamentName}
                      league={this.state.ow.leagueName}
                      startTime={this.state.ow.startTime}
                      icon={owIcon}
                    />
                    <GameSchedule
                     title={this.state.lol.game}
                     tournament={this.state.lol.tournamentName}
                     league={this.state.lol.leagueName}
                     startTime={this.state.lol.startTime}
                     icon={lolIcon}
                    />
                    <GameSchedule
                      title={this.state.dota2.game}
                      tournament={this.state.dota2.tournamentName}
                      league={this.state.dota2.leagueName}
                      startTime={this.state.dota2.startTime}
                      icon={dota2Icon}
                    />
                    <GameSchedule
                      title={this.state.csgo.game}
                      tournament={this.state.csgo.tournamentName}
                      league={this.state.csgo.leagueName}
                      startTime={this.state.csgo.startTime}
                      icon={csgoIcon}
                    />
                  </div>
               </div>

              <h3 style={{marginTop: '3%', textAlign: 'center'}}> Individual Games </h3>
              <div className="ui divider"></div>
              <div className="ui medium images" style={{marginTop: '0%'}}>
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
                    <div className="ui cards" style={{marginLeft: '27%', marginRight: '25%'}}>
                      <GameSchedule
                        title={this.state.ow.game}
                        tournament={this.state.ow.tournamentName}
                        league={this.state.ow.leagueName}
                        startTime={this.state.ow.startTime}
                        icon={owIcon}
                      />
                      <GameSchedule
                       title={this.state.lol.game}
                       tournament={this.state.lol.tournamentName}
                       league={this.state.lol.leagueName}
                       startTime={this.state.lol.startTime}
                       icon={lolIcon}
                      />
                      <GameSchedule
                        title={this.state.dota2.game}
                        tournament={this.state.dota2.tournamentName}
                        league={this.state.dota2.leagueName}
                        startTime={this.state.dota2.startTime}
                        icon={dota2Icon}
                      />
                      <GameSchedule
                        title={this.state.csgo.game}
                        tournament={this.state.csgo.tournamentName}
                        league={this.state.csgo.leagueName}
                        startTime={this.state.csgo.startTime}
                        icon={csgoIcon}
                      />
                    </div>
                 </div>

                <h3 style={{marginTop: '3%', textAlign: 'center'}}> Individual Games </h3>
                <div className="ui divider"></div>
                <div className="ui medium images" style={{marginTop: '0%'}}>
                  <img src={overwatch} alt="Overwatch" onClick={this.onOverwatchClick} />
                  <img src={lol} alt="League Of Legends" onClick={this.onLoLClick} />
                  <img src={dota} alt="Dota 2"onClick={this.onDotaClick} />
                  <img src={csgo} alt="CS:GO" onClick={this.onCSGOClick} />
                </div>
             </div>
         );
     }
   }
 }

 export default Home;
