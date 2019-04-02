 import React from 'react';

 class Home extends React.Component {
   constructor(props){
     super(props);

     this.onFantasyClick = this.onFantasyClick.bind(this);
     this.onProfileClick = this.onProfileClick.bind(this);
     this.onLoginClick = this.onLoginClick.bind(this);
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

   render(){
       return (
           <div>
               <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
               <div className="ui secondary  menu" style={{width: '50%', marginLeft: '26%'}}>
                   <a className="item active">Home</a>
                   <a className="item" onClick={this.onFantasyClick}>Fantasy</a>
                   <a className="item" onClick={this.onProfileClick}>Profile</a>
                   <div className="right menu">
                       <a className="ui item" onClick={this.onLoginClick}>Login</a>
                   </div>
               </div>

               <div class="ui grid" style={{width: '50%', marginLeft: '25%'}}>
                   <div class="twelve wide stretched column">
                       <div class="ui segment">
                           <h1>Scores</h1>
                           <div class="ui placeholder">
                               <div class="paragraph">
                                   <div class="line"></div>
                                   <div class="line"></div>
                                   <div class="line"></div>
                                   <div class="line"></div>
                                   <div class="line"></div>
                               </div>
                               <div class="paragraph">
                                   <div class="line"></div>
                                   <div class="line"></div>
                                   <div class="line"></div>
                               </div>
                           </div>
                           <h1>Schedule</h1>
                           <div class="ui placeholder">
                               <div class="paragraph">
                                   <div class="line"></div>
                                   <div class="line"></div>
                                   <div class="line"></div>
                                   <div class="line"></div>
                                   <div class="line"></div>
                               </div>
                               <div class="paragraph">
                                   <div class="line"></div>
                                   <div class="line"></div>
                                   <div class="line"></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="four wide column">
                       <div class="ui vertical fluid right tabular menu">
                           <a class="active item" style={{width: '150px'}}>LoL<i class="star icon" style={{color: 'yellow'}}></i></a>
                           <a class="item" style={{width: '150px'}}>Dota 2 <i class="star icon" style={{color: 'yellow'}}></i></a>
                           <a class="item" style={{width: '150px'}}>Overwatch<i class="star outline icon" style={{color: 'yellow'}}></i></a>
                           <a class="item" style={{width: '150px'}}>CSGO<i class="star outline icon" style={{color: 'yellow'}}></i></a>
                           <a class="item" style={{width: '150px'}}>Call of Duty<i class="star outline icon" style={{color: 'yellow'}}></i></a>
                           <a class="item" style={{width: '150px'}}>Quake<i class="star outline icon" style={{color: 'yellow'}}></i></a>
                       </div>
                   </div>
               </div>
           </div>
       );
   }
 }

 export default Home;
