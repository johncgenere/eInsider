import React from 'react';

class LoL extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  render(){
    return(
      <div>
        <h1 style={{textAlign: 'center', marginTop: '3%'}} onClick={this.onHomeClick}>eInsider</h1>
        <h3 style={{textAlign: 'center'}}> Image Will Be Here </h3>
        <h1 style={{textAlign: 'center'}}> League of Legends </h1>

        <div class="ui piled segment" style={{marginLeft: '20%', marginRight: '20%'}}>
          <h4 class="ui header">Schedule</h4>
          <p>Schedule will be under here</p>
        </div>
      </div>
    );
  }
}

export default LoL;
