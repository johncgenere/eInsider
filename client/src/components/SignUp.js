import React from 'react';
import axios from 'axios';
import '../styles/SignUp.css';

class SignUp extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
  }

  handleUsernameInput = (e) => {
     this.setState({username: e.target.value});
  }

  onHomeClick = (event) => {
    console.log('Go home!');
    window.location.replace('/');
  }

  handleSignUp = () => {
    console.log("username: " + this.state.username);

    axios.post('http://localhost:7000/register', {
      "username": this.state.username,
      "password": "somewords"
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })
  }

  render(){
    return(
      <div className="signup">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui black image header">
              <div className="content">
                Register your account
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
                <div className="ui fluid large black submit button" onClick={this.handleSignUp}>Register</div>
              </div>
              <div className="ui error message"></div>
            </form>
          </div>
        </div>
        <div className="ui fluid large black submit button" onClick={this.onHomeClick}>Go Back Home</div>
      </div>
    );
  }
}

export default SignUp;
