import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.onSignUpClick = this.onSignUpClick.bind(this);
    this.onHomeClick  = this.onHomeClick.bind(this);
  }

  onSignUpClick = (event) => {
    console.log('Sign me up!');
    window.location.replace('/signup');
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  render(){
    return(
      <div style={{marginLeft: '35%', marginRight:'35%', marginTop: '16%'}}>
        <div class="ui middle aligned center aligned grid">
          <div class="column">
            <h2 class="ui black image header">
              <div class="content">
                Log-in to your account
              </div>
            </h2>
            <form class="ui large form">
              <div class="ui stacked segment">
                <div class="field">
                  <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input type="text" name="email" placeholder="Username"/>
                  </div>
                </div>
                <div class="ui fluid large black submit button">Login</div>
              </div>
              <div class="ui error message"></div>
            </form>

            <div class="ui message">
              New to eInsider? <a href="#" onClick={this.onSignUpClick}>Register</a>
            </div>
          </div>
        </div>
        <div class="ui fluid large black submit button"
          style={{marginTop: '3%'}}
          onClick={this.onHomeClick}
        >
          Go Back Home
        </div>
      </div>
    );
  }
}

export default Login;
