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
    let link;
    if(this.props.team === "Astralis"){
      icon = astralis;
      link = "https://astralis.gg/";
    }
    else if(this.props.team === "Ninjas in Pyjamas"){
      icon = nip;
      link = "https://nip.gl/";
    }
    else if(this.props.team === "SK Telecom T1"){
      icon = sk;
      link = "http://www.sktt1.net/";
    }
    else if(this.props.team === "Houston Outlaws"){
      icon = outlaws;
      link = "https://outlaws.overwatchleague.com/home";
    }
    else if(this.props.team === "MIBR"){
      icon = mibr;
      link = "https://www.mibr.gg/";
    }
    else if(this.props.team === "OG"){
      icon = og;
      link = "http://ogs.gg/";
    }
    else if(this.props.team === "100 Thieves"){
      icon = thieves;
      link = "https://www.100thieves.com/";
    }
    else if(this.props.team === "Dallas Fuel"){
      icon = fuel;
      link = "https://fuel.overwatchleague.com/home";
    }
    else if(this.props.team === "Team Liquid"){
      icon = liquid;
      link = "https://twitter.com/TeamLiquid?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor";
    }
    else if(this.props.team === "Evil Geniuses"){
      icon = eg;
      link = "http://www.evilgeniuses.gg/";
    }
    else if(this.props.team === "New York Excelsior"){
      icon = ny;
      link = "https://excelsior.overwatchleague.com/home";
    }

    return(
      <div className="card" style={{width: '32.5%'}}>
        <div className="ui comments">
          <div className="comment" style={{height: '50px', width: '110%'}}>
            <a className="avatar" href={link} target="_blank">
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
