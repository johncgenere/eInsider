import React from 'react';

class Dota extends React.Component {
  render(){
    return(
      <div>
        <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
        <h3 style={{textAlign: 'center'}}> Image Will Be Here </h3>
        <h1 style={{textAlign: 'center'}}> Dota 2 </h1>

        <div class="ui piled segment" style={{marginLeft: '20%', marginRight: '20%'}}>
          <h4 class="ui header">Scores</h4>
          <p>Scores will be under here</p>
        </div>

        <div class="ui piled segment" style={{marginLeft: '20%', marginRight: '20%'}}>
          <h4 class="ui header">Schedule</h4>
          <p>Schedule will be under here</p>
        </div>
      </div>
    );
  }
}

export default Dota;
