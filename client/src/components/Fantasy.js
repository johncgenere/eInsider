import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);
    this.onPointSystemClick = this.onPointSystemClick.bind(this);
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  onProfileClick = (event) => {
    console.log('Go to profile');
    window.location.replace('/profile');
  }

  onPointSystemClick = (event) => {
    console.log('Show me');
    window.location.replace('./pointsystem');
  }

  render(){
      return (
          <div>
              <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
              <div className="ui secondary  menu" style={{width: '50%', marginLeft: '26%'}}>
                  <a className="item" onClick={this.onHomeClick}>Home</a>
                  <a className="item active">Fantasy</a>
                  <a className="item" onClick={this.onProfileClick}>Profile</a>
                  <div className="right menu">
                      <a className="ui item" onClick={this.onHomeClick}>Logout</a>
                  </div>
              </div>

              <div class="ui grid" style={{width: '69%', marginLeft: '25%'}}>
                  <div class="twelve wide stretched column" style={{width: '100%'}}>
                      <div class="ui segment">
                          <button className="ui button" onClick={this.onPointSystemClick}>How Does This Work?</button>
                          <h1>Fantasy Home</h1>
                          <div class="ui placeholder">
                              <div class="paragraph">
                                  <div class="line"></div>
                                  <div class="line"></div>
                                  <div class="line"></div>
                                  <div class="line"></div>
                                  <div class="line"></div>
                              </div>
                              <div class="paragraph">
                                  <div class="line"></div>
                                  <div class="line"></div>
                                  <div class="line"></div>
                              </div>
                          </div>
                          <h1>Join Leagues</h1>
                          <div class="ui placeholder">
                              <div class="paragraph">
                                  <div class="line"></div>
                                  <div class="line"></div>
                                  <div class="line"></div>
                                  <div class="line"></div>
                                  <div class="line"></div>
                              </div>
                              <div class="paragraph">
                                  <div class="line"></div>
                                  <div class="line"></div>
                                  <div class="line"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

export default Home;
