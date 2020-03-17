import React from 'react';
import store from 'store';
import { useHistory, useLocation } from "react-router-dom";

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_ID_BAD } from '../../../constants'

function LoginPage(props) {
  let { userAuth } = props
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    userAuth.authenticate(() => {
      history.replace(from);
    });
  };

  const setUserName = async (name) => {
    await store.set('user', { name });
    return
  }

  const successResponseGoogle = async (response) => {
    // await console.log(response);
    await setUserName(response.Qt.vW)
    store.set('isLoggedIn', true)
  }

  const failureResponseGoogle = async (response) => {
    // await console.log('failed', response);
    // store.set('isLoggedIn', false)
    console.log('failed')
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</button>
        )}
        buttonText="Login"
        onSuccess={(response) => { successResponseGoogle(response).then(() => login()) }}
        onFailure={failureResponseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default LoginPage;
