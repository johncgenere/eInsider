import React from 'react';

class PointSystem extends React.Component {
  constructor(props){
    super(props);

    this.onNameClick = this.onNameClick.bind(this);
  }

  onNameClick = (event) => {
    console.log('Go back');
    window.location.replace('/fantasy');
  }

  render(){
    return(
      <div style={{textAlign: 'center', marginLeft: '20%', marginRight: '20%', height: '100vh', marginTop: '17%'}}>
        <h1 style={{textAlign: 'center'}} onClick={this.onNameClick}>eInsider</h1>
        <h2>How To Get Points In Your Fantasy League</h2>
        <p>
          You can get points from the stats from the players you have selected
          to be on your team. The total number of points that you will see everyday
          will be an accumaltion of all the players on your team. These points will
          reset everyday.
        </p>
        <h2>How Are Points Given?</h2>
        <p>
          Each player has, even on different games have these stats:
          - Kills
          - K/D Ratio

          The way in which these stats will be interpreted will be as follows:
          - One point per kill
          - K/D Ratio * 10 = points
        </p>
      </div>
    );
  }
}

export default PointSystem;
