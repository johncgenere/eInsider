import React from 'react';

class GamerCard extends React.Component {
  render(){
    return(
      <div className="card">
        <div class="ui comments">
          <div class="comment">
            <a class="avatar">
              <img src={this.props.teamIcon} alt={this.props.team} />
            </a>
            <div class="content">
              <a class="author">{this.props.playerName}</a>
              <div class="metadata">
                <div class="date">{this.props.team}</div>
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
