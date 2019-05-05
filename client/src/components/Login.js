import React from 'react';
import axios from 'axios';
import '../styles/Login.css';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.onSignUpClick = this.onSignUpClick.bind(this);
    this.onHomeClick  = this.onHomeClick.bind(this);
  }

  handleUsernameInput = (e) => {
     this.setState({username: e.target.value});
  }

  onSignUpClick = (event) => {
    console.log('Sign me up!');
    window.location.replace('/signup');
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  handleLogin = () => {
    console.log("username: " + this.state.username);
    var formData = new FormData();
    formData.set("username", this.state.username);
    formData.set("password", "something");

    axios({
      method: 'post',
      url: 'http://localhost:7000/login',
      data: formData,
    }).then(function(response){
      console.log(response)
    }).catch(function(response){
      console.log(response)
    })
  }

  render(){
    return(
      <div className="login">
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
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={this.handleUsernameInput}
                    />
                  </div>
                </div>
                <div className="ui fluid large black submit button" onClick={this.handleLogin}>Login</div>
              </div>
              <div className="ui error message"></div>
            </form>

            <div className="ui message">
              New to eInsider? <a href="/signup" onClick={this.onSignUpClick}>Register</a>
            </div>
          </div>
        </div>
        <div className="ui fluid large black submit button" onClick={this.onHomeClick}>
          Go Back Home
        </div>
      </div>
    );
  }
}

export default Login;
