import React from 'react';
import axios from 'axios';
import '../styles/Login.css';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.onSignUpClick = this.onSignUpClick.bind(this);
    this.onHomeClick  = this.onHomeClick.bind(this);

    axios.defaults.withCredentials = true

  }

  handleUsernameInput = (e) => {
     this.setState({username: e.target.value});
  }

  handlePasswordInput = (e) => {
    this.setState({password: e.target.value});
  }

  onSignUpClick = (event) => {
    console.log('Sign me up!');
    window.location.replace('/signup');
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  onKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log("username: " + this.state.username);
      console.log("password: " + this.state.password);

      axios.post('https://einsider-backend.herokuapp.com/users/login', {
        "username": this.state.username,
        "password": this.state.password
      }).then(response => {
        let session = response.data;
        console.log(session.cookie);
        localStorage.setItem('session', JSON.stringify(response.data));
        window.location.replace('/');
      }).catch(error => {
        console.log(error.response);
        window.alert("Username or Password do not match our records");
      })
    }
  }

  handleLogin = () => {
    console.log("username: " + this.state.username);
    console.log("password: " + this.state.password);

    axios.post('https://einsider-backend.herokuapp.com/users/login', {
      "username": this.state.username,
      "password": this.state.password
    }).then(response => {
      let session = response.data;
      console.log(session.cookie);
      localStorage.setItem('session', JSON.stringify(response.data));
      window.location.replace('/');
    }).catch(error => {
      console.log(error.response);
      window.alert("Username or Password do not match our records");
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
            <form className="ui large form" onKeyPress={this.onKeyPress}>
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
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handlePasswordInput}
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
