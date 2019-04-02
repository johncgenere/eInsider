import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
    this.onFantasyClick = this.onFantasyClick.bind(this);
  }


  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  onFantasyClick = (event) => {
    console.log('Go to fantasy!');
    window.location.replace('/fantasy');
  }

  render(){
    return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '3%'}}>eInsider</h1>
                <div class="ui secondary  menu" style={{width: '50%', marginLeft: '26%'}}>
                    <a class="item" onClick={this.onHomeClick}>Home</a>
                    <a class="item" onClick={this.onFantasyClick}>Fantasy</a>
                    <a class="item active">Profile</a>
                    <div class="right menu">
                        <a class="ui item" onClick={this.onHomeClick}>Logout</a>
                    </div>
                </div>

                <div class="ui grid" style={{width: '50%', marginLeft: '25%'}}>
                    <div class="twelve wide stretched column">
                        <div class="ui segment">
                            <h1>Leagues You Are In</h1>
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
                    <div class="four wide column">
                        <div class="ui vertical fluid right tabular menu">
                            <a class="item" style={{width: '150px'}}>Favorites</a>
                            <a class="active item" style={{width: '150px'}}>Fantasy Leages</a>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}

export default Profile;
