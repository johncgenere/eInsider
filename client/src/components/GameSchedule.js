import React from 'react'

class GameSchedule extends React.Component {
  render(){
    let link = "";
    if(this.props.title === "League of Legends")
      link = "https://nexus.leagueoflegends.com/en-us/esports/";
    else if(this.props.title === "Overwatch")
      link = "https://overwatchleague.com/en-us/";
    else if(this.props.title === "Dota 2")
      link = "http://blog.dota2.com/?l=english";
    else
      link = "https://blog.counter-strike.net/";

    return(
      <div className="card" style={{height: '40px'}}>
        <div className="ui comments">
          <div className="comment">
            <a className="avatar" href={link} target="_blank">
              <img src={this.props.icon} alt={this.props.title} style={{marginLeft: '15%'}}/>
            </a>
            <div className="content">
              <a className="author">{this.props.league}</a>
              <div className="metadata">
                <div className="date">@ {this.props.startTime}</div>
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
