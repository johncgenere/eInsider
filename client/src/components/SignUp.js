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
                    <input type="text" placeholder="Username"/>
                  </div>
                </div>
                <div className="ui fluid large black submit button">Register</div>
              </div>
              <div className="ui error message"></div>
            </form>
          </div>
        </div>
        <div className="ui fluid large black submit button" style={{marginTop: '3%'}} onClick={this.onHomeClick}>Go Back Home</div>
      </div>
    );
  }
}

export default SignUp;
