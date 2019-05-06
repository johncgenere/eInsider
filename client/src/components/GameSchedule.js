import React from 'react'

class GameSchedule extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  // convertTime = () => {
  //
  // }

  render(){
    return(
      <div className="card" style={{height: '40px'}}>
        <div className="ui comments">
          <div className="comment">
            <a className="avatar">
              <img src={this.props.icon} alt={this.props.title} style={{marginLeft: '15%'}}/>
            </a>
            <div className="content">
              <a className="author">{this.props.league}</a>
              <div className="metadata">
                <div className="date">@ some time</div>
              </div>
              <p>
                Tournament: {this.props.tournament} <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameSchedule;
