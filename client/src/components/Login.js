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
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui black image header">
              <div className="content">
                Log-in to your account
              </div>
            </h2>
            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" name="email" placeholder="Username"/>
                  </div>
                </div>
                <div className="ui fluid large black submit button">Login</div>
              </div>
              <div className="ui error message"></div>
            </form>

            <div className="ui message">
              New to eInsider? <a href="/signup" onClick={this.onSignUpClick}>Register</a>
            </div>
          </div>
        </div>
        <div className="ui fluid large black submit button"
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
