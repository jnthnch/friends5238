import React from 'react';
import store from 'store';
import { Redirect } from "react-router-dom";


import isLoggedIn from '../helpers/isLoggedIn';
import GoogleLoginButton from './GoogleLoginButton.jsx';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };

    this.setIsSignedIn = this.setIsSignedIn.bind(this);
  }

  setIsSignedIn() {
    const { history } = this.props
    this.setState({ isSignedIn: true });
    store.set('isLoggedIn', true)
    history.push('/user-page')
  }

  render() {
    if (!!isLoggedIn()) {
      return <Redirect to="/user-page" />;
    }

    return (
      <React.Fragment>
        <div>
          <h1 className='header-1'>Login Page</h1>
        </div>
        <div>
          <GoogleLoginButton setIsSignedIn={this.setIsSignedIn}></GoogleLoginButton>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPage;
