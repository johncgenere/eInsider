import React from 'react';
import astralis from '../images/astralisIcon.png';
import thieves from '../images/100tIcon.png';
import eg from '../images/egIcon.png';
import fuel from '../images/fuelIcon.jpg';
import mibr from '../images/mibrIcon.png';
import nip from '../images/nipIcon.png';
import ny from '../images/nyexcelsiorIcon.png';
import og from '../images/ogIcon.png';
import outlaws from '../images/outlawsIcon.png';
import sk from '../images/skt1Icon.png';
import liquid from '../images/teamliquidIcon.png';

class GamerCard extends React.Component {
  render(){
    let icon;
    if(this.props.team === "Astralis")
      icon = astralis;
    else if(this.props.team === "Ninjas in Pyjamas")
      icon = nip;
    else if(this.props.team === "SK Telecom T1")
      icon = sk;
    else if(this.props.team === "Houston Outlaws")
      icon = outlaws;
    else if(this.props.team === "MIBR")
      icon = mibr;
    else if(this.props.team === "OG")
      icon = og;
    else if(this.props.team === "100 Thieves")
      icon = thieves;
    else if(this.props.team === "Dallas Fuel")
      icon = fuel;
    else if(this.props.team === "Team Liquid")
      icon = liquid;
    else if(this.props.team === "Evil Geniuses")
      icon = eg;
    else if(this.props.team === "New York Excelsior")
      icon = ny;

    return(
      <div className="card" style={{width: '32.5%'}}>
        <div className="ui comments">
          <div className="comment" style={{height: '50px', width: '110%'}}>
            <a className="avatar">
              <img src={icon} alt={this.props.team} style={{marginLeft: '10%', marginTop: '0%'}}/>
            </a>
            <div className="content" style={{marginTop: '3%'}}>
              <a className="author">{this.props.playerName}</a>
              <div className="metadata">
                <div className="date">{this.props.team} | {this.props.game}</div>
              </div>
              <p>
                Total Points: {this.props.score}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GamerCard;
