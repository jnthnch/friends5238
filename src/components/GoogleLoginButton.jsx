import React from 'react';
import store from 'store';
import GoogleLogin, { useGoogleLogin } from 'react-google-login';

import { GOOGLE_CLIENT_ID } from '../../constants';

const setUserName = async (name) => {
  await store.set('user', { name })
}

const successResponseGoogle = async (response) => {
  // await console.log(response);
  // await console.log(`hello ${response.Qt.vW}!!!`)
  await setUserName(response.Qt.vW)
  store.set('isLoggedIn', true)
}

const failureResponseGoogle = async (response) => {
  await console.log('failed', response);
  store.set('isLoggedIn', false)
}

const GoogleLoginButton = (props) => {
  const { login } = props;
  return (
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

  )
}

export default GoogleLoginButton

