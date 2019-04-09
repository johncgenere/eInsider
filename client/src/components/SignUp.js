import React from 'react';

class SignUp extends React.Component {
  constructor(props){
    super(props);

    this.onHomeClick = this.onHomeClick.bind(this);
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
                Register your account
              </div>
            </h2>
            <form class="ui large form">
              <div class="ui stacked segment">
                <div class="field">
                  <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input type="text" placeholder="Username"/>
                  </div>
                </div>
                <div class="ui fluid large black submit button">Register</div>
              </div>
              <div class="ui error message"></div>
            </form>
          </div>
        </div>
        <div class="ui fluid large black submit button" style={{marginTop: '3%'}} onClick={this.onHomeClick}>Go Back Home</div>
      </div>
    );
  }
}

export default SignUp;
