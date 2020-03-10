import React from 'react';

import GoogleLoginButton from './GoogleLoginButton.jsx'

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };

    this.setIsSignedIn = this.setIsSignedIn.bind(this);
  }

  setIsSignedIn() {
    this.setState({ isSignedIn: true }, () => {
      console.log('isSignedIn ==> ', this.state.isSignedIn)
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className='header-1'>52.38</h1>
        </div>
        <div>
          <GoogleLoginButton setIsSignedIn={this.setIsSignedIn}></GoogleLoginButton>
        </div>
      </React.Fragment>
    );
  }
}

export default SignInPage;
