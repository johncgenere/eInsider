import React from 'react'

class GameSchedule extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="card">
        <div class="ui comments">
          <div class="comment">
            <a class="avatar">
              <img src="/" alt="nah" />
            </a>
            <div class="content">
              <a class="author">Stevie Feliciano</a>
              <div class="metadata">
                <div class="date">2 days ago</div>
                <div class="rating">
                  <i class="star icon"></i>
                  5 Faves
                </div>
              </div>
              <p>
                Hey guys, I hope this example comment is helping you read this documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameSchedule;
