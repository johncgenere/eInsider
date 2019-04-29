import React from 'react';

class CSGO extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  onFavoriteClick = (event) => {
    console.log('favvvvvv');
  }

  render(){
    return(
      <div>
        <h1 style={{textAlign: 'center', marginTop: '3%'}} onClick= {this.onHomeClick}>eInsider</h1>
        <h3 style={{textAlign: 'center'}}> Image Will Be Here </h3>
        <h1 style={{marginLeft: '47%'}}> CS:GO
        <button className="ui button black" style={{marginLeft: '33%'}} onClick={this.onFavoriteClick}><i className="star outline icon yellow" />Favorite</button></h1>

        <div className="ui piled segment" style={{marginLeft: '20%', marginRight: '20%'}}>
          <h4 className="ui header">Schedule</h4>
          <p>Schedule will be under here</p>
        </div>
      </div>
    );
  }
}

export default CSGO;
