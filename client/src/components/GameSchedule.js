import React from 'react'

class GameSchedule extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <div className="card">
        <div className="ui comments">
          <div className="comment">
            <div className="content">
              <p className="author" style={{marginTop: '5%', textAlign: 'center'}}>{this.props.title}</p>
              <div className="ui divider" style={{width: '100%', marginLeft: '0%'}}/>
              <p style={{textAlign: 'center', marginBottom: '5%'}}>
                Tournament: {this.props.tournament} <br />
                League: {this.props.league}<br />
                @ {this.props.startTime}<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameSchedule;
