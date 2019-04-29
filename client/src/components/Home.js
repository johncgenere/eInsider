 import React from 'react';

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

    //  this.state
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
               <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
               <div className="ui secondary  menu" style={{width: '50%', marginLeft: '26%'}}>
                   <a className="item active" href="/">Home</a>
                   <a className="item" onClick={this.onFavoritesClick} href="/">Favorites</a>
                   <a className="item" onClick={this.onFantasyClick} href="/">Fantasy</a>
                   <a className="item" onClick={this.onProfileClick} href="/">Profile</a>
                   <div className="right menu">
                       <a className="ui item" onClick={this.onLogoutClick} href="/">Logout</a>
                   </div>
               </div>

               <div>
                  <h3 style={{marginTop: '3%', textAlign: 'center'}}> Schedule for Future Tournaments </h3>
                  <div className="ui divider" style={{marginLeft: '26%', marginRight: '25%'}}></div>
                  <p style={{textAlign: 'center'}}> API CALLS HERE FOR SCHEDULE </p>
               </div>

              <div className="ui medium images" style={{marginLeft: '26.5%', marginRight: '15%', marginTop: '3%', }}>
                <img src="https://hdqwalls.com/download/overwatch-game-all-heroes-1600x900.jpg" alt="Overwatch" onClick={this.onOverwatchClick} style={{borderRadius: '10px'}} />
                <img src="http://eskipaper.com/images/league-of-legends-wallpaper-8.jpg" alt="League Of Legends" onClick={this.onLoLClick} style={{borderRadius: '10px'}} />
                <img src="https://images4.alphacoders.com/210/210396.jpg" alt="Dota 2"onClick={this.onDotaClick} style={{borderRadius: '10px'}} />
                <img src="https://webgameapp.com/web/wallpapers/csgo-wallpapers/1600x900.jpg" alt="CS:GO" onClick={this.onCSGOClick} style={{borderRadius: '10px'}} />
              </div>
           </div>
       );
     } else {
         return (
             <div>
                 <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
                 <div className="ui secondary  menu" style={{width: '50%', marginLeft: '26%'}}>
                     <a className="item active" href="/">Home</a>
                     <div className="right menu">
                         <a className="ui item" onClick={this.onLoginClick} href="/">Login</a>
                     </div>
                 </div>

                 <div>
                    <h3 style={{marginTop: '3%', textAlign: 'center'}}> Schedule for Future Tournaments </h3>
                    <div className="ui divider" style={{marginLeft: '26%', marginRight: '25%'}}></div>
                    <p style={{textAlign: 'center'}}> API CALLS HERE FOR SCHEDULE </p>
                 </div>

                <div className="ui medium images" style={{marginLeft: '26.5%', marginRight: '15%', marginTop: '3%', }}>
                  <img src="https://hdqwalls.com/download/overwatch-game-all-heroes-1600x900.jpg" alt="Overwatch" onClick={this.onOverwatchClick} style={{borderRadius: '10px'}} />
                  <img src="http://eskipaper.com/images/league-of-legends-wallpaper-8.jpg" alt="League Of Legends" onClick={this.onLoLClick} style={{borderRadius: '10px'}} />
                  <img src="https://images4.alphacoders.com/210/210396.jpg" alt="Dota 2" onClick={this.onDotaClick} style={{borderRadius: '10px'}} />
                  <img src="https://webgameapp.com/web/wallpapers/csgo-wallpapers/1600x900.jpg" alt="CS:GO" onClick={this.onCSGOClick} style={{borderRadius: '10px'}} />
                </div>
             </div>
         );
     }
   }
 }

 export default Home;
